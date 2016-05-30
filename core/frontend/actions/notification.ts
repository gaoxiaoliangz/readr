export function handleNotification(content, t) {
  if(typeof t === 'undefined') {
    t = 6000
  }

  return (dispatch, getState) => {
    dispatch(showNotification(content))
    setTimeout(() => {
      dispatch(hideNotification())
    }, t)
  }
}

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export function showNotification(content) {
  return {
    type: SHOW_NOTIFICATION,
    content,
    isVisible: true
  }
}

export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'
export function hideNotification() {
  return {
    type: HIDE_NOTIFICATION,
    isVisible: false
  }
}
