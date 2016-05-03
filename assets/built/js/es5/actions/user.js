'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_AUTH_INFO_FAILURE = exports.USER_AUTH_INFO_SUCCESS = exports.USER_AUTH_INFO_REQUEST = undefined;
exports.fetchUserAuthInfo = fetchUserAuthInfo;
exports.fetchUserList = fetchUserList;

var _api = require('middleware/api');

var USER_AUTH_INFO_REQUEST = exports.USER_AUTH_INFO_REQUEST = 'USER_AUTH_INFO_REQUEST';
var USER_AUTH_INFO_SUCCESS = exports.USER_AUTH_INFO_SUCCESS = 'USER_AUTH_INFO_SUCCESS';
var USER_AUTH_INFO_FAILURE = exports.USER_AUTH_INFO_FAILURE = 'USER_AUTH_INFO_FAILURE';
function fetchUserAuthInfo() {
  return {
    CALL_API: {
      types: [USER_AUTH_INFO_REQUEST, USER_AUTH_INFO_SUCCESS, USER_AUTH_INFO_FAILURE],
      endpoint: 'auth',
      schema: _api.Schemas.USER_AUTH_INFO
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
