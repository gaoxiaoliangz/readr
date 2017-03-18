import _ from 'lodash'
import { combineReducers } from 'redux'
import * as ACTION_TYPES from '../constants/actionTypes'

const getFlag = (reset, currentFlag) => {
  if (typeof reset === 'undefined') {
    return !currentFlag
  }
  return reset
}

const config = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.CONFIG:
      return _.merge({}, state, action.payload)

    default:
      return state
  }
}

const data = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.CALC_SUCCESS:
      return _.merge({}, state, {
        [action.bookId]: {
          content: {
            computed: action.computed
          }
        }
      })

    default:
      return state
  }
}

const id = (state = '', action) => {
  if (action.type === ACTION_TYPES.VIEWER.INITIALIZE) {
    return action.payload
  }
  return state
}

const DEFAULT_COMPONENT_STATE = {
  showNavigation: false,
  showPanel: false,
  showPreference: false,
  showProgress: false
}
const components = (state = DEFAULT_COMPONENT_STATE, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTION_TYPES.VIEWER.PANEL_TOGGLE:
      return {
        ...state,
        ...{
          showPanel: getFlag(payload, state.showPanel)
        }
      }

    case ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE:
      return {
        ...state,
        ...{
          showPreference: getFlag(payload, state.showPreference)
        }
      }

    case ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE:
      return {
        ...state,
        ...{
          showNavigation: getFlag(payload, state.showNavigation)
        }
      }

    case ACTION_TYPES.VIEWER.PROGRESS_INFO_TOGGLE:
      return {
        ...state,
        ...{
          showProgress: getFlag(payload, state.showProgress)
        }
      }

    default:
      return state
  }
}

export default combineReducers({
  config,
  data,
  components,
  id
})
