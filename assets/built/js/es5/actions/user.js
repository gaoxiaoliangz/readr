'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuth = userAuth;
exports.fetchUserList = fetchUserList;

var _schemas = require('schemas');

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
      endpoint: 'users',
      schema: _schemas.Schemas.USER_ARRAY
    }
  };
}
