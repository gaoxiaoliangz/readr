import * as actions from '../actions'
import paginate from './paginate'
import { combineReducers } from 'redux'

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
  const {apiArgs} = action
  const {q} = apiArgs[0] || {} as any
  if (q) {
    return SEARCH_KEY
  }
  return DEFAULT_KEY
}

export default combineReducers({
  books: paginate({
    mapActionToKey: generalMapActionToKey,
    types: parseTypes(actions.BOOKS)
  }),
  users: paginate({
    mapActionToKey: generalMapActionToKey,
    types: parseTypes(actions.USERS)
  }),
  authors: () => ({})
})
