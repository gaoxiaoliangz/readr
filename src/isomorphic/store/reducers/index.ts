import _ from 'lodash'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import * as actions from '../actions'
import components from './components'
import pagination from './pagination'
import legacyPagination from './legacyPagination'
import elements from './elements'
import form from './form'

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

  if (action.type === actions.REMOVE_ENTITY) {
    const {name, id} = action
    return _.assign({}, state, {
      [name]: _.omit(state[name], [id])
    })
  }

  return state
}

const DEFAULT_VISTOR_STATE = { user: { role: 'visitor' }, isFetching: false }
export function session(state = DEFAULT_VISTOR_STATE, action) {
  switch (action.type) {
    case actions.AUTH.REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case actions.AUTH.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response
      })

    case actions.AUTH.FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })

    case actions.LOGOUT.SUCCESS:
      return DEFAULT_VISTOR_STATE

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
  pagination: (state, action) => pagination(legacyPagination(state, action), action),
})

export default rootReducer
