import errorMessage from './errorMessage'
import pagination from './pagination'

export { pagination, errorMessage }

export function entities(state = {}, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities)
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
    case 'USER_AUTH_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })

    case 'USER_AUTH_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response
      })

    case 'USER_AUTH_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response
      })

    default:
      return state
  }
}
