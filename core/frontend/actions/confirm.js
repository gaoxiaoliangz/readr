export const SHOW_CONFIRM = 'SHOW_CONFIRM'
export function showConfirm(content) {
  return {
    type: SHOW_CONFIRM,
    content,
    isVisible: true
  }
}

export const HIDE_CONFIRM = 'HIDE_CONFIRM'
export function hideConfirm() {
  return {
    type: HIDE_CONFIRM,
    isVisible: false
  }
}

export const CONFIRM_YES = 'CONFIRM_YES'
export function confirmYes() {
  return {
    type: CONFIRM_YES,
    isVisible: false,
    result: 'yes'
  }
}

export const CONFIRM_NO = 'CONFIRM_NO'
export function confirmNo() {
  return {
    type: CONFIRM_NO,
    isVisible: false,
    result: 'no'
  }
}
