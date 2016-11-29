import { combineReducers } from 'redux'
import _ from 'lodash'
import * as actions from '../actions'

function notifications(state = [], action) {
  if (action.type === actions.NOTIFICATION.HIDE) {
    return state.map(n => n.id === action.id ? Object.assign({}, n, { visible: false }) : n)
  }

  if (action.type === actions.NOTIFICATION.SHOW) {
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
    return Object.assign({}, state, { open: true }, action.data)
  }

  if (action.type === actions.CLOSE_CONFIRM_MODAL) {
    return {
      open: false
    }
  }

  return state
}

function modal(state = {}, action) {
  if (action.type === actions.MODAL.OPEN) {
    return Object.assign({}, state, { open: true }, action.data)
  }

  if (action.type === actions.MODAL.CLOSE) {
    return {
      open: false
    }
  }

  return state
}

// specific components
const viewer = combineReducers({
  basicInfo: viewerBasicInfo,
  bookProgress,
  contents: viewerContents
})

function viewerContents(state = {}, action) {
  switch (action.type) {
    case actions.VIEWER_CALC_SUCCESS:
      return _.merge({}, state, {
        [action.bookId]: {
          computed: action.computed
        }
      })

    default:
      return state
  }
}

function viewerBasicInfo(state = {}, action): any {
  switch (action.type) {
    case actions.VIEWER_INITIALIZE:
      return {
        bookId: action.bookId
      }

    default:
      return state
  }
}

function bookProgress(state = {}, action): any {
  switch (action.type) {
    case actions.BOOK_PROGRESS_INITIALIZE:
      return {
        isFetching: false,
        percentage: 0
      }

    case actions.BOOK_PROGRESS_UPDATE:
      return {
        isFetching: false,
        percentage: action.percentage
      }

    case actions.BOOK_PROGRESS_DESTROY:
      return {}

    case actions.BOOK_PROGRESS.REQUEST:
      return {
        isFetching: true
      }

    case actions.BOOK_PROGRESS.SUCCESS:
      const { entities, result: id } = action.response
      const percentage = entities.booksProgress[id].percentage

      return {
        isFetching: false,
        percentage
      }

    case actions.BOOK_PROGRESS.FAILURE:
      return {
        isFetching: false
      }
    default:
      return state
  }
}

const components = combineReducers({
  notifications,
  confirmModal,
  modal,
  viewer
})

export default components
