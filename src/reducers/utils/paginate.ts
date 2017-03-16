import _ from 'lodash'
import { FETCH_STATUS } from '../../constants'

export const DEFAULT_PAGINATION_STATE = {
  fetchStatus: FETCH_STATUS.NONE,
  ids: []
}

export function computePaginationState(state, action: LoaderAction) {
  // const currentPage = action.response._next
  //   ? action.response._next.page - 1
  //   : (action.response._last && action.response._last.page || 1)

  // const pages = _.assign({}, {
  //   [currentPage]: action.response.result
  // })

  return _.assign({}, state, {
    fetchStatus: FETCH_STATUS.LOADED,
    ids: _.union(state.ids, action.payload.normalized.result),
    // 如果不使用 null 在外层的 merge 会忽略 undefined 从而导致一些边缘问题
    next: _.get(action, 'payload.normalized.links.next', null),
    last: _.get(action, 'payload.normalized.links.last', null)
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
        return _.merge({}, state, {
          [key]: updatePagination(state[key], action)
        })
      default:
        return state
    }
  }
}
