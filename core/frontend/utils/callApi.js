import 'isomorphic-fetch'
import { normalize } from 'normalizr'
import humps from 'humps'

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

export function callApi(options) {
  let { fullUrl, method, data, schema, includeCredentials, useJsonp } = options

  if(useJsonp === true) {
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
  }else {
    let config = {}

    if(includeCredentials !== false) {
      config.credentials = 'include'
    }

    if(typeof method === 'undefined') {
      config.method = 'GET'
    } else if (method === 'POST' || method === 'post') {
      config = Object.assign({}, config, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    } else {
      config.method = method
    }

    return fetch(fullUrl, config)
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
}

export default callApi
