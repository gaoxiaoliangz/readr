import { fork } from 'redux-saga/effects'
import watchViewer from './watchViewer'
import watchLoadTrigger from './watchLoadTrigger'
import watchLoginFlow from './watchLoginFlow'
import watchSignup from './watchSignup'

export default function* rootSaga() {
  yield [
    fork(watchViewer),
    fork(watchLoadTrigger),
    fork(watchLoginFlow),
    fork(watchSignup)
  ]
}
