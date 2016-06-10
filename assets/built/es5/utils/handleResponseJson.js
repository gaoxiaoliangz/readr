'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
exports.default = handleResponseJson;