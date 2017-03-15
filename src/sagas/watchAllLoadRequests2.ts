import { take, call, put, fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import urlJoin from 'url-join'
import _ from 'lodash'
import getApiRoot from '../helpers/getApiRoot'
import { createActionEntity2 } from '../actions/utils'
import $request from '../utils/network/request'

const API_ROOT = getApiRoot()

function* handleLoadReq(action: LoaderAction) {
  const { meta, payload } = action
  const { request } = payload
  const flowActions = createActionEntity2(meta.types)

  yield put(flowActions.request(payload, meta))
  try {
    let response = yield $request(urlJoin(API_ROOT, request.url), {
      ...request,
      ...{
        cookie: _.isUndefined(request.cookie) ? request.injectedCookie : request.cookie
      }
    })

    yield put(flowActions.success({ response, id: payload.id }, meta))
  } catch (error) {
    yield put(flowActions.failure({ error, id: payload.id }, meta))
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
