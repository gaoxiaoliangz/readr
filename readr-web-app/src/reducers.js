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
  SET_DISABLE_SCROLL_LISTENER,
  LOAD_BOOK,
  DOWNLOAD_BOOK,
  GET_LOCAL_BOOKS
} from './actions'
import { FETCH_STATUS } from './constants'

export const makeReducer = (type, initialState, fn = (state, action) => action.payload) =>
  (state = initialState, action) =>
    (action.type === type
      ? fn(state, action)
      : state)

const downloadStatus = (state = {}, { type, payload }) => {
  if (type === DOWNLOAD_BOOK.REQUEST) {
    return {
      ...state,
      [payload]: FETCH_STATUS.FETCHING
    }
  }
  if (type === DOWNLOAD_BOOK.SUCCESS) {
    return {
      ...state,
      [payload.id]: FETCH_STATUS.SUCCESS
    }
  }
  if (type === DOWNLOAD_BOOK.FAILURE) {
    return {
      ...state,
      [payload.id]: FETCH_STATUS.FAILURE
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
    // TODO: 放到外层
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
    loadStatus: (state = FETCH_STATUS.NONE, { type }) => {
      switch (type) {
        case LOAD_BOOK.REQUEST:
          return FETCH_STATUS.FETCHING
        case LOAD_BOOK.SUCCESS:
          return FETCH_STATUS.SUCCESS
        case LOAD_BOOK.FAILURE:
          return FETCH_STATUS.FAILURE
        default:
          return state
      }
    },
    isEstimatingLayout: makeReducer(UPDATE_BOOK_ESTIMATING_STATE, false),
    bookReady: makeReducer(UPDATE_BOOK_READY_STATE, false),
    currBookId: makeReducer(SET_CURR_BOOK_ID, null),
    bookNodes: makeReducer(LOAD_BOOK.SUCCESS, {}, (state, action) => {
      return {
        ...state,
        [action.payload.id]: action.payload.nodes
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
  localBooks: makeReducer(GET_LOCAL_BOOKS.SUCCESS, {}),
  isUploadingBook
})
