'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = objectToUrlencoded;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objectToUrlencoded(originalObj) {
    var object = _lodash2.default.cloneDeep(originalObj);
    var encodedurl = '';
    for (var prop in object) {
        if (_typeof(object[prop]) === 'object') {
            object[prop] = object[prop].toString();
        }
        encodedurl = '' + encodedurl + prop + '=' + object[prop] + '&';
    }
    return encodedurl.substr(0, encodedurl.length - 1);
}