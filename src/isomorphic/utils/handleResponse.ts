import { normalize } from 'normalizr'
import humps from 'humps'

function getNextPageUrl(response) {
  const link = response.headers.get('link')
  if (!link) {
    return null
  }

  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1)
  if (!nextLink) {
    return null
  }

  return nextLink.split(';')[0].trim().slice(1, -1)
}

function handleResponse({json, response}, schema) {
  const camelizedJson = humps.camelizeKeys(json)

  if (typeof schema !== 'undefined') {
    return  Object.assign({},
      normalize(camelizedJson, schema),
      {
        nextPageUrl: getNextPageUrl(response)
      }
    )
  }

  return camelizedJson
}

export default handleResponse
