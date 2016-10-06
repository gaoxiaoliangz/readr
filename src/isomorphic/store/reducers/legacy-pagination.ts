import _ from 'lodash'
import { computePaginationState } from './paginate'
import { Pagination } from '../middleware/api'

const DEFAULT_KEY = 'default'
const SEARCH_KEY = 'search'

const updatePagination = (state = {
  isFetching: false,
  nextPageUrl: null,
  pageCount: 0,
  ids: []
}, action, merge) => {
  if (!action.response) {
    return Object.assign({}, state, {
      isFetching: true
    })
  } else {
    return computePaginationState(state, action)
    // const currentPage = action.response._next
    //   ? action.response._next.page - 1
    //   : action.response._last && action.response._last.page || 1

    // const pages = _.assign({}, {
    //   [currentPage]: action.response.result
    // })

    // return _.omitBy(Object.assign({}, state, {
    //   isFetching: false,
    //   pages,
    //   ids: merge
    //     // 不使用 union 会导致 server rendering 问题？
    //     ? _.union(state.ids, action.response.result)
    //     : action.response.result,
    //   next: action.response._next,
    //   last: action.response._last,
    // }), _.isEmpty)
  }
}

export default function pagination(state = {}, action) {
  if (action.pagination) {
    const { name, q, key, merge } = action.pagination as Pagination
    const originalState = q
      ? (state[name] && state[name]['query'] && state[name]['query'][q]) || {}
      : (state[name] && state[name][key || 'default']) || {}

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
