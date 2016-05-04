'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuth = userAuth;
exports.fetchUserList = fetchUserList;

var _api = require('middleware/api');

// export const USER_AUTH_INFO_REQUEST = 'USER_AUTH_INFO_REQUEST'
// export const USER_AUTH_INFO_SUCCESS = 'USER_AUTH_INFO_SUCCESS'
// export const USER_AUTH_INFO_FAILURE = 'USER_AUTH_INFO_FAILURE'
function userAuth() {
  return {
    CALL_API: {
      types: ['USER_AUTH_REQUEST', 'USER_AUTH_SUCCESS', 'USER_AUTH_FAILURE'],
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
