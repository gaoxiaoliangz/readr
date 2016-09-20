import { normalize } from 'normalizr'
import humps from 'humps'
import parseQueryString from './parseQueryString'
import _ from 'lodash'

function getNextPage(response) {
  const empty = { url: '', page: 0 }

  if (!response) {
    return empty
  }

  const link = response.headers.get('link')
  if (!link) {
    return empty
  }

  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1)
  if (!nextLink) {
    return empty
  }

  const url = nextLink.split(';')[0].trim().slice(1, -1)
  const page = _.get(parseQueryString(url.split('?')[1] || ''), 'page', 0)

  return {
    url,
    page
  }
}

function handleResponse({ json, _response }, schema) {
  const camelizedJson = humps.camelizeKeys(json)

  if (typeof schema !== 'undefined') {
    const { url, page } = getNextPage(_response)

    return  Object.assign({},
      normalize(camelizedJson, schema),
      {
        nextPageUrl: url,
        nextPage: page
      }
    )
  }

  return camelizedJson
}

export default handleResponse
