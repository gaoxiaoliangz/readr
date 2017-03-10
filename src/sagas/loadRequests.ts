import { take, call, fork } from 'redux-saga/effects'
import * as actions from '../actions'
import api from '../../services/api'
import _ from 'lodash'
import { fetchEntity } from './utils'
import * as ACTION_TYPES from '../../constants/actionTypes'

const OPTIONS = 'options'
const ID = 'id'
const DATA = 'data'
const TYPE = 'type'

export const API_CONFIG_KEYS = [OPTIONS, ID, DATA]
export const RESERVED_ACTION_KYES = [TYPE, ...API_CONFIG_KEYS]

const fetchBook = fetchEntity.bind(null, actions.book, api.fetchBook)
const fetchBookContent = fetchEntity.bind(null, actions.bookContent, api.fetchBookContent)
const fetchBooks = fetchEntity.bind(null, actions.books, api.fetchBooks)
const fetchUsers = fetchEntity.bind(null, actions.users, api.fetchUsers)

function* handleLoad(fetchFn, parsedAction, callApi?): any {
  const {apiConfig, payload} = parsedAction
  // 在检查是否有数据的算法完成之前默认直接 call api
  if (typeof callApi === 'undefined' || callApi === true) {
    yield call(fetchFn, apiConfig, payload)
  }
}

export default function* watchAllLoadRequests(): any {
  while (true) {
    const action = yield take(actions.LOAD_ACTIONS)
    const apiConfig = _.pick(action, API_CONFIG_KEYS)

    // 如果直接使用 payload 可能在 pagination 之类的 reducer 里面会有一些麻烦
    // 因为可能比较难判断哪个是 key
    const payload = _.omit(action, RESERVED_ACTION_KYES)

    const parsedAction = { apiConfig, payload }

    switch (action.type) {
      case ACTION_TYPES.LOAD_USERS:
        yield fork(handleLoad, fetchUsers, parsedAction)
        break

      case ACTION_TYPES.LOAD_BOOKS:
        yield fork(handleLoad, fetchBooks, parsedAction)
        break

      case ACTION_TYPES.LOAD_BOOK:
        yield fork(handleLoad, fetchBook, parsedAction)
        break

      case ACTION_TYPES.LOAD_BOOK_CONTENT:
        yield fork(handleLoad, fetchBookContent, parsedAction)
        break

      default:
      // nothing happens here
    }
  }
}
