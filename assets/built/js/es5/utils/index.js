'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callApi = callApi;
exports.checkAuthStatus = checkAuthStatus;
exports.delayStuff = delayStuff;
exports.isIE = isIE;
exports.lockScroll = lockScroll;
exports.unlockScroll = unlockScroll;
exports.excAndExcOnResizing = excAndExcOnResizing;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _APIS = require('constants/APIS');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
  return function () {
    clearTimeout(this.__delayStuffTimer__);
    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay);
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
