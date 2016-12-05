import { createRequestTypes, createComponentActionType, createSagaTriggerActionType } from '../store/actions/utils'

/**
 * api
 */
export const REMOVE_ENTITY = 'REMOVE_ENTITY'

export const BOOK = createRequestTypes('book')
export const LOAD_BOOK = createSagaTriggerActionType('LOAD_BOOK')

export const BOOK_CONTENT = createRequestTypes('book-content')
export const LOAD_BOOK_CONTENT = createSagaTriggerActionType('LOAD_BOOK_CONTENT')

export const BOOKS = createRequestTypes('books')
export const LOAD_BOOKS = createSagaTriggerActionType('LOAD_BOOKS')

export const USERS = createRequestTypes('users')
export const LOAD_USERS = createSagaTriggerActionType('LOAD_USERS')

export const LOGOUT = createRequestTypes('revoke')
export const USER_LOGOUT = createSagaTriggerActionType('USER_LOGOUT')

export const BOOK_PROGRESS = createRequestTypes('book-progress')
export const LOAD_BOOK_PROGRESS = createSagaTriggerActionType('LOAD_BOOK_PROGRESS')

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
  NAVIGATION_TOGGLE: createComponentActionType('viewer/components/navigation', 'TOGGLE')
}
