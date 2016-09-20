import callApi, { CallApiOptions } from '../../utils/callApi'
import { ApiRoots } from '../../config'
import _ from 'lodash'
import handleResponse from '../../utils/handleResponse'

export type CALL_API_OBJ = {
  // todo
  // 可以是函数或者字符串，但是 ts 不知道怎么写能通过，所以先这样
  endpoint: any

  types: string[]
  apiUrl?: string
  schema?: any
  options?: CallApiOptions
}

export default store => next => action => {
  const CALL_API: CALL_API_OBJ = action.CALL_API
  if (typeof CALL_API === 'undefined') {
    return next(action)
  }

  let { endpoint, apiUrl, options } = CALL_API
  const { types, schema } = CALL_API
  const [requestType, successType, failureType] = types

  function actionWith(data) {
    let finalAction = Object.assign({}, action, data)
    finalAction = _.omit(finalAction, ['CALL_API'])

    return finalAction
  }

  next(actionWith({ type: requestType }))

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof apiUrl === 'undefined') {
    apiUrl = ApiRoots.LOCAL
  }

  const fullUrl = apiUrl + endpoint

  return callApi(fullUrl, options || {}).then(
    response => {
      return next(dispatch => {
        dispatch(actionWith({
          response: handleResponse(response, schema),
          type: successType
        }))
        return {
          ok: true,
          response
        }
      })
    },
    error => next(dispatch => {
      dispatch(actionWith({
        type: failureType,
        error: error.message || '发生未知 API 错误！(Code 1000)'
      }))
      return {
        ok: false,
        error: {
          message: error.message
        }
      }
    })
  )
}
