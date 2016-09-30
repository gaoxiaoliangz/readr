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