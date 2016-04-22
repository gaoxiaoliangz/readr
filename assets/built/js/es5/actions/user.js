'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUserAuthInfo00 = fetchUserAuthInfo00;
exports.fetchUserAuthInfo = fetchUserAuthInfo;

var _actions = require('actions');

// TODO
function fetchUserAuthInfo00() {
  return (0, _actions.promisedCallApi)({
    types: ['USER_AUTH_INFO_REQUEST', 'USER_AUTH_INFO_SUCCESS', 'USER_AUTH_INFO_FAILURE'],
    endpoint: 'auth'
  }, {});
}

function fetchUserAuthInfo() {
  return {
    CALL_API: {
      types: ['USER_AUTH_INFO_REQUEST', 'USER_AUTH_INFO_SUCCESS', 'USER_AUTH_INFO_FAILURE'],
      endpoint: 'auth'
    }
  };
}
