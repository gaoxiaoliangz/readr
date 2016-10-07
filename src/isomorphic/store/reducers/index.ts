import _ from 'lodash'
import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import * as actions from '../actions'
import components from './components'
import pagination from './pagination'
import legacyPagination from './legacyPagination'
import elements from './elements'

function errorMessage(state = [], action) {
  const { error } = action

  if (error) {
    console.error(error)
    return [...state, action.error]
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

export function session(state = { user: { role: 'visitor' } }, action) {
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
        isFetching: false,
        user: action.response
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
  pagination: (state, action) => pagination(legacyPagination(state, action), action),

  // deprecated
  elements
})

export default rootReducer
