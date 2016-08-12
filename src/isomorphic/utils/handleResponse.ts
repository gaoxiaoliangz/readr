import { normalize } from 'normalizr'
import humps from 'humps'
import parseQueryString from './parseQueryString'
import _ from 'lodash'

function getNextPageUrl(response) {
  const link = response.headers.get('link')
  if (!link) {
    return ''
  }

  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1)
  if (!nextLink) {
    return ''
  }

  return nextLink.split(';')[0].trim().slice(1, -1)
}

function handleResponse({json, response}, schema) {
  const camelizedJson = humps.camelizeKeys(json)

  if (typeof schema !== 'undefined') {
    const nextPageUrl = getNextPageUrl(response)

    return  Object.assign({},
      normalize(camelizedJson, schema),
      {
        nextPageUrl,
        nextPage: _.get(parseQueryString(nextPageUrl.split('?')[1] || ''), 'page', 0)
      }
    )
  }

  return camelizedJson
}

export default handleResponse
