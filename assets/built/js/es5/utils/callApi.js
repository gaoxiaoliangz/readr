'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.handleResponseJson = handleResponseJson;
exports.callApi = callApi;

require('isomorphic-fetch');

var _normalizr = require('normalizr');

var _humps = require('humps');

var _humps2 = _interopRequireDefault(_humps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleResponseJson(json, schema) {
  json = _humps2.default.camelizeKeys(json);
  var result = json;

  if (typeof schema !== 'undefined') {
    result = Object.assign({}, (0, _normalizr.normalize)(json, schema));
  }

  return result;
}

function callApi(options) {
  var fullUrl = options.fullUrl;
  var method = options.method;
  var data = options.data;
  var schema = options.schema;
  var includeCredentials = options.includeCredentials;
  var useJsonp = options.useJsonp;


  if (useJsonp === true) {
    if (fullUrl.indexOf('douban') !== -1) {
      var _ret = function () {
        var id = new Date().valueOf();
        var jsonpId = 'jsonp-' + id;
        var jsonpCallback = 'jsonpCallback' + id;
        var jsonpCallbackData = '__JSONP_DATA_' + id + '__';

        window[jsonpCallback] = function (data) {
          window[jsonpCallbackData] = data;
        };

        var script = document.createElement('script');

        script.setAttribute('src', fullUrl + '&callback=' + jsonpCallback);
        script.setAttribute('id', jsonpId);
        document.body.appendChild(script);

        return {
          v: new Promise(function (resolve) {
            script.onload = function () {
              document.body.removeChild(document.getElementById(jsonpId));
              var json = window[jsonpCallbackData];

              resolve(handleResponseJson(json, schema));
            };
          })
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  } else {
    var config = {};

    if (includeCredentials !== false) {
      config.credentials = 'include';
    }

    if (typeof method === 'undefined') {
      config.method = 'GET';
    } else if (method === 'POST' || method === 'post') {
      config = Object.assign({}, config, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } else {
      config.method = method;
    }

    return fetch(fullUrl, config).then(function (response) {
      return response.json().then(function (json) {
        return { json: json, response: response };
      });
    }).then(function (_ref) {
      var json = _ref.json;
      var response = _ref.response;

      if (response.ok) {
        return handleResponseJson(json, schema);
      } else {
        return Promise.reject(json);
      }
    });
  }
}

exports.default = callApi;
