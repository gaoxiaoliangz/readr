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

var defaultConfig = {
    dataType: 'json',
    method: 'GET',
    credentials: 'same-origin'
};
function callApi(fullUrl) {
    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // return fetch config
    var parseConfig = function parseConfig(config) {
        var config2 = Object.assign({}, defaultConfig, config);
        var method = config2.method;
        var data = config2.data;
        var schema = config2.schema;
        var credentials = config2.credentials;
        var dataType = config2.dataType;

        var fetchConfig = {};
        if (method) {
            fetchConfig.method = method;
        }
        if (credentials) {
            fetchConfig.credentials = credentials;
        }
        // handle request headers and body
        if (method === 'POST') {
            var contentType = void 0;
            var body = void 0;
            if (dataType === 'json') {
                contentType = 'application/json';
                body = JSON.stringify(data);
            } else if (dataType === 'urlencoded') {
                contentType = 'application/x-www-form-urlencoded';
                body = (0, _objectToUrlencoded2.default)(data);
            } else {
                // handle unsupported dataType
                dataType = 'urlencoded';
                contentType = 'application/x-www-form-urlencoded';
                body = (0, _objectToUrlencoded2.default)(data);
                console.warn('Unsupported dataType used "urlencoded" instead!');
            }
            fetchConfig.headers = {
                'Content-Type': contentType,
                'Access-Control-Request-Method': 'POST'
            };
            fetchConfig.body = body;
        }
        return fetchConfig;
    };
    return fetch(fullUrl, parseConfig(config)).then(function (response) {
        return response.json().then(function (json) {
            return { json: json, response: response };
        });
    }).then(function (_ref) {
        var json = _ref.json;
        var response = _ref.response;

        if (response.ok) {
            return (0, _handleResponseJson2.default)(json, config.schema);
        } else {
            return Promise.reject(json);
        }
    });
}
exports.default = callApi;