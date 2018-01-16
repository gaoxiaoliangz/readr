import { take, put } from 'redux-saga/effects'
import _ from 'lodash'
import * as actions from '../actions'
import * as ACTION_TYPES from '../actions/actionTypes'
import { authSuccess } from './watchLoginFlow'

export default function* watchSignup() {
  while (true) {
    const { payload } = yield take(ACTION_TYPES.SIGNUP.REQUEST)
    const login = _.get(payload, 'request.data.email')
    const password = _.get(payload, 'request.data.password')

    // have to define failure here
    // if first signup failed, saga will pause here
    // and take next success, by then the old signup request payload will be used
    // and causing basicAuth to fail
    const { type: signupType } = yield take([ACTION_TYPES.SIGNUP.SUCCESS, ACTION_TYPES.SIGNUP.FAILURE])

    if (signupType === ACTION_TYPES.SIGNUP.SUCCESS) {
      yield put(actions.api.basicAuth({ login, password }))
      yield take(ACTION_TYPES.BASIC_AUTH.SUCCESS)
      yield authSuccess('注册成功！')
    }
  }
}
