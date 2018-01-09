import * as api from './api'
import * as viewer from './viewer'
import * as ActionTypes from './actionTypes'

export const signin = (data: { login, password }) => ({
  type: ActionTypes.SIGNIN,
  payload: data
})

export const sendNotification = (message: string, msgType: TNotification = 'success', t: number = 2000) => {
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

export function showNotification(id: string, message: string, msgType: TNotification = 'success') {
  return {
    type: ActionTypes.NOTIFICATION.SHOW,
    message,
    msgType,
    id
  }
}
export function hideNotification(id: string) {
  return {
    type: ActionTypes.NOTIFICATION.HIDE,
    id
  }
}

// confirm modal
type openConfirmModal = {
  title?: string
  content: string
  onConfirm: (closeModalCb: () => void) => void
}
export function openConfirmModal(data: openConfirmModal) {
  return {
    type: ActionTypes.OPEN_CONFIRM_MODAL,
    data
  }
}
export function closeConfirmModal() {
  return {
    type: ActionTypes.CLOSE_CONFIRM_MODAL
  }
}

// modal
export type openModal = {
  title: string
  subTitle?: string
  content?: JSX.Element
}
export function openModal(data: openModal) {
  return {
    type: ActionTypes.MODAL.OPEN,
    data
  }
}
export function closeModal() {
  return {
    type: ActionTypes.MODAL.CLOSE
  }
}

export { api, viewer }
