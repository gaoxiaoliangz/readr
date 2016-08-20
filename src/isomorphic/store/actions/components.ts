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

// dialog
export type openDialog = {
  title?: string
  content: string
  onConfirm: () => void
}
export function openDialog(data: openDialog) {
  return {
    type: 'OPEN_DIALOG',
    data
  }
}

export function closeDialog() {
  return {
    type: 'CLOSE_DIALOG'
  }
}

// basic modal
export type openBasicModal = {
  title: string
  subTitle?: string
  content?: JSX.Element
}
export function openBasicModal(data: openBasicModal) {
  return {
    type: 'OPEN_BASIC_MODAL',
    data
  }
}

export function closeBasicModal() {
  return {
    type: 'CLOSE_BASIC_MODAL'
  }
}
