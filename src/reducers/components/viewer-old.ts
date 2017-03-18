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

const panel = (state = { show: false }, action) => {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.PANEL_TOGGLE:
      const { reset } = action

      const a = getFlag(reset, state.show)

      return {
        show: a
      }

    default:
      return state
  }
}

const preference = (state = { show: false }, action) => {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE:
      const { reset } = action

      return {
        show: getFlag(reset, state.show)
      }

    default:
      return state
  }
}

const navigation = (state = { show: false }, action) => {

}

const progressComponent = (state = { show: false }, action) => {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.PROGRESS_INFO_TOGGLE:
      const { payload } = action

      return {
        show: getFlag(payload, state.show)
      }

    default:
      return state
  }
}

const components = combineReducers({
  panel,
  preference,
  navigation,
  progress: progressComponent
})

export default combineReducers({
  progress,
  components
})
