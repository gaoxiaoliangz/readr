'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUserAuthInfo00 = fetchUserAuthInfo00;
exports.fetchUserAuthInfo = fetchUserAuthInfo;
exports.fetchUserList = fetchUserList;

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

function fetchUserList() {
  return {
    CALL_API: {
      types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
      endpoint: 'users'
    }
  };
}
