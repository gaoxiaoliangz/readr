/*
 * functions defined here must be important and better be pure
 */

import $ from 'jquery'
import { API_ROOT } from 'constants/api-urls'

export function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return new Promise(function(resolve, reject){
    $.ajax({
      url: fullUrl,
      type: 'get',
    }).done(data => {
      resolve(data)
    }).fail(data => {
      reject(data)
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
  return function() {
    clearTimeout(this.__delayStuffTimer__)
    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay)
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
