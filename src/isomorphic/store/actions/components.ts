import * as selectors from '../selectors'

const createActionType = (name, operation) => `/components/${name}/${operation}`

export type MsgType = 'success' | 'error' | 'warning' | 'ongoing'
export interface sendNotification {
  (message: string, msgType: MsgType, t?: number): any
}
export const sendNotification: sendNotification = (message: string, msgType: MsgType = 'success', t = 2000) => {
  return (dispatch, getState) => {
    const id = Math.random().toFixed(8).substr(2)

    dispatch(showNotification(id, message, msgType))
    if (t !== 0) {
      setTimeout(() => {
        dispatch(hideNotification(id))
      }, t)
    }
  }
}

export const NOTIFICATION = {
  SHOW: createActionType('notification', 'SHOW'),
  HIDE: createActionType('notification', 'HIDE'),
}
export function showNotification(id: string, message: string, msgType: MsgType = 'success') {
  return {
    type: NOTIFICATION.SHOW,
    message,
    msgType,
    id
  }
}
export function hideNotification(id: string) {
  return {
    type: NOTIFICATION.HIDE,
    id
  }
}

// confirm modal
export const OPEN_CONFIRM_MODAL = createActionType('confirm-modal', 'OPEN')
export const CLOSE_CONFIRM_MODAL = createActionType('confirm-modal', 'CLOSE')
export type openConfirmModal = {
  title?: string
  content: string
  onConfirm: () => void
}
export function openConfirmModal(data: openConfirmModal) {
  return {
    type: OPEN_CONFIRM_MODAL,
    data
  }
}
export function closeConfirmModal() {
  return {
    type: CLOSE_CONFIRM_MODAL
  }
}

// modal
export const MODAL = {
  OPEN: createActionType('modal', 'SHOW'),
  CLOSE: createActionType('modal', 'HIDE'),
}
export type openModal = {
  title: string
  subTitle?: string
  content?: JSX.Element
}
export function openModal(data: openModal) {
  return {
    type: MODAL.OPEN,
    data
  }
}
export function closeModal() {
  return {
    type: MODAL.CLOSE
  }
}

// viewer
export const VIEWER_INITIALIZE_BEGIN = createActionType('viewer', 'INITIALIZE_BEGIN')
export interface initializeViewer {
  (bookId: string, config?): any
}
export const initializeViewer: initializeViewer = (bookId, config = {}) => {
  return {
    bookId,
    config,
    type: VIEWER_INITIALIZE_BEGIN,
  }
}

// TODO: 改名为 config
export const VIEWER_INITIALIZE_SUCCESS = createActionType('viewer', 'INITIALIZE_SUCCESS')
export interface initializeViewerSuccess {
  (bookId: string, payload): any
}
export const initializeViewerSuccess: initializeViewerSuccess = (bookId, payload) => {
  return {
    bookId,
    payload,
    type: VIEWER_INITIALIZE_SUCCESS,
  }
}

export const VIEWER_CALC_BEGIN = createActionType('viewer', 'CALC_BEGIN')
export interface calcBook {
  (bookId: string, wrap: HTMLElement): any
}
export const calcBook: calcBook = (bookId, wrap) => {
  return {
    bookId,
    wrap,
    type: VIEWER_CALC_BEGIN,
  }
}

export const VIEWER_CALC_SUCCESS = createActionType('viewer', 'CALC_SUCCESS')
export interface calcBookSuccess {
  (bookId: string, computed): any
}
export const calcBookSuccess: calcBookSuccess = (bookId, computed) => {
  return {
    bookId,
    computed,
    type: VIEWER_CALC_SUCCESS,
  }
}

export const VIEWER_CALC_FAILURE = createActionType('viewer', 'CALC_FAILURE')
export interface calcBookFailure {
  (bookId: string, error: Error): any
}
export const calcBookFailure: calcBookFailure = (bookId, error) => {
  return {
    bookId,
    error,
    type: VIEWER_CALC_FAILURE,
  }
}

export const BOOK_PROGRESS_INITIALIZE = createActionType('viewer/progress', 'INITIALIZE')
export const initializeBookProgress = () => {
  return {
    type: BOOK_PROGRESS_INITIALIZE,
  }
}

export interface updateBookProgress {
  (percentage: number): any
}
export const BOOK_PROGRESS_UPDATE = createActionType('viewer/progress', 'UPDATE')
export const updateBookProgress: updateBookProgress = percentage => (dispatch, getState) => {
  const state = getState()
  const { bookId } = selectors.viewer.basicInfo(state)
  const computed = selectors.viewer.computed(bookId)(state)
  const pageNo = Math.floor(computed.length * percentage) + 1

  return dispatch({
    id: bookId,
    percentage,
    pageNo,
    type: BOOK_PROGRESS_UPDATE,
  })
}

// TODO: 无需 destroy
export const BOOK_PROGRESS_DESTROY = createActionType('viewer/progress', 'DESTROY')
export const destroyBookProgress = () => {
  return {
    type: BOOK_PROGRESS_DESTROY,
  }
}
