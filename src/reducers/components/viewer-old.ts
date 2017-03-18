import { combineReducers } from 'redux'
import _ from 'lodash'
import * as ACTION_TYPES from '../../constants/actionTypes'
import * as CONSTANTS from '../../constants'




function progress(state = {}, action): any {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.PROGRESS_UPDATE:
      return _.merge({}, state, {
        [action.id]: {
          isFetching: false,
          percentage: action.percentage,
          pageNo: action.pageNo
        }
      })

    case ACTION_TYPES.VIEWER.PROGRESS_DESTROY:
      return _.assign({}, state, {
        [action.id]: {
          isFetching: false
        }
      })

    default:
      return state
  }
}




export default combineReducers({
  progress,
})
