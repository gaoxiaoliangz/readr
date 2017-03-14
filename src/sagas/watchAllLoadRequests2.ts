import { take, call, put } from 'redux-saga/effects'
import urlJoin from 'url-join'
import _ from 'lodash'
import { normalize } from 'normalizr'
import humps from 'humps'
import getApiRoot from '../helpers/getApiRoot'
import { createActionEntity2 } from '../actions/utils'
import $request from '../utils/network/request'

const API_ROOT = getApiRoot()

const parseEntity = (json, schema) => {
  const camelizedJson = humps.camelizeKeys(json)
  return normalize(camelizedJson, schema)
}

interface LoaderAction {
  payload: {
    response?: any
    id?: string
    request: ActionRequestObj & {
      injectedCookie?: any
    }
  },
  meta: {
    schema?: any
    types: RequestTypes
    isSagaActions?: boolean
  }
}
function* handleLoadReq(action: LoaderAction) {
  const { meta, payload } = action
  const { request } = payload
  const { schema } = meta
  const flowActions = createActionEntity2(meta.types)

  yield put(flowActions.request(payload, meta))
  try {
    let response = yield $request(urlJoin(API_ROOT, request.url), {
      ...request,
      ...{
        cookie: _.isUndefined(request.cookie) ? request.injectedCookie : request.cookie
      }
    })
    if (schema) {
      response = parseEntity(response.json, schema)
    }
    yield put(flowActions.success({ response }, {
      ...{
        isNormalized: Boolean(schema)
      },
      ...meta
    }))
  } catch (error) {
    yield put(flowActions.failure(error, meta))
  }
}

export default function* watchAllLoadRequests2() {
  while (true) {
    const action: LoaderAction = yield take('*')
    if (action.meta && action.meta.isSagaActions) {
      yield call(handleLoadReq, action)
    }
  }
}
