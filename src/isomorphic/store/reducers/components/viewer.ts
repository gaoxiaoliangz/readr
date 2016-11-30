import { combineReducers } from 'redux'
import _ from 'lodash'
import * as ActionTypes from '../../actions/actionTypes'

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

export default combineReducers({
  basicInfo: viewerBasicInfo,
  bookProgress,
  contents: viewerContents
})
