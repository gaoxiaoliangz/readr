import { fork } from 'redux-saga/effects'
import _ from 'lodash'
import watchAllLoadRequests from './watchAllLoadRequests'
import watchLoginFlow from './watchLoginFlow'
import watchViewer from './watchViewer'
import watchSession from './watchSession'
import watchAllLoadRequests2 from './watchAllLoadRequests2'

export default function* rootSaga() {
  yield [
    fork(watchLoginFlow),
    fork(watchViewer),
    fork(watchSession),
    fork(watchAllLoadRequests),
    fork(watchAllLoadRequests2)
  ]
}
