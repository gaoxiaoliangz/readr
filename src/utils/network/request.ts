import 'isomorphic-fetch'
import parseUrlencoded from '../../utils/parseUrlencoded'
import jsonp from '../../app/utils/dom/jsonp'
import parseResHeaderToPagination from './parseResHeaderToPagination'

const createCookieString = (cookie) =>
  Object
    .keys(cookie)
    .reduce((previous, key) => `${previous}${key}=${cookie[key]}; `, '')

// todo: remove any
const request = (url: string, config?: RequestConfig): Promise<any> => {
  const defaultConfig: RequestConfig = {
    method: 'GET',
    cookie: true,
    dataType: 'json'
  }

  const parseConfig = () => {
    let credentials
    let headers
    let contentType
    let body
    let cookieString

    const _config = {
      ...defaultConfig,
      ...config
    }

    const { method, cookie, dataType, data, _rawInit } = _config

    // parse contentType & body
    if (dataType === 'json') {
      contentType = 'application/json'
      body = JSON.stringify(data)
    } else if (dataType === 'urlencoded') {
      contentType = 'application/x-www-form-urlencoded'
      // todo: check encode fn
      body = parseUrlencoded(data)
    } else {
      console.warn(`Unsupported dataType ${dataType}, 'urlencoded' will be used instead!`)
      contentType = 'application/x-www-form-urlencoded'
    }

    // parse cookie
    if (cookie === false) {
      credentials = 'omit'
    } else {
      credentials = 'include'

      if (typeof cookie === 'object') {
        cookieString = createCookieString(cookie)
      }

      if (typeof cookie === 'string') {
        cookieString = cookie
      }
    }

    headers = {
      'Content-Type': contentType,
      'Access-Control-Request-Method': method,
      'Cookie': cookieString
    }

    return {
      method,
      ...{
        headers,
        body,
        credentials
      },
      ..._rawInit
    }
  }

  if (config.useJsonp) {
    return jsonp(url)
  }

  const parsedConfig = parseConfig()
  let fullUrl = url

  if (config.query) {
    // todo: fix '/' end
    fullUrl = `${url}?${parseUrlencoded(config.query)}`
  }

  return fetch(fullUrl, parsedConfig)
    .then(response => {
      if (response.status !== 204) {
        return response.json().then(json => {
          if (!response.ok) {
            return Promise.reject(json)
          }

          return { json, links: parseResHeaderToPagination(response) }
        })
      }

      return { json: {} }
    })
}

export default request
