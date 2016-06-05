import 'isomorphic-fetch'
import { normalize } from 'normalizr'
import humps from 'humps'
import objectToUrlencoded from 'utils/objectToUrlencoded'

declare let fetch

export function handleResponseJson(json, schema) {
  json = humps.camelizeKeys(json)
  let result = json

  if(typeof schema !== 'undefined') {
    result = Object.assign({},
      normalize(json, schema)
    )
  }

  return result
}

type callApiOptions = {
  fullUrl: string
  method?: string
  data?: {}
  schema?: {}
  includeCredentials?: boolean
  useJsonp?: boolean
  // urlencoded | json
  contentType?: any
}

export function callApi(options: callApiOptions) {
  let { fullUrl, method, data, schema, includeCredentials, useJsonp, contentType } = options
  
  const handleFetchConfig = () => {
    type typeconfig = {
      credentials?: string
      method?: string
    }

    let config: typeconfig = {}
    let body

    if(typeof method === 'undefined' || method === 'GET' || method ==='get') {
      config.method = 'GET'
    } else if (method === 'POST' || method === 'post') {

      // 默认不带 credentials
      if (includeCredentials === true) {
        config.credentials = 'include'
      }

      // contentType 默认 urlencoded
      if (typeof contentType === 'undefined' || contentType === 'urlencoded') {
        contentType = 'application/x-www-form-urlencoded'
        body = objectToUrlencoded(data)        
      } else if (contentType === 'json') {
        contentType = 'application/json'
        body = JSON.stringify(data)
      }
      
      config = Object.assign({}, config, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': contentType,
          'Access-Control-Request-Method': 'POST'
        },
        body
      })
    } else {
      console.error('Unsupported method')
    }
    
    return config
  }

  const handleJsonp = () => {
    if(fullUrl.indexOf('douban') !== -1) {
      let id = new Date().valueOf()
      let jsonpId = 'jsonp-' + id
      let jsonpCallback = 'jsonpCallback' + id
      let jsonpCallbackData = `__JSONP_DATA_${id}__`

      window[jsonpCallback] = function(data) {
        window[jsonpCallbackData] = data
      }

      let script = document.createElement('script')

      script.setAttribute('src', `${fullUrl}&callback=${jsonpCallback}`)
      script.setAttribute('id', jsonpId)
      document.body.appendChild(script)

      return new Promise(resolve => {
        script.onload = function() {
          document.body.removeChild(document.getElementById(jsonpId))
          let json = window[jsonpCallbackData]

          resolve(handleResponseJson(json, schema))
        }
      })
    }
  }

  if(useJsonp === true) {
    return handleJsonp()
  }

  return fetch(fullUrl, handleFetchConfig())
    .then(response => {
      return response.json().then(json => ({ json, response }))
    })
    .then(({ json, response }) => {
      if(response.ok) {
        return handleResponseJson(json, schema)
      }else{
        return Promise.reject(json)
      }
    })
}

export default callApi
