import 'isomorphic-fetch'
import { normalize } from 'normalizr'
import humps from 'humps'


export function callApi(options) {
  let { fullUrl, type, data, schema } = options

  let config = {
    credentials: 'include'
  }

  if(typeof type === 'undefined') {
    type = 'get'
  } else if (type === 'POST'){
    config = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  }

  // access public apis without credentials
  // if(fullUrl.indexOf('http') !== -1) {
  //   config = {}
  // }

  // use jsonp
  if(fullUrl.indexOf('douban') !== -1) {
    let jsonpID = new Date().valueOf()

    window['__jsonp_callback__'+jsonpID] = function(data) {
      window.__jsonp_data__ = data
    }

    let script = document.createElement('script')

    script.setAttribute('src', `${fullUrl}&callback=__jsonp_callback__${jsonpID}`)
    script.setAttribute('id', `jsonp-${jsonpID}`)
    document.body.appendChild(script)

    script.onload = function() {
      document.body.removeChild(document.getElementById(`jsonp-${jsonpID}`))
    }

    return Promise.resolve(window.__jsonp_data__)
  }

  return fetch(fullUrl, config)
    .then(response => {
      return response.json().then(json => ({ json, response }))
    })
    .then(({ json, response }) => {
      if(response.ok) {
        json = humps.camelizeKeys(json)

        let result = json

        if(typeof schema !== 'undefined') {
          result = Object.assign({},
            normalize(json, schema)
          )
        }

        return result
      }else{
        return Promise.reject(json)
      }
    })
}


export function $callApi(fullUrl, type, data) {
  if(typeof type === 'undefined') {
    type = 'get'
  }

  let dataType= 'json'

  if(fullUrl.indexOf('http') !== -1) {
    dataType = 'jsonp'
  }

  let config = {
    url: fullUrl,
    type: type,
    dataType: dataType
  }

  if(typeof data !== 'undefined') {
    config = Object.assign({}, config, {
      data: data
    })
  }

  return new Promise(function(resolve, reject){
    $.ajax(config).done(response => {
      resolve(response)
    }).fail(response => {
      reject(JSON.parse(response.responseText))
    })
  })
}

export default callApi
