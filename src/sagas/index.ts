import { fork } from 'redux-saga/effects'
import _ from 'lodash'
// import watchAllLoadRequests from './watchAllLoadRequests'
import watchLoginFlow from './watchLoginFlow'
import watchViewer from './watchViewer'
import watchLoadTrigger from './watchLoadTrigger'

export default function* rootSaga() {
  yield [
    fork(watchLoginFlow),
    fork(watchViewer),
    // fork(watchSession),
    // fork(watchAllLoadRequests),
    fork(watchLoadTrigger)
  ]
}
