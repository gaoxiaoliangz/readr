import { createComponentActionType, createSagaTriggerActionType, createSagaActionTypes } from '../actions/utils'

const makeActionTypeCreator = namespace => type => [namespace, type].join('/')

const viewerType = makeActionTypeCreator('viewer')

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






  INITIALIZE: createSagaTriggerActionType(viewerType('INITIALIZE')),
  INITIALIZE_CONFIG: createSagaTriggerActionType(viewerType('INITIALIZE_CONFIG')),
  CONFIG: viewerType('CONFIG'),
  CALC_START: createSagaTriggerActionType(viewerType('CALC_START')),
  CALC_SUCCESS: viewerType('CALC_SUCCESS'),
  CALC_FAILURE: viewerType('CALC_FAILURE'),
  BOOK_PROGRESS_UPDATE: createSagaTriggerActionType(viewerType('UPDATE_PROGRESS')),

  JUMP: createSagaTriggerActionType(viewerType('JUMP')),
  FONT_CHANGE: viewerType('CHANGE_FONT_SIZE'),
  PANEL_TOGGLE: viewerType('TOGGLE_PANEL'),
  PREFERENCE_TOGGLE: viewerType('TOGGLE_PREFERENCE'),
  NAVIGATION_TOGGLE: viewerType('TOGGLE_NAVIGATION'),
  THEME_CHANGE: viewerType('CHANGE_THEME'),
  SCROLL_MODE_TOGGLE: viewerType('TOGGLE_SCROLL_MODE'),
  PAGE_PROGRESS_INFO_TOGGLE: viewerType('TOGGLE_PROGRESS_INFO'),

  // TODO: 这个好像没用
  PROGRESS_INITIALIZE: viewerType('INITIALIZE_PROGRESS'),

  // TODO: 这个好像也没用
  PROGRESS_DESTROY: viewerType('DESTROY_PROGRESS'),
}

// modifiy
export const REMOVE_ENTITY = 'REMOVE_ENTITY'

/**
 * api
 */
export const BOOKS = createSagaActionTypes('books')
export const BOOK_INFO = createSagaActionTypes('book-info')
export const BOOK_CONTENT = createSagaActionTypes('book-content')
export const SESSION = createSagaActionTypes('session')
export const PROFILE = createSagaActionTypes('profile')
export const SHELF = createSagaActionTypes('shelf')
export const USERS = createSagaActionTypes('users')
export const AUTHORS = createSagaActionTypes('authors')
export const COLLECTIONS = createSagaActionTypes('collections')
export const COLLECTION = createSagaActionTypes('collection')
export const BOOK_PROGRESS = createSagaActionTypes('book-progress')
export const USER_LOGOUT = createSagaActionTypes('user-logout')

export const DOUBAN_BOOKS = createSagaActionTypes('douban-books')
