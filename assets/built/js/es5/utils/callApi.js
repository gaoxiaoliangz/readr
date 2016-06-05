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

var _objectToUrlencoded = require('utils/objectToUrlencoded');

var _objectToUrlencoded2 = _interopRequireDefault(_objectToUrlencoded);

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
    var contentType = options.contentType;

    var handleFetchConfig = function handleFetchConfig() {
        var config = {};
        var body = void 0;
        if (typeof method === 'undefined' || method === 'GET' || method === 'get') {
            config.method = 'GET';
        } else if (method === 'POST' || method === 'post') {
            // 默认不带 credentials
            if (includeCredentials === true) {
                config.credentials = 'include';
            }
            // contentType 默认 urlencoded
            if (typeof contentType === 'undefined' || contentType === 'urlencoded') {
                contentType = 'application/x-www-form-urlencoded';
                body = (0, _objectToUrlencoded2.default)(data);
            } else if (contentType === 'json') {
                contentType = 'application/json';
                body = JSON.stringify(data);
            }
            config = Object.assign({}, config, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': contentType,
                    'Access-Control-Request-Method': 'POST'
                },
                body: body
            });
        } else {
            console.error('Unsupported method');
        }
        return config;
    };
    var handleJsonp = function handleJsonp() {
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
    };
    if (useJsonp === true) {
        return handleJsonp();
    }
    return fetch(fullUrl, handleFetchConfig()).then(function (response) {
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
exports.default = callApi;