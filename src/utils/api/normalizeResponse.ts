import handleResponse from './handleResponse'

export default function normalizeResponse(resultPromise, schema) {
  return resultPromise.then(
    response => ({ response: handleResponse(response, schema) }),
    error => ({ error })
  )
}
