import { take, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as ACTION_TYPES from '../actions/actionTypes'
import helpers from '../helpers'

export function* authSuccess(msg) {
  yield put(actions.sendNotification(msg) as any)
  yield put(actions.api.loadSession())
  helpers.redirect('/')
}

export default function* watchLoginFlow() {
  while (true) {
    const { type, payload } = yield take([ACTION_TYPES.SIGNIN, ACTION_TYPES.USER_LOGOUT.SUCCESS])

    if (type === ACTION_TYPES.SIGNIN) {
      yield put(actions.api.basicAuth(payload))
      // same as signup
      const { type: authType } = yield take([ACTION_TYPES.BASIC_AUTH.SUCCESS, ACTION_TYPES.BASIC_AUTH.FAILURE])
      if (authType === ACTION_TYPES.BASIC_AUTH.SUCCESS) {
        yield authSuccess('登录成功！')
      }
    }

    if (type === ACTION_TYPES.USER_LOGOUT.SUCCESS) {
      // the most efficient way to destroy current user data
      window.location.reload()
    }
  }
}
