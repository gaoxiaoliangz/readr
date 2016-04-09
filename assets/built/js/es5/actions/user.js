'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUserAuthInfo = fetchUserAuthInfo;
function fetchUserAuthInfo(endpoint) {
  return {
    CALL_API: {
      types: ['USER_AUTH_INFO_REQUEST', 'USER_AUTH_INFO_SUCCESS', 'USER_AUTH_INFO_FAILURE'],
      endpoint: endpoint
    }
  };
}
