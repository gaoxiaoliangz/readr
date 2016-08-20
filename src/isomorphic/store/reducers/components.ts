import { combineReducers } from 'redux'
import _ from 'lodash'

function notifications(state = [], action) {
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


function dialog(state = {}, action) {
  if (action.type === 'OPEN_DIALOG') {
    return Object.assign({}, state, {isVisible: true}, action.data)
  }

  if (action.type === 'CLOSE_DIALOG') {
    return {
      isVisible: false
    }
  }

  return state
}

function basicModal(state = {}, action) {
  if (action.type === 'OPEN_BASIC_MODAL') {
    return Object.assign({}, state, {isVisible: true}, action.data)
  }

  if (action.type === 'CLOSE_BASIC_MODAL') {
    return {
      isVisible: false
    }
  }

  return state
}

const components = combineReducers({
  notifications,
  dialog,
  basicModal
})

export default components
