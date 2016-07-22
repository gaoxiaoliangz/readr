import { normalize } from 'normalizr'
import humps from 'humps'

function handleResponseJson(json, schema) {
  json = humps.camelizeKeys(json)
  let result = json

  if (typeof schema !== 'undefined') {
    result = Object.assign({},
      normalize(json, schema)
    )
  }

  return result
}

export default handleResponseJson