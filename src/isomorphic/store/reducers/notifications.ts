export default function notifications(state = [], action) {
  if (action.type === 'HIDE_NOTIFICATION') {
    return state.map(n => n.id === action.id ? Object.assign({}, n, { visible: false}) : n)
  }

  if (action.type === 'SHOW_NOTIFICATION') {
    return [...state, {
      visible: true,
      message: action.message,
      type: action.msgType,
      id: action.id
    }]
  }

  return state
}
