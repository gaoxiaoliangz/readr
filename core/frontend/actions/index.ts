export * from 'actions/book'
export * from 'actions/notification'
export * from 'actions/user'

export function changeValue(name, value) {
  return {
    type: 'CHANGE_VALUE',
    name,
    value
  }
}

export function updateElement(name, data) {
  return {
    type: 'UPDATE_ELEMENT',
    name,
    data
  }
}
