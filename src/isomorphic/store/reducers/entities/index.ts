import errorMessage from './errorMessage'
import pagination2 from './pagination'
import _ from 'lodash'
import * as actions from '../../actions'

export { pagination2, errorMessage }

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

export function payloads(state = {}, action) {
  if ((action.response || action.error) && action.payload) {
    return _.assign({}, state, {
      [action.payload]: action.response
    })
  }

  return state
}

export function session(state = { user: { role: 'visitor' } }, action) {
  switch (action.type) {
    case actions.AUTH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case actions.AUTH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response
      })

    case actions.AUTH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response
      })

    default:
      return state
  }
}
