import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import notification from './notification'
import paginate from './paginate'
import _ from 'lodash'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { books: {}, users: {} }, action) {
  if (action.response && action.response.entities) {
    return Object.assign({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  // if (type === ActionTypes.RESET_ERROR_MESSAGE) {
  //   return null
  // }
  if (error) {
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
  // bookList: paginate({
  //   mapActionToKey: action => action.filter,
  //   types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE']
  // }),
  filteredBooks: paginate({
    mapActionToKey: action => 'newest',
    types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE']
  }),
  userList: paginate({
    // TODO
    mapActionToKey: action => 'all',
    types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
  }),
  doubanBookSearchResults: paginate({
    mapActionToKey: action => action.query,
    types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE']
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


const components = combineReducers({
  notification: notification
})

const rootReducer = combineReducers({
  components,
  elements,
  routing,
  entities,
  pagination,
  session
})

export default rootReducer
