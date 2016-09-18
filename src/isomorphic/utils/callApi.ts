import 'isomorphic-fetch'
import objectToUrlencoded from '../utils/parseFormData'
import handleResponse from '../utils/handleResponse'

type CallApiConfig = {
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
  data?: {}
  schema?: {}
  credentials?: 'include' | 'same-origin'
  dataType?: 'urlencoded' | 'json'
}

type FetchConfig = {
  method?: string
  credentials?: 'include' | 'same-origin'
  headers?: any
  body?: string
}

const defaultConfig: CallApiConfig = {
  dataType: 'json',
  method: 'GET',
  credentials: 'same-origin'
}

// return fetch config
const parseConfig = (originanConfig: CallApiConfig) => {
  let { method, data, credentials, dataType } = Object.assign({}, defaultConfig, originanConfig)
  let fetchConfig: FetchConfig = {}

  if (method) {
    fetchConfig.method = method
  }

  if (credentials) {
    fetchConfig.credentials = credentials
  }

  // handle request headers and body
  if (method === 'POST' || method === 'PUT') {
    let contentType
    let body

    if (dataType === 'json') {
      contentType = 'application/json'
      body = JSON.stringify(data)
    } else if (dataType === 'urlencoded') {
      contentType = 'application/x-www-form-urlencoded'
      body = objectToUrlencoded(data)
    } else {
      // handle unsupported dataType
      dataType = 'urlencoded'
      contentType = 'application/x-www-form-urlencoded'
      body = objectToUrlencoded(data)
      console.warn('Unsupported dataType used "urlencoded" instead!')
    }

    fetchConfig.headers = {
      'Content-Type': contentType,
      'Access-Control-Request-Method': method
    }

    fetchConfig.body = body

    // if (typeof window === 'undefined') {
    //   fetchConfig.headers.cookie = '_ga=GA1.1.410132503.1453088618; CNZZDATA1257029607=442358406-1450870215-%7C1458711437; CNZZDATA1257570141=1358999760-1456132031-%7C1458714910; loginType=0; connect.sid=s%3ARq4fRaeI2ibNVEp6T-EX9GrmfJ_zdDew.NfHRTBDEPdeVj9heJIVqP45lCU94R4%2Fcr%2BFziRY3y9w'
    // }
  }

  if (method === 'DELETE') {
    fetchConfig.headers = {
      'Access-Control-Request-Method': 'DELETE'
    }
  }

  // fetchConfig.headers = {
  //   cookie: '_ga=GA1.1.410132503.1453088618; CNZZDATA1257029607=442358406-1450870215-%7C1458711437; CNZZDATA1257570141=1358999760-1456132031-%7C1458714910; loginType=0; connect.sid=s%3ARq4fRaeI2ibNVEp6T-EX9GrmfJ_zdDew.NfHRTBDEPdeVj9heJIVqP45lCU94R4%2Fcr%2BFziRY3y9w'
  // }

  return fetchConfig
}

export function callApi(fullUrl: string, config: CallApiConfig = {}) {
  return fetch(fullUrl, parseConfig(config))
    .then(response => {
      if (response.status !== 204) {
        return response.json().then(json => {
          return { json, response }
        })
      }
      return { response, json: {} }
    })
    .then(({ json, response }) => {
      if (response.ok) {
        return handleResponse({ json, response }, config.schema)
      } else {
        return Promise.reject(json)
      }
    })
}

export default callApi
