import callApi from 'utils/callApi'
import ApiRoots from 'constants/ApiRoots'
import _ from 'lodash'

export default store => next => action => {
  const CALL_API = action.CALL_API
  if (typeof CALL_API === 'undefined') {
    return next(action)
  }

  let { endpoint, apiUrl, extendedOptions, payload } = CALL_API
  const { types, schema } = CALL_API
  const [requestType, successType, failureType] = types

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction.CALL_API
    return finalAction
  }

  if (payload) {
    next(actionWith({
      type: requestType,
      request: {
        [payload]: {
          isFetching: true
        }
      }
    }))
  } else {
    next(actionWith({ type: requestType }))
  }

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
      if (payload) {
        return next(actionWith({
          response: { [payload]: Object.assign({}, response, {isFetching: false}) },
          type: successType
        }))
      }

      return next(actionWith({
        response,
        type: successType
      }))
    },
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Oops!'
    }))
  )
}
