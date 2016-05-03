'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.callApi = callApi;
exports.$callApi = $callApi;

var _APIS = require('constants/APIS');

require('isomorphic-fetch');

var _normalizr = require('normalizr');

var _humps = require('humps');

var _humps2 = _interopRequireDefault(_humps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function callApi(options) {
  var fullUrl = options.fullUrl;
  var type = options.type;
  var data = options.data;
  var schema = options.schema;


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

  // access public apis without credentials
  // if(fullUrl.indexOf('http') !== -1) {
  //   config = {}
  // }

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

  return fetch(fullUrl, config).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json;
    var response = _ref.response;

    if (response.ok) {
      json = _humps2.default.camelizeKeys(json);

      var result = json;

      if (typeof schema !== 'undefined') {
        result = Object.assign({}, (0, _normalizr.normalize)(json, schema));
      }

      return result;
    } else {
      return Promise.reject(json);
    }
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

exports.default = callApi;
