import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import components from './components'
import paginate from './paginate'
import _ from 'lodash'
import {reducer as form} from 'redux-form'
import * as actions from '../actions'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { books: {}, users: {}, bookCollections: {} }, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities)
  }

  return state
}

function payloads(state = {}, action) {
  if ((action.response || action.error) && action.payload) {
    return _.assign({}, state, {
      [action.payload]: action.response
    })
  }

  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = [], action) {
  const { error } = action

  if (error) {
    return [...state, action.error]
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
  // bookList: paginate({
  //   mapActionToKey: action => action.filter,
  //   types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE']
  // }),
  books: paginate({
    mapActionToKey: action => action.flowType,
    types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE'],
    merge: action => action.merge
  }),
  bookCollections: paginate({
    mapActionToKey: action => action.flowType,
    types: ['COLLECTIONS_REQUEST', 'COLLECTIONS_SUCCESS', 'COLLECTIONS_FAILURE']
  }),
  // shelf: paginate({
  //   mapActionToKey: action => action.userId,
  //   types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE']
  // }),
  userList: paginate({
    // TODO
    mapActionToKey: action => 'all',
    types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
  }),
  doubanBookSearchResults: paginate({
    mapActionToKey: action => action.query,
    types: [actions.DOUBAN_BOOK_SEARCH_REQUEST, actions.DOUBAN_BOOK_SEARCH_SUCCESS, actions.DOUBAN_BOOK_SEARCH_FAILURE]
  }),
  bookSearchResults: paginate({
    mapActionToKey: action => action.query,
    types: ['BOOK_SEARCH_REQUEST', 'BOOK_SEARCH_SUCCESS', 'BOOK_SEARCH_FAILURE']
  })
})

function elements(state = {}, action) {
  if (action.type === 'CHANGE_VALUE') {
    // lodash#merge 不支持 Symbol
    return Object.assign({}, state, {
      [action.name]: Object.assign({}, state[action.name], {
        value: action.value
      })
    })
  }

  if (action.type === 'UPDATE_ELEMENT') {
    return Object.assign({}, state, {
      [action.name]: Object.assign({}, state[action.name], action.data)
    })
  }

  return state
}

const rootReducer = combineReducers({
  payloads,
  components,
  elements,
  routing,
  entities,
  errorMessage,
  pagination,
  session,
  form
})

export default rootReducer
