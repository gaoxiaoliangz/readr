'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.callApi = callApi;

require('isomorphic-fetch');

var _objectToUrlencoded = require('utils/objectToUrlencoded');

var _objectToUrlencoded2 = _interopRequireDefault(_objectToUrlencoded);

var _handleResponseJson = require('utils/handleResponseJson');

var _handleResponseJson2 = _interopRequireDefault(_handleResponseJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
    // TODO: same-origin or include?
    credentials: 'same-origin',
    contentType: 'json',
    method: 'GET'
};
var supportedMethods = ['GET', 'POST'];
function callApi(options) {
    var fullUrl = options.fullUrl;
    var method = options.method;
    var data = options.data;
    var schema = options.schema;
    var includeCredentials = options.includeCredentials;
    var useJsonp = options.useJsonp;
    var contentType = options.contentType;

    var handleFetchConfig = function handleFetchConfig() {
        var fetchConfig = Object.assign({}, defaultOptions);
        var body = void 0;
        if (typeof includeCredentials !== 'undefined') {
            fetchConfig.credentials = includeCredentials ? 'include' : 'none';
        }
        if (typeof method !== 'undefined') {
            fetchConfig.method = method;
        }
        // if (typeof contentType !== 'undefined') {
        //   config.contentType = contentType
        // }
        if (fetchConfig.method === 'POST') {
            // contentType 默认 urlencoded
            if (typeof contentType === 'undefined' || contentType === 'urlencoded') {
                contentType = 'application/x-www-form-urlencoded';
                body = (0, _objectToUrlencoded2.default)(data);
            } else if (contentType === 'json') {
                contentType = 'application/json';
                body = JSON.stringify(data);
            }
            fetchConfig = Object.assign({}, fetchConfig, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': contentType,
                    'Access-Control-Request-Method': 'POST'
                },
                body: body
            });
        }
        if (supportedMethods.indexOf(fetchConfig.method) === -1) {
            console.warn('Unsupported method');
        }
        console.log(fetchConfig);
        return fetchConfig;
    };
    return fetch(fullUrl, handleFetchConfig()).then(function (response) {
        return response.json().then(function (json) {
            return { json: json, response: response };
        });
    }).then(function (_ref) {
        var json = _ref.json;
        var response = _ref.response;

        if (response.ok) {
            return (0, _handleResponseJson2.default)(json, schema);
        } else {
            return Promise.reject(json);
        }
    });
}
exports.default = callApi;