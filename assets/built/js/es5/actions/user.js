'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUserAuthInfo = fetchUserAuthInfo;

var _actions = require('actions');

function fetchUserAuthInfo() {
  return (0, _actions.promisedCallApi)({
    types: ['USER_AUTH_INFO_REQUEST', 'USER_AUTH_INFO_SUCCESS', 'USER_AUTH_INFO_FAILURE'],
    endpoint: 'auth'
  }, {});
}
