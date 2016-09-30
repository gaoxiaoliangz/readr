import { take, put, call, fork, select } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import * as actions from '../actions'
import * as api from '../../api'

// function* taskA() {
//   console.log('task a')
// }

// function* taskB() {

//   console.log('task b')
// }

export function* fetchData(action) {
   try {
      const data = yield call(api.fetchDoubanBooks, action.payload.keyword)
      yield put({type: 'FETCH_SUCCEEDED', data}) as any
   } catch (error) {
      yield put({type: 'FETCH_FAILED', error})
   }
}

function* watchFetchData(param) {
  // console.log(param)
  // yield* takeEvery(actions.DOUBAN_BOOKS.REQUEST, fetchData)
  while (true) {
    const wtf = yield take([actions.BOOKS_REQUEST, actions.AUTH_REQUEST])
    console.log(wtf)
  }
}

export default function* rootSaga() {
  yield fork(watchFetchData)
}
