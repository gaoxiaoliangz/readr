import { combineReducers } from 'redux'
import _ from 'lodash'
import * as actions from '../actions'
import * as ActionTypes from '../actions/actionTypes'

function notifications(state = [], action) {
  if (action.type === ActionTypes.NOTIFICATION.HIDE) {
    return state.map(n => n.id === action.id ? Object.assign({}, n, { visible: false }) : n)
  }

  if (action.type === ActionTypes.NOTIFICATION.SHOW) {
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
  if (action.type === ActionTypes.OPEN_CONFIRM_MODAL) {
    return Object.assign({}, state, { open: true }, action.data)
  }

  if (action.type === ActionTypes.CLOSE_CONFIRM_MODAL) {
    return {
      open: false
    }
  }

  return state
}

function modal(state = {}, action) {
  if (action.type === ActionTypes.MODAL.OPEN) {
    return Object.assign({}, state, { open: true }, action.data)
  }

  if (action.type === ActionTypes.MODAL.CLOSE) {
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
    case ActionTypes.VIEWER_CALC_SUCCESS:
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
  const defaultViewerConfig = {
    isCalcMode: true,
    fluid: false,
    isTouchMode: false
  }

  switch (action.type) {
    case ActionTypes.VIEWER_INITIALIZE_BEGIN:
      return _.merge({}, state, {
        bookId: action.bookId
      }, defaultViewerConfig)

    case ActionTypes.VIEWER_INITIALIZE_SUCCESS:
      return _.merge({}, state, {
        bookId: action.bookId
      }, action.payload)

    default:
      return state
  }
}

function bookProgress(state = {}, action): any {
  switch (action.type) {
    case ActionTypes.BOOK_PROGRESS_INITIALIZE:
      return {
        isFetching: false,
        percentage: 0
      }

    case ActionTypes.BOOK_PROGRESS_UPDATE:
      return {
        isFetching: false,
        percentage: action.percentage,
        pageNo: action.pageNo
      }

    case ActionTypes.BOOK_PROGRESS_DESTROY:
      return {}

    case ActionTypes.BOOK_PROGRESS.REQUEST:
      return {
        isFetching: true
      }

    case ActionTypes.BOOK_PROGRESS.SUCCESS:
      const { entities, result: id } = action.response
      const percentage = entities.booksProgress[id].percentage

      return {
        isFetching: false,
        percentage
      }

    case ActionTypes.BOOK_PROGRESS.FAILURE:
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
