import { combineReducers } from 'redux'
import _ from 'lodash'
import * as ACTION_TYPES from '../../../constants/actionTypes'
import viewer from './viewer'

function notifications(state = [], action) {
  if (action.type === ACTION_TYPES.NOTIFICATION.HIDE) {
    return state.map(n => n.id === action.id ? Object.assign({}, n, { visible: false }) : n)
  }

  if (action.type === ACTION_TYPES.NOTIFICATION.SHOW) {
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
  if (action.type === ACTION_TYPES.OPEN_CONFIRM_MODAL) {
    return Object.assign({}, state, { open: true }, action.data)
  }

  if (action.type === ACTION_TYPES.CLOSE_CONFIRM_MODAL) {
    return {
      open: false
    }
  }

  return state
}

function modal(state = {}, action) {
  if (action.type === ACTION_TYPES.MODAL.OPEN) {
    return Object.assign({}, state, { open: true }, action.data)
  }

  if (action.type === ACTION_TYPES.MODAL.CLOSE) {
    return {
      open: false
    }
  }

  return state
}

const components = combineReducers({
  notifications,
  confirmModal,
  modal,
  viewer
})

export default components
