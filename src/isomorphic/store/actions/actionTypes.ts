import { createRequestTypes, createComponentActionType } from './utils'

/**
 * api
 */
export const REMOVE_ENTITY = 'REMOVE_ENTITY'

export const BOOK = createRequestTypes('book')
export const LOAD_BOOK = 'LOAD_BOOK'

export const BOOK_CONTENT = createRequestTypes('book-content')
export const LOAD_BOOK_CONTENT = 'LOAD_BOOK_CONTENT'

export const BOOKS = createRequestTypes('books')
export const LOAD_BOOKS = 'LOAD_BOOKS'

export const USERS = createRequestTypes('users')
export const LOAD_USERS = 'LOAD_USERS'

export const LOGOUT = createRequestTypes('revoke')
export const USER_LOGOUT = 'USER_LOGOUT'

export const BOOK_PROGRESS = createRequestTypes('book-progress')
export const LOAD_BOOK_PROGRESS = 'LOAD_BOOK_PROGRESS'

export const AUTHORS = createRequestTypes('authors')
export const COLLECTIONS = createRequestTypes('collections')
export const COLLECTION = createRequestTypes('collection')
export const DOUBAN_BOOKS = createRequestTypes('douban-books')
export const PROFILE = createRequestTypes('profile')
export const AUTH = createRequestTypes('auth')
export const SHELF = createRequestTypes('shelf')

/**
 * components
 */

// general
export const NOTIFICATION = {
  SHOW: createComponentActionType('notification', 'SHOW'),
  HIDE: createComponentActionType('notification', 'HIDE'),
}
export const OPEN_CONFIRM_MODAL = createComponentActionType('confirm-modal', 'OPEN')
export const CLOSE_CONFIRM_MODAL = createComponentActionType('confirm-modal', 'CLOSE')
export const MODAL = {
  OPEN: createComponentActionType('modal', 'SHOW'),
  CLOSE: createComponentActionType('modal', 'HIDE'),
}

// viewer
export const VIEWER_INITIALIZE = createComponentActionType('viewer', 'INITIALIZE')
export const VIEWER_CONFIG = createComponentActionType('viewer', 'CONFIG')
export const VIEWER_CALC_START = createComponentActionType('viewer', 'CALC_START')
export const VIEWER_CALC_SUCCESS = createComponentActionType('viewer', 'CALC_SUCCESS')
export const VIEWER_CALC_FAILURE = createComponentActionType('viewer', 'CALC_FAILURE')
export const BOOK_PROGRESS_INITIALIZE = createComponentActionType('viewer/progress', 'INITIALIZE')
export const BOOK_PROGRESS_UPDATE = createComponentActionType('viewer/progress', 'UPDATE')
export const BOOK_PROGRESS_DESTROY = createComponentActionType('viewer/progress', 'DESTROY')
