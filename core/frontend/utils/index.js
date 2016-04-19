/*
 * functions defined here must be important and better be pure
 */

import { API_ROOT } from 'constants/APIS'

export * from 'utils/book'
export * from 'utils/cache'
export * from 'utils/filters'

export function getEnv() {
  let env = process.env.NODE_ENV

  if(typeof window !== 'undefined') {
    env = window.process.env.NODE_ENV
  }

  return env
}

export function callApi(fullUrl, type, data) {
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

  // return new Promise(function(resolve, reject){
  //   $.ajax(config).done(response => {
  //     resolve(response)
  //   }).fail(response => {
  //     reject(JSON.parse(response.responseText))
  //   })
  // })

    return new Promise(function(resolve, reject){
      // $.ajax(config).done(response => {
      //   resolve(response)
      // }).fail(response => {
      //   reject(JSON.parse(response.responseText))
      // })

      fetch(config.url).then(response => {
        console.log(response);
        return response.json()
      }).then(json => {
        console.log(json);
        resolve(json)
      }).catch((error) => {
        reject(error)
      })
    })
}


// todo: when multiple functins are called?
export function delayStuff(callback, delay) {
  console.log(this);
  return function() {
    clearTimeout(this.__delayStuffTimer__)
    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay)
  }
}

// not working so well
export function lazilize(callback, t) {
  let timers = []

  return () => {
    console.log(timers);
    clearTimeout(timers.slice(-1)[0])
    let timer = setTimeout(callback.bind(this), t)
    timers.push(timer)
  }
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

// export function lockScroll(){
//   $("body").css({"overflow":"hidden"});
// }
//
// export function unlockScroll(){
//   $("body").css({"overflow":"visible"});
// }
