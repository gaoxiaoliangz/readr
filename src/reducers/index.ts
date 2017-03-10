import _ from 'lodash'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import components from './components'
import pagination from './pagination'
import { reducer as form } from 'better-redux-form'
import * as ActionTypes from '../constants/actionTypes'

function errorMessage(state = [], action) {
  const { error } = action

  if (error) {
    return [...state, action.error.message || '发生未知错误！']
  }

  return state
}

export function entities(state = {}, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities)
  }

  if (action.type === ActionTypes.REMOVE_ENTITY) {
    const {name, id} = action
    return _.assign({}, state, {
      [name]: _.omit(state[name], [id])
    })
  }

  return state
}

const DEFAULT_VISTOR_STATE = { user: { role: 'visitor' }, isFetching: false, determined: false }
export function session(state = DEFAULT_VISTOR_STATE, action) {
  switch (action.type) {
    case ActionTypes.AUTH.REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case ActionTypes.AUTH.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        determined: true,
        user: action.response
      })

    case ActionTypes.AUTH.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        determined: true
      })

    case ActionTypes.LOGOUT.SUCCESS:
      return Object.assign({}, DEFAULT_VISTOR_STATE, {
        determined: true
      })

    default:
      return state
  }
}

const rootReducer = combineReducers({
  components,
  entities,
  errorMessage,
  session,
  routing,
  form,
  pagination
})

export default rootReducer
