import 'isomorphic-fetch'
import parseUrlencoded from '../../utils/parseUrlencoded'
import jsonp from '../../utils/api/jsonp'
import { parseResHeaderToPagination } from '../api/handleResponse'

const createCookieString = (cookie) =>
  Object
    .keys(cookie)
    .reduce((previous, key) => `${previous}${key}=${cookie[key]}; `, '')

interface RequestConfig {
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
  cookie?: boolean | string | object
  dataType?: 'urlencoded' | 'json'
  data?: {}
  query?: object | string
  useJsonp?: boolean
  _rawInit?: RequestInit
}

const request = (url: string, config?: RequestConfig) => {
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

    // parse contentType
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

  // todo: query
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
