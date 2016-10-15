import callApi, { CallApiOptions } from '../../services/utils/callApi'
import helpers from '../../helpers'
import _ from 'lodash'
import handleResponse from '../../services/utils/handleResponse'

export type Pagination = {
  name: string
  q?: string
  key?: string
  merge?: boolean
}

export type CALL_API_OBJ = {
  // todo
  // 可以是函数或者字符串，但是 ts 不知道怎么写能通过，所以先这样
  endpoint: any

  types: string[]
  apiUrl?: string
  schema?: any
  options?: CallApiOptions
  pagination?: Pagination
}

export default store => next => action => {
  const CALL_API: CALL_API_OBJ = action.CALL_API
  if (typeof CALL_API === 'undefined') {
    return next(action)
  }

  let { endpoint, apiUrl, options, pagination } = CALL_API
  const { types, schema } = CALL_API
  const [requestType, successType, failureType] = types

  const actionWith = ({data, hasPagination}) => {
    let finalAction = Object.assign({}, action, data)
    finalAction = _.omit(finalAction, ['CALL_API'])

    if (!hasPagination) {
      finalAction = _.omit(finalAction, ['CALL_API', 'pagination'])
    }

    return finalAction
  }

  next(actionWith({
    data: {
      type: requestType,
      pagination
    },
    hasPagination: Boolean(pagination)
  }))

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof apiUrl === 'undefined') {
    apiUrl = helpers.getApiRoots().local
  }

  const fullUrl = `${apiUrl}/${endpoint}`

  return callApi(fullUrl, options || {}).then(
    response => {
      const normalizedRes = handleResponse(response, schema)
      let finalAction = {
        response: normalizedRes,
        type: successType,
        pagination
      }

      return next(dispatch => {
        dispatch(actionWith({ data: finalAction, hasPagination: Boolean(pagination) }))
        return {
          ok: true,
          response
        }
      })
    },
    error => next(dispatch => {
      dispatch(actionWith({
        data: {
          type: failureType,
          pagination,
          error
        },
        hasPagination: Boolean(pagination)
      }))
      return {
        ok: false,
        error
      }
    })
  )
}
