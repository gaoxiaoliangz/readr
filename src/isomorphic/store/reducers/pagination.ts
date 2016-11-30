import paginate from './paginate'
import { combineReducers } from 'redux'
import * as ActionTypes from '../actions/actionTypes'

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

export default function pagination(state: any = {}, action) {
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
