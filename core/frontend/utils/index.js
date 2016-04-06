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


// todo: check the rest
export function checkAuthStatus() {
  return new Promise(resolve => {
    $.get(`${API_ROOT}auth`, function(data){
      resolve(data)
    })
  })
}

// old styled
export function formatHTMLStringToArray(HTMLString) {
  let contentArray = []
  let $HTMLString = $(HTMLString)

  for (var i = 0; i < $HTMLString.length; i++) {
    contentArray.push({
      tagName: $HTMLString[i].tagName,
      innerHTML: $HTMLString[i].innerHTML
    })
  }
  return contentArray
}



// todo: when multiple functins are called?
export function delayStuff(callback, delay) {
  return function() {
    clearTimeout(this.__delayStuffTimer__)
    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay)
  }
}
