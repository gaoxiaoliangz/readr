import _ from 'lodash'

export const DEFAULT_PAGINATION_STATE = {
  isFetching: false,
  pages: {},
  ids: [],
  pageCount: 0,
}

export function computePaginationState(state, action) {
  const currentPage = action.response._next
    ? action.response._next.page - 1
    : (action.response._last && action.response._last.page || 1)

  const pages = _.assign({}, {
    [currentPage]: action.response.result
  })

  return _.assign({}, state, {
    isFetching: false,
    pages,
    ids: _.union(state.ids, action.response.result),
    // 如果不使用 null 在外层的 merge 会忽略 undefined 从而导致一些边缘问题
    next: action.response._next || null,
    last: action.response._last || null,
    pageCount: state.pageCount + 1
  })
}

export default function paginate({ types, mapActionToKey }) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.')
  }

  const [requestType, successType, failureType] = types

  function updatePagination(state = DEFAULT_PAGINATION_STATE, action) {
    switch (action.type) {
      case requestType:
        return _.assign({}, state, {
          isFetching: true
        })
      case successType:
        return computePaginationState(state, action)
      case failureType:
        return _.assign({}, state, {
          isFetching: false
        })
      default:
        return state
    }
  }

  return function updatePaginationByKey(state = {}, action) {

    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action)
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.')
        }
        return _.merge({}, state, {
          [key]: updatePagination(state[key], action)
        })
      default:
        return state
    }
  }
}
