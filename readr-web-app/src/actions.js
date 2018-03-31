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
export const DOWNLOAD_BOOK = 'DOWNLOAD_BOOK'
export const GET_LOCAL_BOOKS = 'GET_LOCAL_BOOKS'
export const PUT_LOCAL_BOOKS = 'PUT_LOCAL_BOOKS'
export const UPLOAD_BOOK = 'UPLOAD_BOOK'
export const REGISTER_OWNED_BOOKS_WATCHER = 'REGISTER_OWNED_BOOKS_WATCHER'
export const REGISTER_OWNED_BOOKS_WATCHER_SUCCESS = 'REGISTER_OWNED_BOOKS_WATCHER_SUCCESS'
export const DEL_BOOK = 'DEL_BOOK'
export const DEL_BOOK_SUCCESS = 'DEL_BOOK_SUCCESS'

const makeAction = type => () => ({ type })

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

export const downloadBook = id => ({
  type: DOWNLOAD_BOOK,
  payload: id
})

export const getLocalBooks = () => ({
  type: GET_LOCAL_BOOKS
})

export const putLocalBooks = books => ({
  type: PUT_LOCAL_BOOKS,
  payload: books
})

export const uploadBook = file => ({
  type: UPLOAD_BOOK,
  payload: file
})

export const registerOwnedBooksWatcher = makeAction(REGISTER_OWNED_BOOKS_WATCHER)

export const registerOwnedBooksWatcherSuccess = makeAction(REGISTER_OWNED_BOOKS_WATCHER_SUCCESS)

export const delBook = id => ({
  type: DEL_BOOK,
  payload: id
})

export const delBookSuccess = makeAction(DEL_BOOK_SUCCESS)
