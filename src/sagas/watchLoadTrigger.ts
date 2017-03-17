import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import urlJoin from 'url-join'
import _ from 'lodash'
import getApiRoot from '../helpers/getApiRoot'
import { createActionEntity2 } from '../actions/utils'
import $request from '../utils/network/request'
import { FETCH_STATUS } from '../constants'
import { expandEntities, normalizeJSON } from '../utils/entity'

const API_ROOT = getApiRoot()

function* handleLoad(action: LoaderAction) {
  const { meta, payload } = action
  const { request } = payload
  const { schema } = meta
  const flowActions = createActionEntity2(meta.types)

  // handle request
  yield put(flowActions.request(payload, meta))

  try {
    // handle success
    const response = yield $request(urlJoin(API_ROOT, request.url), {
      ...request,
      ...{
        cookie: _.isUndefined(request.cookie) ? request.injectedCookie : request.cookie
      }
    })
    if (schema) {
      let normalized = normalizeJSON(response.json, schema)
      const entities = expandEntities(normalized.entities, FETCH_STATUS.LOADED)
      normalized = {
        ...normalized,
        ...{
          ...{ entities }
        }
      }
      yield put(flowActions.success({ response, normalized }, meta))
    } else {
      yield put(flowActions.success({ response }, meta))
    }
  } catch (error) {
    // handle error
    console.error(error)
    yield put(flowActions.failure(error, meta))
  }
}

function* filterActions(action: LoaderAction) {
  if (action.meta && action.meta.types && action.meta.types.TRIGGER === action.type) {
    yield call(handleLoad, action)
  }
}

export default function* watchLoadTrigger() {
  yield takeEvery('*', filterActions)
}