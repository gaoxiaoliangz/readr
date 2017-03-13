import 'isomorphic-fetch'
import parseUrlencoded from '../../utils/parseUrlencoded'
import jsonp from './jsonp'

export type CallApiOptions = {
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
  credentials?: 'include' | 'same-origin'
  dataType?: 'urlencoded' | 'json'
  data?: {}
  useJsonp?: boolean
  cookies?: any
}

type FetchOptions = {
  method?: string
  credentials?: 'include' | 'same-origin'
  headers?: any
  body?: string
  useJsonp?: boolean
}

const createCookieString = (cookies) => Object.keys(cookies)
  .reduce((previous, key) => `${previous}${key}=${cookies[key]}; `, '')

const defaultOptions: CallApiOptions = {
  dataType: 'json',
  method: 'GET',
  credentials: 'same-origin'
}

// return fetch options
const parseOptions = (originanOptions: CallApiOptions) => {
  let { method, data, credentials, dataType, useJsonp, cookies } = Object.assign({}, defaultOptions, originanOptions)
  let fetchOptions: FetchOptions = {}

  if (useJsonp) {
    return {
      useJsonp: true
    }
  }

  if (method) {
    fetchOptions.method = method
  }

  if (credentials) {
    fetchOptions.credentials = credentials
  }

  // handle request headers and body
  if (method === 'POST' || method === 'PUT') {
    let contentType
    let body

    if (dataType === 'json') {
      contentType = 'application/json'
      body = JSON.stringify(data)
    } else {
      contentType = 'application/x-www-form-urlencoded'
      body = parseUrlencoded(data)

      if (dataType !== 'urlencoded') {
        console.warn('Unsupported dataType used "urlencoded" instead!')
      }
    }

    fetchOptions.headers = {
      'Content-Type': contentType,
      'Access-Control-Request-Method': method
    }

    fetchOptions.body = body
  }

  if (method === 'DELETE') {
    fetchOptions.headers = {
      'Access-Control-Request-Method': 'DELETE'
    }
  }

  if (cookies) {
    fetchOptions.headers = {
      'Cookie': createCookieString(cookies)
    }
  }

  return fetchOptions
}

// type Result = {
//   json: any
//   _response: any
// }
export function callApi(fullUrl: string, options: CallApiOptions = {}): any {
  if (options.useJsonp) {
    return jsonp(fullUrl)
  }

  const fetchOptions = parseOptions(options)

  return fetch(fullUrl, fetchOptions)
    .then(response => {
      if (response.status !== 204) {
        return response.json().then(json => {
          if (!response.ok) {
            return Promise.reject(json)
          }

          return { json, _response: response }
        })
      }

      return { json: {}, _response: response }
    })
}

export default callApi
