import { take, put, call, fork, select, apply } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import * as actions from '../actions'
import api from '../../services/api'

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

export const fetchBooks = fetchEntity.bind(null, actions.books, api.fetchBooks)

function* watchFetchBooks(): any {
  while (true) {
    const { keyword } = yield take(actions.FETCH_BOOKS)
    const {response, error} = yield call(fetchBooks, [keyword])
    if (response) {
      yield put(actions.paginateBooks(keyword, response))
    }
  }
}


export default function* rootSaga() {
  yield [
    fork(watchFetchBooks)
  ]
}
