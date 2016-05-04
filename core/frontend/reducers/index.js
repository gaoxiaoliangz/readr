import { combineReducers } from 'redux'
import book from './book'
import notification from './notification'
import { routerReducer as routing } from 'react-router-redux'
import * as ActionTypes from '../actions'
import paginate from './paginate'
import _ from 'lodash'

// Updates an entity cache in response to any action with response.entities.
function entities(state = {}, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

function session(state = { user: { role: 'visitor' } }, action) {
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

// Updates the pagination data for different actions.
const pagination = combineReducers({
  bookList: paginate({
    mapActionToKey: action => 'all',
    types: [
      ActionTypes.BOOK_LIST_REQUEST,
      ActionTypes.BOOK_LIST_SUCCESS,
      ActionTypes.BOOK_LIST_FAILURE
    ]
  })
})

const components = combineReducers({
  notification: notification
})

const rootReducer = combineReducers({
  book,
  components,
  routing,
  entities,
  pagination,
  session
})

export default rootReducer
