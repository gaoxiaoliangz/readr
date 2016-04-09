'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = book;
function book(state, action) {
  if (typeof state === 'undefined') {
    state = {};
  }

  switch (action.type) {
    case 'USER_AUTH_INFO_REQUEST':
      return Object.assign({}, state, {
        isFetchingUserAuthInfo: true
      });

    case 'USER_AUTH_INFO_SUCCESS':
      return Object.assign({}, state, {
        isFetchingUserAuthInfo: false,
        authed: action.response.authed,
        username: action.response.authed ? action.response.username : ''
      });

    default:
      return state;
  }
}
