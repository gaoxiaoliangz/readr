import { createRequestTypes, createComponentActionType, createSagaTriggerActionType, createSagaActionTypes } from '../actions/utils'

/**
 * api
 */
export const REMOVE_ENTITY = 'REMOVE_ENTITY'

// export const BOOK = createRequestTypes('book')
// export const LOAD_BOOK = createSagaTriggerActionType('LOAD_BOOK')

// export const BOOK_CONTENT = createRequestTypes('book-content')
// export const LOAD_BOOK_CONTENT = createSagaTriggerActionType('LOAD_BOOK_CONTENT')

// export const BOOKS = createRequestTypes('books')
// export const LOAD_BOOKS = createSagaTriggerActionType('LOAD_BOOKS')

// export const USERS = createRequestTypes('users')
// export const LOAD_USERS = createSagaTriggerActionType('LOAD_USERS')

// export const LOGOUT = createRequestTypes('revoke')

// export const LOAD_BOOK_PROGRESS = createSagaTriggerActionType('LOAD_BOOK_PROGRESS')

// export const AUTHORS = createRequestTypes('authors')
// export const COLLECTIONS = createRequestTypes('collections')
// export const COLLECTION = createRequestTypes('collection')

// export const AUTH = createRequestTypes('auth')
// export const SHELF = createRequestTypes('shelf')

// new
export const BOOKS = createSagaActionTypes('books2')
export const BOOK_INFO = createSagaActionTypes('book-info')
export const BOOK_CONTENT = createSagaActionTypes('book-content2')
export const SESSION = createSagaActionTypes('session')
export const PROFILE = createSagaActionTypes('profile')
export const SHELF = createSagaActionTypes('shelf')
export const USERS = createSagaActionTypes('users')
export const AUTHORS = createSagaActionTypes('authors')
export const COLLECTIONS = createSagaActionTypes('collections')
export const COLLECTION = createSagaActionTypes('collection')
export const BOOK_PROGRESS = createSagaActionTypes('book-progress')
export const USER_LOGOUT = createSagaActionTypes('USER_LOGOUT')

export const DOUBAN_BOOKS = createSagaActionTypes('douban-books')

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
export const VIEWER = {
  INITIALIZE: createSagaTriggerActionType(createComponentActionType('viewer', 'INITIALIZE')),
  INITIALIZE_CONFIG: createSagaTriggerActionType(createComponentActionType('viewer', 'INITIALIZE_CONFIG')),
  CONFIG: createComponentActionType('viewer', 'CONFIG'),
  CALC_START: createSagaTriggerActionType(createComponentActionType('viewer', 'CALC_START')),
  CALC_SUCCESS: createComponentActionType('viewer', 'CALC_SUCCESS'),
  CALC_FAILURE: createComponentActionType('viewer', 'CALC_FAILURE'),
  BOOK_PROGRESS_UPDATE: createSagaTriggerActionType(createComponentActionType('viewer/progress', 'UPDATE')),

  // TODO: 这个好像没用
  BOOK_PROGRESS_INITIALIZE: createComponentActionType('viewer/progress', 'INITIALIZE'),

  // TODO: 这个好像也没用
  BOOK_PROGRESS_DESTROY: createComponentActionType('viewer/progress', 'DESTROY'),

  JUMP: createSagaTriggerActionType(createComponentActionType('viewer', 'JUMP')),
  FONT_CHANGE: createComponentActionType('viewer/preference', 'CHANGE_FONT_SIZE'),
  PANEL_TOGGLE: createComponentActionType('viewer/components/panel', 'TOGGLE'),
  PREFERENCE_TOGGLE: createComponentActionType('viewer/components/preference', 'TOGGLE'),
  NAVIGATION_TOGGLE: createComponentActionType('viewer/components/navigation', 'TOGGLE'),
  THEME_CHANGE: createComponentActionType('viewer/theme', 'CHANGE'),
  SCROLL_MODE_TOGGLE: createComponentActionType('viewer/scroll-mode', 'TOGGLE'),
  PAGE_PROGRESS_INFO_TOGGLE: createComponentActionType('viewer/progress-info', 'TOGGLE')
}
