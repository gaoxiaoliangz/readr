import { normalize } from 'normalizr'
import humps from 'humps'

function handleResponseJson(json, schema) {
  const camelizedJson = humps.camelizeKeys(json)

  if (typeof schema !== 'undefined') {
    return  Object.assign({},
      normalize(camelizedJson, schema)
    )
  }

  return camelizedJson
}

export default handleResponseJson
