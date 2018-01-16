import { call, put, takeEvery } from 'redux-saga/effects'
import urlJoin from 'url-join'
import _ from 'lodash'
import getAPIRoot from '../helpers/getAPIRoot'
import { createActionEntity } from '../actions/utils'
import $request from '../utils/network/request'
import { FETCH_STATUS } from '../constants'
import { expandEntities, normalizeJSON } from '../utils/entity'

const API_ROOT = getAPIRoot().rest

function* handleLoad(action: LoaderAction) {
  const { meta, payload } = action
  const { request } = payload
  const { schema } = meta
  const flowActions = createActionEntity(meta.types)

  // handle request
  yield put(flowActions.request(payload, meta))

  try {
    // handle success
    const response = yield $request(urlJoin(API_ROOT, request.url), {
      ...request as any,
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
