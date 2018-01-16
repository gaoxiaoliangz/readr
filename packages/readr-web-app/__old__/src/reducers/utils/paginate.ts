import _ from 'lodash'
import { FETCH_STATUS } from '../../constants'

export const DEFAULT_PAGINATION_STATE = {
  fetchStatus: FETCH_STATUS.NONE,
  pages: {}
}

export function computePaginationState(state, action: LoaderAction) {
  // 如果不使用 null 在外层的 merge 会忽略 undefined 从而导致一些边缘问题
  const next = _.get(action, 'payload.response.links.next', null)
  const last = _.get(action, 'payload.response.links.last', null)

  const currentPage = next
    ? next.page - 1
    : (last && last.page || 1)

  const pages = _.assign({}, {
    [currentPage]: _.union(action.payload.normalized.result)
  })

  return _.assign({}, state, {
    fetchStatus: FETCH_STATUS.LOADED,
    // ids: _.union(state.ids, action.payload.normalized.result),
    // if pages not fetched linerly things might go wrong
    pages,
    next,
    last,
    currentPage
  })
}

export default function paginate(types: SagaActionTypes, mapActionToKey?) {
  const { REQUEST: requestType, SUCCESS: successType, FAILURE: failureType } = types

  function updatePagination(state = DEFAULT_PAGINATION_STATE, action) {
    switch (action.type) {
      case requestType:
        return _.assign({}, state, {
          fetchStatus: FETCH_STATUS.LOADING
        })
      case successType:
        return computePaginationState(state, action)
      case failureType:
        return _.assign({}, state, {
          fetchStatus: FETCH_STATUS.FAILED
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
        const key = mapActionToKey
          ? mapActionToKey(action)
          : 'default'
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.')
        }
        return _.assign({}, state, {
          [key]: updatePagination(state[key], action)
        })
      default:
        return state
    }
  }
}
