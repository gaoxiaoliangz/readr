import { take, put, call } from 'redux-saga/effects'
import * as actions from '../actions'
import api from '../apifns'
import _ from 'lodash'
import * as ACTION_TYPES from '../constants/actionTypes'

export default function* watchLoginFlow(): any {
  // 使用 fetchEntity 会更好么？
  // 目前因为这种 put 类型的请求的返回值和一般的 entity 不一样所以不能直接使用
  while (true) {
    yield take(ACTION_TYPES.USER_LOGOUT)
    yield put(actions.logout.request())
    try {
      yield call(api.logout)
      yield put(actions.logout.success())
    } catch (error) {
      yield put(actions.logout.failure(error))
    }
  }
}
