import { take, call, fork, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import urlJoin from 'url-join'
import { normalize } from 'normalizr'
import humps from 'humps'
import * as actions from '../actions'
import * as ACTION_TYPES from '../constants/actionTypes'
import callApi from '../utils/api/callApi'
import getApiRoot from '../helpers/getApiRoot'
import handleResponse from '../utils/api/handleResponse'
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
    // let response = yield callApi(urlJoin(API_ROOT, request.url), {
    //   cookies: request.cookies
    // })
    let response = yield $request(urlJoin(API_ROOT, request.url), {
      ...request,
      ...{
        // todo: rename to cookie
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
