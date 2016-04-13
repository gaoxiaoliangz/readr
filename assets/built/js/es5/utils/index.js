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
exports.checkAuthStatus = checkAuthStatus;
exports.delayStuff = delayStuff;
exports.lazilize = lazilize;
exports.isIE = isIE;
exports.lockScroll = lockScroll;
exports.unlockScroll = unlockScroll;
exports.excAndExcOnResizing = excAndExcOnResizing;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _APIS = require('constants/APIS');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEnv() {
  var env = process.env.NODE_ENV;

  if (typeof window !== 'undefined') {
    env = window.process.env.NODE_ENV;
  }

  return env;
} /*
   * functions defined here must be important and better be pure
   */

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

  return new Promise(function (resolve, reject) {
    _jquery2.default.ajax(config).done(function (response) {
      resolve(response);
    }).fail(function (response) {
      reject(JSON.parse(response.responseText));
    });
  });
}

// todo: remove
function checkAuthStatus() {
  return new Promise(function (resolve) {
    _jquery2.default.get(_APIS.API_ROOT + 'auth', function (data) {
      resolve(data);
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

function lockScroll() {
  (0, _jquery2.default)("body").css({ "overflow": "hidden" });
}

function unlockScroll() {
  (0, _jquery2.default)("body").css({ "overflow": "visible" });
}

function excAndExcOnResizing(func, args) {
  if (!args) {
    args = [];
  }
  func.apply([], args);
  (0, _jquery2.default)(window).resize(function () {
    func.apply(null, args);
  });
}
