import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import * as actions from '../actions'
import * as ACTION_TYPES from '../constants/actionTypes'
import webAPI from '../webAPI'

function* handleSession(action) {
  yield put(actions.session.request())
  try {
    const result = yield call(webAPI.auth)
    yield put(actions.session.success(result.json))
  } catch (error) {
    yield put(actions.session.failure(error))
  }
}

export default function* watchSession() {
  yield takeLatest(ACTION_TYPES.LOAD_SESSION, handleSession)
}
