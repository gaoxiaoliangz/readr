import { combineReducers } from 'redux'
import _ from 'lodash'
import {
  PUT_BOOKS, START_LOADING_TASK, STOP_LOADING_TASK,
  CLEAR_ALL_LOADING_TASK, SET_AUTH_STATUS, UPDATE_USER,
  UPDATE_DOWNLOAD_STATUS,
  PUT_LOCAL_BOOKS,
  SET_UPLOADING_STATUS,
  PUT_BOOK_CONFIG,
  SET_BOOK_FETCH_STATUS,
  UPDATE_BOOK_ESTIMATING_STATE,
  UPDATE_BOOK_READY_STATE,
  SET_CURR_BOOK_ID,
  SET_BOOK_NODES,
  SET_BOOK_LAYOUTS,
  SET_BOOK_PAGES,
  SET_CLIENT_PROGRESS,
  SET_REMOTE_PROGRESS,
  SHOW_TOP_PANEL,
  SHOW_TOC,
  SHOW_PREF,
  SET_DISABLE_SCROLL_LISTENER
} from './actions'
import { FETCH_STATUS } from './constants'

export const makeReducer = (type, initialState, fn = payload => payload) => (state = initialState, action) =>
  (action.type === type
    ? fn(state, action)
    : state)

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

export default combineReducers({
  shelf: combineReducers({
    downloadStatus,
    books: shelfBooks,
  }),
  book: combineReducers({
    config: makeReducer(PUT_BOOK_CONFIG, {
      fontSize: 15,
      pageHeight: 700,
      theme: 'white',
      scrollMode: false,
      contentWidth: 600,
      lineHeight: 24,
    }),
    fetchStatus: makeReducer(SET_BOOK_FETCH_STATUS, FETCH_STATUS.NONE),
    isEstimatingLayout: makeReducer(UPDATE_BOOK_ESTIMATING_STATE, false),
    bookReady: makeReducer(UPDATE_BOOK_READY_STATE, false),
    currBookId: makeReducer(SET_CURR_BOOK_ID, null),
    bookNodes: makeReducer(SET_BOOK_NODES, {}, (state, { id, nodes }) => {
      return {
        ...state,
        [id]: nodes
      }
    }),
    bookLayouts: makeReducer(SET_BOOK_LAYOUTS, {}),
    bookPages: makeReducer(SET_BOOK_PAGES, {}),
    clientProgress: makeReducer(SET_CLIENT_PROGRESS, 0),
    remoteProgress: makeReducer(SET_REMOTE_PROGRESS, 0),
    showTopPanel: makeReducer(SHOW_TOP_PANEL, false),
    showToc: makeReducer(SHOW_TOC, false),
    showPref: makeReducer(SHOW_PREF, false),
    disableScrollListener: makeReducer(SET_DISABLE_SCROLL_LISTENER, false),
  }),
  user: makeReducer(UPDATE_USER, {}),
  loadingTasks,
  authStatus,
  localBooks,
  isUploadingBook
})
