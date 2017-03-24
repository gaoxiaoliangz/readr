import { take, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as ACTION_TYPES from '../constants/actionTypes'
import helpers from '../helpers'

export default function* watchLoginFlow() {
  while (true) {
    const { type } = yield take([ACTION_TYPES.BASIC_AUTH.SUCCESS, ACTION_TYPES.USER_LOGOUT.SUCCESS])

    if (type === ACTION_TYPES.BASIC_AUTH.SUCCESS) {
      yield put(actions.sendNotification('登录成功') as any)
      yield put(actions.api.loadSession())
      helpers.redirect('/')
    }

    if (type === ACTION_TYPES.USER_LOGOUT.SUCCESS) {
      yield put(actions.api.loadSession())
      helpers.redirect('/signin')
    }
  }
}
