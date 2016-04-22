'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                   * functions defined here must be important and better be pure
                                                                                                                                                                                                                                                   */

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
exports.callApi = callApi;
exports.$callApi = $callApi;
exports.isIE = isIE;
exports.lockScroll = lockScroll;
exports.unlockScroll = unlockScroll;
exports.delayStuff = delayStuff;
exports.lazilize = lazilize;

var _APIS = require('constants/APIS');

require('isomorphic-fetch');

function callApi(fullUrl, type, data) {

  var config = {
    credentials: 'include'
  };

  if (typeof type === 'undefined') {
    type = 'get';
  } else if (type === 'POST') {
    config = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  }

  if (fullUrl.indexOf('http') !== -1) {
    config = {};
  }

  // use jsonp
  if (fullUrl.indexOf('douban') !== -1) {
    var _ret = function () {
      var jsonpID = new Date().valueOf();

      window['__jsonp_callback__' + jsonpID] = function (data) {
        window.__jsonp_data__ = data;
      };

      var script = document.createElement('script');

      script.setAttribute('src', fullUrl + '&callback=__jsonp_callback__' + jsonpID);
      script.setAttribute('id', 'jsonp-' + jsonpID);
      document.body.appendChild(script);

      script.onload = function () {
        document.body.removeChild(document.getElementById('jsonp-' + jsonpID));
      };

      return {
        v: Promise.resolve(window.__jsonp_data__)
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  if (fullUrl.indexOf('http') === -1) {
    // if(typeof document === 'undefined') {
    //
    // } else {
    //   fullUrl = document.location.host + fullUrl
    // }
    fullUrl = 'http://localhost:3000' + fullUrl;
  }

  return fetch(fullUrl, config).then(function (response) {
    // console.log(response)
    var josn = response.json();

    if (response.ok) {
      return josn;
    } else {
      return josn.then(function (json) {
        return Promise.reject(json);
      });
    }
  }).catch(function (error) {
    return Promise.reject(error);
  });
}

function $callApi(fullUrl, type, data) {
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

  return new Promise(function (resolve, reject) {
    $.ajax(config).done(function (response) {
      resolve(response);
    }).fail(function (response) {
      reject(JSON.parse(response.responseText));
    });
  });
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

function lockScroll() {
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  document.body.style.overflow = 'visible';
}

// a better solution?

// todo: when multiple functins are called?
function delayStuff(callback, delay) {
  console.log(this);
  return function () {
    clearTimeout(this.__delayStuffTimer__);
    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay);
  };
}

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
