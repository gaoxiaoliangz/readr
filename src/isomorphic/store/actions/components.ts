const createActionType = (name, operation) => `/components/${name}/${operation}`

export type MsgType = 'success' | 'error' | 'warning' | 'ongoing'
export function sendNotification(message: string, msgType: MsgType = 'success', t = 2000) {
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
  OPEN: createActionType('notification', 'SHOW'),
  CLOSE: createActionType('notification', 'HIDE'),
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
