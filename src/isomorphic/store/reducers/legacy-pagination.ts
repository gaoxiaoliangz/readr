import _ from 'lodash'
import { computePaginationState, DEFAULT_PAGINATION_STATE } from './paginate'
import { Pagination } from '../middleware/api'

const DEFAULT_KEY = 'default'
const SEARCH_KEY = 'search'

const updatePagination = (state = DEFAULT_PAGINATION_STATE, action, merge) => {
  if (!action.response) {
    return Object.assign({}, state, {
      isFetching: true
    })
  } else {
    return computePaginationState(state, action)
  }
}

export default function pagination(state = {}, action) {
  if (action.pagination) {
    const { name, q, key, merge } = action.pagination as Pagination
    const originalState = q
      ? (state[name] && state[name]['query'] && state[name]['query'][q]) || undefined
      : (state[name] && state[name][key || 'default']) || undefined

    const paginationBody = updatePagination(originalState, action, merge)

    const qKey = q ? SEARCH_KEY : null

    const paginationObj = {
      [qKey || key || DEFAULT_KEY]: paginationBody
    }

    return Object.assign({}, state, {
      [name]: paginationObj
    })
  }

  return state
}
