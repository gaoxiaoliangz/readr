import { combineReducers } from 'redux'
import _ from 'lodash'
import * as ACTION_TYPES from '../../../constants/actionTypes'
import * as CONSTANTS from '../../../constants'

function contents(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.CALC_SUCCESS:
      return _.merge({}, state, {
        [action.bookId]: {
          computed: action.computed
        }
      })

    default:
      return state
  }
}

function config(state = { theme: CONSTANTS.VIEWER_DEFS.THEMES.WHITE }, action): any {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.THEME_CHANGE:
      return _.merge({}, state, {
        theme: action.theme
      })

    case ACTION_TYPES.VIEWER.FONT_CHANGE:
      return _.merge({}, state, {
        fontSize: action.fontSize
      })

    case ACTION_TYPES.VIEWER.CONFIG:
      return _.merge({}, state, {
        bookId: action.bookId
      }, action.payload)

    default:
      return state
  }
}

function progress(state = {}, action): any {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE:
      return _.merge({}, state, {
        [action.id]: {
          isFetching: false,
          percentage: action.percentage,
          pageNo: action.pageNo
        }
      })

    case ACTION_TYPES.VIEWER.BOOK_PROGRESS_DESTROY:
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

const preference = (state = { show: false }, action) => {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE:
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

const navigation = (state = { show: false }, action) => {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE:
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
  panel,
  preference,
  navigation
})

export default combineReducers({
  config,
  contents,
  progress,
  components
})
