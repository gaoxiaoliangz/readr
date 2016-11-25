import { take, put, call, fork, select, apply } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import _ from 'lodash'
import watchAllLoadRequests from './loadRequests'
import watchLoginFlow from './loginFlow'
import watchViewer from './viewer'

export default function* rootSaga() {
  yield [
    fork(watchAllLoadRequests),
    fork(watchLoginFlow),
    fork(watchViewer)
  ]
}
