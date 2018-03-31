import { combineReducers } from 'redux'
import _ from 'lodash'
import {
  PUT_BOOKS, START_LOADING_TASK, STOP_LOADING_TASK,
  CLEAR_ALL_LOADING_TASK, SET_AUTH_STATUS, UPDATE_USER,
  UPDATE_DOWNLOAD_STATUS,
  PUT_LOCAL_BOOKS,
  SET_UPLOADING_STATUS
} from './actions'

const downloadStatus = (state = {}, { type, payload }) => {
  if (type === UPDATE_DOWNLOAD_STATUS) {
    return {
      ...state,
      [payload.id]: payload.status
    }
  }
  return state
}

const shelfBooks = (state = {
  entries: {},
  pagination: {
    entries: []
  }
}, { type, payload: books }) => {
  if (type === PUT_BOOKS) {
    const entries = books.map(b => b.id)
    const booksObj = books.reduce((obj, book) => {
      return {
        ...obj,
        [book.id]: book
      }
    }, {})
    return {
      ...state,
      entries: booksObj,
      pagination: {
        entries
      }
    }
  }
  return state
}

const localBooks = (state = {}, { type, payload }) => {
  if (type === PUT_LOCAL_BOOKS) {
    return payload
  }
  return state
}

const isUploadingBook = (state = false, { type, payload }) =>
  (type === SET_UPLOADING_STATUS ? payload : state)

const loadingTasks = (state = {}, { type, payload }) => {
  switch (type) {
    case START_LOADING_TASK:
      return {
        ...state,
        [payload]: {
          ..._.get(state, ['loading', payload]),
          isLoading: true
        }
      }

    case STOP_LOADING_TASK:
      return {
        ...state,
        [payload]: {
          ..._.get(state, ['loading', payload]),
          isLoading: false
        }
      }

    case CLEAR_ALL_LOADING_TASK:
      return {}

    default:
      return state
  }
}

const authStatus = (state = 0, { type, payload }) => {
  if (type === SET_AUTH_STATUS) {
    return payload
  }
  return state
}

const user = (state = {}, { type, payload }) => {
  if (type === UPDATE_USER) {
    return payload
  }
  return state
}

export default combineReducers({
  shelf: combineReducers({
    downloadStatus,
    books: shelfBooks
  }),
  user,
  loadingTasks,
  authStatus,
  localBooks,
  isUploadingBook
})
