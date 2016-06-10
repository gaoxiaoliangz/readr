'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _handleResponseJson = require('utils/handleResponseJson');

var _handleResponseJson2 = _interopRequireDefault(_handleResponseJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jsonp(fullUrl, config) {
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
                        resolve((0, _handleResponseJson2.default)(json, config.schema));
                    };
                })
            };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
}
exports.default = jsonp;