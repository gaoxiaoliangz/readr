import _ from 'lodash'

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
// todo: types length should be 3
export default function paginate({ types, mapActionToKey, merge }: {
  types: Array<string>
  mapActionToKey: (action: any) => string
  merge?: (action: any) => boolean
}) {
  const [ requestType, successType, failureType ] = types

  const updatePagination = (state = {
    isFetching: false,
    nextPageUrl: null,
    pageCount: 0,
    ids: []
  }, action) => {
    switch (action.type) {
      case requestType:
        return Object.assign({}, state, {
          isFetching: true
        })
      case successType:
        return Object.assign({}, state, {
          isFetching: false,
          ids: !merge || merge(action)
            ? _.union(state.ids, action.response.result)
            : action.response.result,
          // 不使用 union 会导致 server rendering 问题？
          // ids: action.response.result,
          nextPageUrl: action.response.nextPageUrl,
          nextPage: action.response.nextPage,
          pageCount: state.pageCount + 1
        })
      case failureType:
        return Object.assign({}, state, {
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
        const key: string = (mapActionToKey && mapActionToKey(action)) || 'default'

        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.')
        }
        const res = Object.assign({}, state, {
          [key]: updatePagination(state[key], action)
        })

        return res
      default:
        return state
    }
  }
}