import { combineReducers } from 'redux'
import _ from 'lodash'
import * as ActionTypes from '../../actions/actionTypes'

function contents(state = {}, action) {
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

function config(state = {}, action): any {
  // const defaultViewerConfig = {
  //   isCalcMode: true,
  //   fluid: false,
  //   isTouchMode: false
  // }

  switch (action.type) {
    // case ActionTypes.VIEWER_INITIALIZE:
    //   return _.merge({}, state, {
    //     bookId: action.bookId
    //   }, defaultViewerConfig)

    case ActionTypes.VIEWER_CONFIG:
      return _.merge({}, state, {
        bookId: action.bookId
      }, action.payload)

    default:
      return state
  }
}

function progress(state = {}, action): any {
  switch (action.type) {
    // case ActionTypes.BOOK_PROGRESS_INITIALIZE:
    //   return {
    //     isFetching: false,
    //     percentage: 0
    //   }

    case ActionTypes.BOOK_PROGRESS_UPDATE:
      return _.merge({}, state, {
        [action.id]: {
          isFetching: false,
          percentage: action.percentage,
          pageNo: action.pageNo
        }
      })

    case ActionTypes.BOOK_PROGRESS_DESTROY:
      return _.assign({}, state, {
        [action.id]: {
          isFetching: false
        }
      })

    // 获取相关
    // case ActionTypes.BOOK_PROGRESS.REQUEST:
    //   return _.merge({}, state, {
    //     [action.id]: {
    //       isFetching: true
    //     }
    //   })

    // case ActionTypes.BOOK_PROGRESS.SUCCESS:
    //   const { entities, result: id } = action.response
    //   const percentage = entities.booksProgress[id].percentage

    //   return _.merge({}, state, {
    //     [action.id]: {
    //       isFetching: false,
    //       percentage
    //     }
    //   })

    // case ActionTypes.BOOK_PROGRESS.FAILURE:
    //   return _.merge({}, state, {
    //     [action.id]: {
    //       isFetching: false
    //     }
    //   })

    default:
      return state
  }
}

const panel = (state = { show: false }, action) => {
  switch (action.type) {
    case ActionTypes.VIEWER.COMPONENTS.PANEL.TOGGLE:
      const reset = action.reset

      if (reset) {
        return {
          show: reset
        }
      }

      return {
        show: !state.show
      }

    default:
      return state
  }
}

const components = combineReducers({
  panel
})

export default combineReducers({
  config,
  contents,
  progress,
  components
})
