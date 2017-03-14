import { take, call, put } from 'redux-saga/effects'
import urlJoin from 'url-join'
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

function* handleLoadReq(action) {
  const { meta, payload } = action
  const { request } = payload
  const { parser, schema } = meta
  const flowActions = createActionEntity2(meta.types)

  yield put(flowActions.request(payload, meta))
  try {
    let response = yield $request(urlJoin(API_ROOT, request.url), {
      ...request,
      ...{
        // TODO: rename to cookie
        cookie: request.cookies
      }
    })
    if (schema) {
      response = parseEntity(response.json, schema)
    } else {
      response = parser ? parser(response) : response
    }
    yield put(flowActions.success(response, {
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
    const action = yield take('*')
    if (action.meta && action.meta.isSagaActions) {
      yield call(handleLoadReq, action)
    }
  }
}
