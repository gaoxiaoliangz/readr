import callApi from '../../utils/callApi'
import ApiRoots from '../../config'
import _ from 'lodash'

export default store => next => action => {
  const CALL_API = action.CALL_API
  if (typeof CALL_API === 'undefined') {
    return next(action)
  }

  let { endpoint, apiUrl, extendedOptions } = CALL_API
  const { types, schema } = CALL_API
  const [requestType, successType, failureType] = types

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction.CALL_API
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
  let options = { schema }

  if (typeof extendedOptions !== 'undefined') {
    options = Object.assign({}, options, extendedOptions)
  }

  return callApi(fullUrl, options).then(
    response => {
      return next(dispatch => {
        dispatch(actionWith({
          response,
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
