export type MsgType = 'success' | 'error' | 'warning' | 'ongoing'
export function sendNotification(message: string, msgType: MsgType = 'success', t: number = 5000) {
  return (dispatch, getState) => {
    const id = Math.random().toFixed(8).substr(2)

    dispatch(showNotification(id, message, msgType))
    setTimeout(() => {
      dispatch(hideNotification(id))
    }, t)
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
