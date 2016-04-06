import { callApi } from 'utils'

export default store => next => action => {
  const CALL_API = action.CALL_API
  if (typeof CALL_API === 'undefined') {
    return next(action)
  }

  let { endpoint } = CALL_API
  const { types } = CALL_API
  const [ requestType, successType, failureType ] = types

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction.CALL_API
    return finalAction
  }

  next(actionWith({type: requestType}))

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  return callApi(endpoint).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Oops!'
    }))
  )
}
