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
