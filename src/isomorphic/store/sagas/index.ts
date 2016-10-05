import { take, put, call, fork, select, apply } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import * as actions from '../actions'
import api from '../../services/api'
import * as selectors from '../selectors'

function* fetchEntity(entity: ActionEntity, apiFn, apiArgs): any {
  yield put(entity.request(apiArgs))
  const {response, error} = yield call(() => {
    return apiFn.apply(null, apiArgs)
  })
  if (response) {
    let action = entity.success(response, apiArgs)
    yield put(action)
    return action
  } else {
    let action = entity.failure(error, apiArgs)
    yield put(action)
    return action
  }
}

const fetchBooks = fetchEntity.bind(null, actions.books, api.fetchBooks)
const fetchUsers = fetchEntity.bind(null, actions.users, api.fetchUsers)

function* loadBooks(options, callApi?: boolean): any {
  // const books = yield select(selectors.common.entities('books'))
  if (callApi) {
    yield call(fetchBooks, [options])
  }
}

function* loadUsers(options, callApi?: boolean): any {
  if (callApi) {
    yield call(fetchUsers, [options])
  }
}

function* watchLoadBooks(): any {
  while (true) {
    const { options } = yield take(actions.LOAD_BOOKS)
    yield loadBooks(options, true)
  }
}

function* watchLoadUsers(): any {
  while (true) {
    const { options } = yield take(actions.LOAD_USERS)
    yield loadUsers(options, true)
  }
}

export default function* rootSaga() {
  yield [
    fork(watchLoadBooks),
    fork(watchLoadUsers)
  ]
}
