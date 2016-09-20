import { combineReducers } from 'redux'
import _ from 'lodash'
import * as actions from '../actions'

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


function confirmModal(state = {}, action) {
  if (action.type === actions.OPEN_CONFIRM_MODAL) {
    return Object.assign({}, state, {open: true}, action.data)
  }

  if (action.type === actions.CLOSE_CONFIRM_MODAL) {
    return {
      open: false
    }
  }

  return state
}

function modal(state = {}, action) {
  if (action.type === 'OPEN_MODAL') {
    return Object.assign({}, state, {open: true}, action.data)
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      open: false
    }
  }

  return state
}

const components = combineReducers({
  notifications,
  confirmModal,
  modal
})

export default components
