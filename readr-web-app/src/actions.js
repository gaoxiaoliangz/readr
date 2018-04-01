import { FETCH_STATUS } from './constants'
import { fetchBook, SubscriptionManager } from './service'
import createDbModel from './local-db'
import { htmlStringToNodes } from './containers/Book/layout/nodes'

const bookDbModel = createDbModel('books')
const userDbModel = createDbModel('users')
const subs = new SubscriptionManager()

export const START_LOADING_TASK = 'START_LOADING_TASK'
export const STOP_LOADING_TASK = 'STOP_LOADING_TASK'
export const CLEAR_ALL_LOADING_TASK = 'CLEAR_ALL_LOADING_TASK'
export const SET_SHELF_BOOKS_STATUS = 'SET_SHELF_BOOKS_STATUS'
export const PUT_BOOKS = 'PUT_BOOKS'
export const SET_AUTH_STATUS = 'SET_AUTH_STATUS'
export const HANDLE_USER_STATE_CHANGE = 'HANDLE_USER_STATE_CHANGE'
export const UPDATE_USER = 'UPDATE_USER'
export const FETCH_BOOKS = 'FETCH_BOOKS'
export const SET_SHELF_STATUS = 'SET_SHELF_STATUS'
export const SET_UPLOADING_STATUS = 'SET_UPLOADING_STATUS'
export const UPDATE_DOWNLOAD_STATUS = 'UPDATE_DOWNLOAD_STATUS'
export const PUT_LOCAL_BOOKS = 'PUT_LOCAL_BOOKS'
export const UPLOAD_BOOK = 'UPLOAD_BOOK'
export const REGISTER_OWNED_BOOKS_WATCHER = 'REGISTER_OWNED_BOOKS_WATCHER'
export const REGISTER_OWNED_BOOKS_WATCHER_SUCCESS = 'REGISTER_OWNED_BOOKS_WATCHER_SUCCESS'
export const DEL_BOOK = 'DEL_BOOK'
export const DEL_BOOK_SUCCESS = 'DEL_BOOK_SUCCESS'
export const INIT_BOOK_CONFIG = 'INIT_BOOK_CONFIG'
export const PUT_BOOK_CONFIG = 'PUT_BOOK_CONFIG'
export const SET_BOOK_FETCH_STATUS = 'SET_BOOK_FETCH_STATUS'

export const makeAction = (type, payload, meta, error) =>
  ({ type, payload, meta, error })

export const makeActionCreator = type => () => makeAction(type)

export const startLoadingTask = task => ({
  type: START_LOADING_TASK,
  payload: task
})

export const stopLoadingTask = task => ({
  type: STOP_LOADING_TASK,
  payload: task
})

export const clearAllLoadingTask = () => ({
  type: CLEAR_ALL_LOADING_TASK,
})

// 0: none, 1: logged in, 2: processing
export const setAuthStatus = status => ({
  type: SET_AUTH_STATUS,
  payload: status
})

// todo
export const setShelfBookStatus = status => ({
  type: SET_SHELF_BOOKS_STATUS,
  payload: status
})

export const putBooks = books => ({
  type: PUT_BOOKS,
  payload: books
})

export const handleUserStateChange = user => ({
  type: HANDLE_USER_STATE_CHANGE,
  payload: user
})

export const updateUser = user => ({
  type: UPDATE_USER,
  payload: user
})

export const fetchBooks = () => ({
  type: FETCH_BOOKS
})

export const setUploadingStatus = status => ({
  type: SET_UPLOADING_STATUS,
  payload: status
})

export const updateDownloadStatus = (id, status) => ({
  type: UPDATE_DOWNLOAD_STATUS,
  payload: { id, status }
})

export const DOWNLOAD_BOOK_REQUEST = 'DOWNLOAD_BOOK_REQUEST'
export const DOWNLOAD_BOOK_SUCCESS = 'DOWNLOAD_BOOK_SUCCESS'
export const DOWNLOAD_BOOK_FAILURE = 'DOWNLOAD_BOOK_FAILURE'
// TODO: 使用 reducer 处理下载状态，而不是手动设置
export const downloadBook = id => {
  return dispatch => {
    dispatch(updateDownloadStatus(id, FETCH_STATUS.FETCHING))
    return fetchBook(id, true)
      .then(book => {
        bookDbModel.add(book)
        dispatch(updateDownloadStatus(id, FETCH_STATUS.SUCCESS))
        return dispatch(makeAction(DOWNLOAD_BOOK_SUCCESS, book))
      })
      .catch(() => {
        dispatch(makeAction(DOWNLOAD_BOOK_FAILURE))
        return dispatch(updateDownloadStatus(id, FETCH_STATUS.FAILURE))
      })
  }
}

