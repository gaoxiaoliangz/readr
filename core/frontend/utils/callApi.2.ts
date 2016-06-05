import 'isomorphic-fetch'
import objectToUrlencoded from 'utils/objectToUrlencoded'
import handleResponseJson from 'utils/handleResponseJson'
declare let fetch

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

const defaultOptions = {
  // TODO: same-origin or include?
  credentials: 'same-origin',
  contentType: 'json',
  method: 'GET'
}

const supportedMethods = ['GET', 'POST']

export function callApi(options: callApiOptions) {
  let { fullUrl, method, data, schema, includeCredentials, useJsonp, contentType } = options
  
  const handleFetchConfig = () => {
    type typeconfig = {
      credentials?: string
      method?: string
    }

    let fetchConfig: typeconfig = Object.assign({}, defaultOptions)
    let body
    
    if(typeof includeCredentials !== 'undefined') {
      fetchConfig.credentials = includeCredentials ? 'include' : 'none'
    }
    
    if(typeof method !== 'undefined') {
      fetchConfig.method = method
    }
    
    // if (typeof contentType !== 'undefined') {
    //   config.contentType = contentType
    // }
    
    if(fetchConfig.method === 'POST') {
      // contentType 默认 urlencoded
      if (typeof contentType === 'undefined' || contentType === 'urlencoded') {
        contentType = 'application/x-www-form-urlencoded'
        body = objectToUrlencoded(data)        
      } else if (contentType === 'json') {
        contentType = 'application/json'
        body = JSON.stringify(data)
      }
      
      fetchConfig = Object.assign({}, fetchConfig, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': contentType,
          'Access-Control-Request-Method': 'POST'
        },
        body
      })
    }
    
    if(supportedMethods.indexOf(fetchConfig.method) === -1) {
      console.warn('Unsupported method')
    }
    console.log(fetchConfig)
    
    return fetchConfig
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
