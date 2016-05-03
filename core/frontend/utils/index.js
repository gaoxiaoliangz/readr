/*
 * functions defined here must be important and better be pure
 */
import { API_ROOT } from 'constants/APIS'
import 'isomorphic-fetch'
import { normalize } from 'normalizr'
import humps from 'humps'

export * from 'utils/book'
export * from 'utils/cache'
export * from 'utils/filters'

// export function callApi(fullUrl, type, data) {
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

// dom related
export function isIE(ver){
  if(typeof ver === 'undefined') {
    ver = null
  }
  var b = document.createElement('b')
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
  return b.getElementsByTagName('i').length === 1
}

export function lockScroll(){
  document.body.style.overflow = 'hidden'
}

export function unlockScroll(){
  document.body.style.overflow = 'visible'
}



// a better solution?

// todo: when multiple functins are called?
export function delayStuff(callback, delay) {
  console.log(this);
  return function() {
    clearTimeout(this.__delayStuffTimer__)
    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay)
  }
}

export function lazilize(callback, t) {
  let timers = []

  return () => {
    console.log(timers);
    clearTimeout(timers.slice(-1)[0])
    let timer = setTimeout(callback.bind(this), t)
    timers.push(timer)
  }
}

// very rough but enough for use here
export function compareObjects(obj1, obj2) {
  let isEqual = true

  try {
    for(let prop in obj1) {
      if(obj1[prop] !== obj2[prop]) {
        isEqual = false
        break
      }
    }
  } catch (e) {
    console.error(e)
    isEqual = false
  }

  return isEqual
}
