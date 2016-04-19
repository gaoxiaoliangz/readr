'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _book = require('utils/book');

Object.keys(_book).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _book[key];
    }
  });
});

var _cache = require('utils/cache');

Object.keys(_cache).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cache[key];
    }
  });
});

var _filters = require('utils/filters');

Object.keys(_filters).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filters[key];
    }
  });
});
exports.getEnv = getEnv;
exports.callApi = callApi;
exports.delayStuff = delayStuff;
exports.lazilize = lazilize;
exports.isIE = isIE;

var _APIS = require('constants/APIS');

/*
 * functions defined here must be important and better be pure
 */

function getEnv() {
  var env = process.env.NODE_ENV;

  if (typeof window !== 'undefined') {
    env = window.process.env.NODE_ENV;
  }

  return env;
}

function callApi(fullUrl, type, data) {
  if (typeof type === 'undefined') {
    type = 'get';
  }

  var dataType = 'json';

  if (fullUrl.indexOf('http') !== -1) {
    dataType = 'jsonp';
  }

  var config = {
    url: fullUrl,
    type: type,
    dataType: dataType
  };

  if (typeof data !== 'undefined') {
    config = Object.assign({}, config, {
      data: data
    });
  }

  // return new Promise(function(resolve, reject){
  //   $.ajax(config).done(response => {
  //     resolve(response)
  //   }).fail(response => {
  //     reject(JSON.parse(response.responseText))
  //   })
  // })

  return new Promise(function (resolve, reject) {
    // $.ajax(config).done(response => {
    //   resolve(response)
    // }).fail(response => {
    //   reject(JSON.parse(response.responseText))
    // })

    fetch(config.url).then(function (response) {
      console.log(response);
      return response.json();
    }).then(function (json) {
      console.log(json);
      resolve(json);
    }).catch(function (error) {
      reject(error);
    });
  });
}

// todo: when multiple functins are called?
function delayStuff(callback, delay) {
  console.log(this);
  return function () {
    clearTimeout(this.__delayStuffTimer__);
    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay);
  };
}

// not working so well
function lazilize(callback, t) {
  var _this = this;

  var timers = [];

  return function () {
    console.log(timers);
    clearTimeout(timers.slice(-1)[0]);
    var timer = setTimeout(callback.bind(_this), t);
    timers.push(timer);
  };
}

// dom related
function isIE(ver) {
  if (typeof ver === 'undefined') {
    ver = null;
  }
  var b = document.createElement('b');
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
  return b.getElementsByTagName('i').length === 1;
}

// export function lockScroll(){
//   $("body").css({"overflow":"hidden"});
// }
//
// export function unlockScroll(){
//   $("body").css({"overflow":"visible"});
// }
