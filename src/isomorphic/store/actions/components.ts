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

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export function showNotification(id: string, message: string, msgType: MsgType = 'success') {
  return {
    type: SHOW_NOTIFICATION,
    message,
    msgType,
    id
  }
}

export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'
export function hideNotification(id: string) {
  return {
    type: HIDE_NOTIFICATION,
    id
  }
}

// confirm modal
export const OPEN_CONFIRM_MODAL = 'components/confirm-modal/OPEN'
export const CLOSE_CONFIRM_MODAL = 'components/confirm-modal/CLOSE'
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
export type openModal = {
  title: string
  subTitle?: string
  content?: JSX.Element
}
export function openModal(data: openModal) {
  return {
    type: 'OPEN_MODAL',
    data
  }
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  }
}