export const GET_LOCAL_BOOKS_REQUEST = 'GET_LOCAL_BOOKS_REQUEST'
export const GET_LOCAL_BOOKS_SUCCESS = 'GET_LOCAL_BOOKS_SUCCESS'
export const GET_LOCAL_BOOKS_FAILURE = 'GET_LOCAL_BOOKS_FAILURE'
export const getLocalBooks = () => {
  return dispatch => {
    dispatch(makeAction(GET_LOCAL_BOOKS_REQUEST))
    return bookDbModel.listAll()
      .then(books => {
        dispatch(makeAction(GET_LOCAL_BOOKS_SUCCESS))
        // TODO: 使用 success action
        return dispatch(putLocalBooks(books))
      })
      .catch(err => {
        return dispatch(makeAction(GET_LOCAL_BOOKS_SUCCESS, err, null, true))
      })
  }
}

export const putLocalBooks = books => ({
  type: PUT_LOCAL_BOOKS,
  payload: books
})

export const uploadBook = file => ({
  type: UPLOAD_BOOK,
  payload: file
})

export const registerOwnedBooksWatcher = makeActionCreator(REGISTER_OWNED_BOOKS_WATCHER)

export const registerOwnedBooksWatcherSuccess = makeActionCreator(REGISTER_OWNED_BOOKS_WATCHER_SUCCESS)

export const delBook = id => makeAction(DEL_BOOK, id)

export const delBookSuccess = makeActionCreator(DEL_BOOK_SUCCESS)

export const initBookConfig = config => makeAction(INIT_BOOK_CONFIG, config)

export const putBookConfig = config => makeAction(PUT_BOOK_CONFIG, config)

export const setBookFetchStatus = status => makeAction(SET_BOOK_FETCH_STATUS, status)

export const UPDATE_BOOK_ESTIMATING_STATE = 'UPDATE_BOOK_ESTIMATING_STATE'
export const updateBookEstimatingState = state =>
  makeAction(UPDATE_BOOK_ESTIMATING_STATE, state)

export const UPDATE_BOOK_READY_STATE = 'UPDATE_BOOK_READY_STATE'
export const updateBookReadyState = state =>
  makeAction(UPDATE_BOOK_READY_STATE, state)

export const SET_CURR_BOOK_ID = 'SET_CURR_BOOK_ID'
export const setCurrBookId = state =>
  makeAction(SET_CURR_BOOK_ID, state)

export const SET_BOOK_NODES = 'SET_BOOK_NODES'
export const setBookNodes = state =>
  makeAction(SET_BOOK_NODES, state)

export const SET_BOOK_LAYOUTS = 'SET_BOOK_LAYOUTS'
export const setBookLayouts = state =>
  makeAction(SET_BOOK_LAYOUTS, state)

export const SET_BOOK_PAGES = 'SET_BOOK_PAGES'
export const setBookPages = payload =>
  makeAction(SET_BOOK_PAGES, payload)

export const SET_CLIENT_PROGRESS = 'SET_CLIENT_PROGRESS'
export const setClientProgress = payload =>
  makeAction(SET_CLIENT_PROGRESS, payload)

export const SET_REMOTE_PROGRESS = 'SET_REMOTE_PROGRESS'
export const setRemoteProgress = payload =>
  makeAction(SET_REMOTE_PROGRESS, payload)

export const SHOW_TOP_PANEL = 'SHOW_TOP_PANEL'
export const setShowTopPanel = payload =>
  makeAction(SHOW_TOP_PANEL, payload)

export const SHOW_TOC = 'SHOW_TOC'
export const setShowToc = payload =>
  makeAction(SHOW_TOC, payload)

export const SHOW_PREF = 'SHOW_PREF'
export const setShowPref = payload =>
  makeAction(SHOW_PREF, payload)

export const SET_DISABLE_SCROLL_LISTENER = 'SET_DISABLE_SCROLL_LISTENER'
export const setDisableScrollListener = payload =>
  makeAction(SET_DISABLE_SCROLL_LISTENER, payload)

export const INIT_BOOK = 'INIT_BOOK'
export const initBook = payload =>
  makeAction(INIT_BOOK, payload)

export const LOAD_BOOK_REQUEST = 'LOAD_BOOK_REQUEST'
export const LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS'
export const LOAD_BOOK_FAILURE = 'LOAD_BOOK_FAILURE'
export const loadBook = id => {
  return (dispatch, getState) => {
    const getLocalBook = () => {
      const state = getState()
      return state.localBooks[id]
    }
    dispatch(makeAction(LOAD_BOOK_REQUEST))
    return dispatch(getLocalBooks())
      .then(() => {
        const book = getLocalBook()
        if (!book) {
          return dispatch(downloadBook(id))
            .then(getLocalBook)
        }
        return book
      })
      .then(book => {
        const sectionsOfNodes = book.content.map(section => {
          return {
            sectionId: section.id,
            nodes: htmlStringToNodes(section.htmlString)
          }
        })
        dispatch(setBookFetchStatus(FETCH_STATUS.SUCCESS))
        dispatch(setBookNodes({
          id,
          nodes: sectionsOfNodes
        }))
        return dispatch(makeAction(LOAD_BOOK_SUCCESS))
      })
      .catch(err => {
        console.log(err)
        return dispatch(makeAction(LOAD_BOOK_FAILURE, err, null, true))
      })
  }
}
