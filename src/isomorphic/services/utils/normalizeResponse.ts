import handleResponse from './handleResponse'

export default function normalizeResponse(resultPromise, schema) {
  return resultPromise.then(
    response => {
      return { response: handleResponse(response, schema) }
    },
    error => ({ error })
  )
}
