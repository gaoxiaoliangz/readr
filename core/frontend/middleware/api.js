import { callApi } from 'utils'
import { API_ROOT } from 'constants/APIS'
import { Schema, arrayOf, normalize } from 'normalizr'


const bookSchema = new Schema('books', {
  idAttribute: 'id'
})

const bookProgressSchema = new Schema('bookProgress', {
  idAttribute: 'id'
})

export const Schemas = {
  BOOK: bookSchema,
  BOOK_PROGRESS: bookProgressSchema,
  BOOK_ARRAY: arrayOf(bookSchema),
}

export default store => next => action => {
  const CALL_API = action.CALL_API
  if (typeof CALL_API === 'undefined') {
    return next(action)
  }

  let { endpoint, apiUrl } = CALL_API
  const { types, schema } = CALL_API
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

  if(typeof apiUrl === 'undefined') {
    apiUrl = API_ROOT
  }

  const fullUrl = apiUrl + endpoint

  return callApi({ fullUrl, schema }).then(
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
