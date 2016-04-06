// import 'isomorphic-fetch'
import 'whatwg-fetch'
import $ from 'jquery'
const API_ROOT = '/api/v0.1/'

function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  return new Promise(function(resolve, reject){
    $.ajax({
      url: fullUrl,
      type: 'get',
    }).done(data => {
      resolve(data)
    }).fail(data => {
      reject(data)
    })
  })
}

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
