// deprecated
export default function elements(state = {}, action) {
  if (action.type === 'CHANGE_VALUE') {
    // lodash#merge 不支持 Symbol
    return Object.assign({}, state, {
      [action.name]: Object.assign({}, state[action.name], {
        value: action.value
      })
    })
  }

  if (action.type === 'UPDATE_ELEMENT') {
    return Object.assign({}, state, {
      [action.name]: Object.assign({}, state[action.name], action.data)
    })
  }

  return state
}
