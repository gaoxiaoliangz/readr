import { normalize } from 'normalizr'
import _ from 'lodash'
import humps from 'humps'


function handleResponse({ json, _response }, schema) {
  const camelizedJson = humps.camelizeKeys(json)
  const { next, last } = parseResHeaderToPagination(_response)

  if (typeof schema !== 'undefined') {
    return  _.assign({},
      normalize(camelizedJson, schema),
      {
        _next: next,
        _last: last
      }
    )
  }

  return camelizedJson
}

export default handleResponse
