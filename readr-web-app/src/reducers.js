import { combineReducers } from 'redux'
import _ from 'lodash'
import {
  PUT_BOOKS, START_LOADING_TASK, STOP_LOADING_TASK,
  CLEAR_ALL_LOADING_TASK, SET_AUTH_STATUS, UPDATE_USER
} from './actions'

const shelf = (state = {
  bookPagination: {},
  books: {},
  isUploadingBook: false
}, action) => {
  switch (action.type) {
    case PUT_BOOKS: {
      const books = action.payload
      const entries = books.map(b => b.id)
      const booksObj = books.reduce((obj, book) => {
        return {
          ...obj,
          [book.id]: book
        }
      }, {})
      return {
        ...state,
        books: booksObj,
        bookPagination: {
          entries
        }
      }
    }

    default:
      return state
  }
}

export const loadingTasks = (state = {}, { type, payload }) => {
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
  shelf,
  user,
  loadingTasks,
  authStatus
})
