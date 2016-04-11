/*
 * functions defined here must be important and better be pure
 */

import $ from 'jquery'
import { API_ROOT } from 'constants/APIS'

export * from 'utils/book'
export * from 'utils/cache'
export * from 'utils/filters'

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

  return new Promise(function(resolve, reject){
    $.ajax(config).done(response => {
      resolve(response)
    }).fail(response => {
      reject(JSON.parse(response.responseText))
    })
  })
}


// todo: remove
export function checkAuthStatus() {
  return new Promise(resolve => {
    $.get(`${API_ROOT}auth`, function(data){
      resolve(data)
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

export function lockScroll(){
  $("body").css({"overflow":"hidden"});
}

export function unlockScroll(){
  $("body").css({"overflow":"visible"});
}

export function excAndExcOnResizing(func, args){
  if(!args){
    args = [];
  }
  func.apply([],args);
  $(window).resize(function(){
    func.apply(null,args);
  })
}
