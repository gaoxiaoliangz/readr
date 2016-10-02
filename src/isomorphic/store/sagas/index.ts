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
    yield put(entity.success(response, apiArgs))
  } else {
    yield put(entity.failure(error, apiArgs))
  }
}

export const fetchBooks = fetchEntity.bind(null, actions.books, api.fetchBooks)

function* watchFetchBooks(): any {
  while (true) {
    const { keyword } = yield take(actions.FETCH_BOOKS)
    yield fork(fetchBooks, [keyword])
  }
}


export default function* rootSaga() {
  yield [
    fork(watchFetchBooks)
  ]
}
