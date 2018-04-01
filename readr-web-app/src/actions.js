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

export const makeAsyncActionTypes = type => ({
  REQUEST: type + '_REQUEST',
  SUCCESS: type + '_SUCCESS',
  FAILURE: type + '_FAILURE',
})

export const makeAction = (type, payload, meta, error) =>
  ({ type, payload, meta, error })

export const errorAction = (type, err) => makeAction(type, err, null, true)

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

export const DOWNLOAD_BOOK = makeAsyncActionTypes('DOWNLOAD_BOOK')
export const downloadBook = id => ({
  type: DOWNLOAD_BOOK.REQUEST,
  payload: id
})

export const GET_LOCAL_BOOKS = makeAsyncActionTypes('GET_LOCAL_BOOKS')
export const getLocalBooks = makeActionCreator(GET_LOCAL_BOOKS.REQUEST)

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

export const CALC_BOOK_LAYOUT = makeAsyncActionTypes('CALC_BOOK_LAYOUT')
export const calcBookLayout = bookId =>
  makeAction(CALC_BOOK_LAYOUT.REQUEST, bookId)

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

export const INIT_BOOK = makeAsyncActionTypes('INIT_BOOK')
export const initBook = id =>
  makeAction(INIT_BOOK.REQUEST, id)

export const LOAD_BOOK = makeAsyncActionTypes('LOAD_BOOK')
export const loadBook = payload =>
  makeAction(LOAD_BOOK.REQUEST, payload)
