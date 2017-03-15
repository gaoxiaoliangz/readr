import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import urlJoin from 'url-join'
import _ from 'lodash'
import humps from 'humps'
import { normalize } from 'normalizr'
import getApiRoot from '../helpers/getApiRoot'
import { createActionEntity2 } from '../actions/utils'
import $request from '../utils/network/request'
import { FETCH_STATUS } from '../constants'

const API_ROOT = getApiRoot()

const normalizeEntity = (json, schema) => {
  const camelizedJson = humps.camelizeKeys(json)
  return normalize(camelizedJson, schema)
}

const assignEntityStatus = (normalizedData, fetchStatus, error?) => {
  const entities = _.mapValues(normalizedData.entities || {}, (val) => {
    return {
      entities: val,
      errors: error ? _.mapValues(val, () => error) : undefined,
      fetchStatus: _.mapValues(val, () => fetchStatus)
    }
  })
  return {
    ...normalizedData,
    ...{ entities }
  }
}

const mockNormalizedData = (key, id) => {
  return {
    result: [id],
    entities: {
      [key]: {
        [id]: {}
      }
    }
  }
}

function* handleLoadReq(action: LoaderAction) {
  const { meta, payload } = action
  const { request, targetId } = payload
  const { schema } = meta
  const flowActions = createActionEntity2(meta.types)

  const dataR = targetId ? assignEntityStatus(mockNormalizedData(schema.key, targetId), FETCH_STATUS.LOADING) : undefined
  const payloadR = {
    ...payload,
    ...{
      entities: dataR
    }
  }
  yield put(flowActions.request(payloadR, meta))
  try {
    let response = yield $request(urlJoin(API_ROOT, request.url), {
      ...request,
      ...{
        cookie: _.isUndefined(request.cookie) ? request.injectedCookie : request.cookie
      }
    })
    const dataS = schema
      ? assignEntityStatus(normalizeEntity(response.json, schema), FETCH_STATUS.LOADED)
      : { response }
    yield put(flowActions.success(dataS, meta))
  } catch (error) {
    console.error(error)
    const dataE = targetId ? assignEntityStatus(mockNormalizedData(schema.key, targetId), FETCH_STATUS.LOADING, error) : undefined
    const payloadE = {
      error,
      entities: dataE
    }
    yield put(flowActions.failure(payloadE, meta))
  }
}

function* filterActions(action: LoaderAction) {
  if (action.meta && action.meta.types && action.meta.types.TRIGGER === action.type) {
    yield call(handleLoadReq, action)
  }
}

export default function* watchAllLoadRequests2() {
  yield takeEvery('*', filterActions)
}
