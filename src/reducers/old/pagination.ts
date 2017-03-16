import paginate from './paginate'
import { combineReducers } from 'redux'
import * as ActionTypes from '../../constants/actionTypes'
import _ from 'lodash'
import { computePaginationState, DEFAULT_PAGINATION_STATE } from './paginate'
import { Pagination } from '../../middleware/api'

const DEFAULT_KEY = 'default'
const SEARCH_KEY = 'search'

const parseTypes = actionTypes => {
  return [
    actionTypes.REQUEST,
    actionTypes.SUCCESS,
    actionTypes.FAILURE,
  ]
}

const generalMapActionToKey = action => {
  const {options, key} = action
  const {q} = options || {} as any
  if (key) {
    return key
  }
  if (q) {
    return SEARCH_KEY
  }
  return DEFAULT_KEY
}

function pagination(state: any = {}, action) {
  const combinedReducer = combineReducers({
    books: paginate({
      mapActionToKey: generalMapActionToKey,
      types: parseTypes(ActionTypes.BOOKS)
    }),
    users: paginate({
      mapActionToKey: generalMapActionToKey,
      types: parseTypes(ActionTypes.USERS)
    }),
    authors: () => (state.authors || {}),
    doubanBooks: () => (state.doubanBooks || {}),
    bookShelves: () => (state.bookShelves || {}),
  })

  return combinedReducer(state, action)
}

// legacy pagination support
const updatePagination = (state = DEFAULT_PAGINATION_STATE, action, merge) => {
  if (!action.response) {
    return Object.assign({}, state, {
      isFetching: true
    })
  } else {
    return computePaginationState(state, action)
  }
}

function legacyPagination(state = {}, action) {
  if (action.pagination) {
    const { name, q, key, merge } = action.pagination as Pagination
    const qKey = q ? SEARCH_KEY : null
    const finalKey = qKey || key || DEFAULT_KEY

    const originalState = (state[name] && state[name][finalKey]) || undefined

    return Object.assign({}, state, {
      [name]: {
        [finalKey]: updatePagination(originalState, action, merge)
      }
    })
  }

  return state
}


export default function combined(state, action) {
  return pagination(legacyPagination(state, action), action)
}
