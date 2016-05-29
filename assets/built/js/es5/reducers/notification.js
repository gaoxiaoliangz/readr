'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = notification;
function notification(state, action) {
  if (typeof state === 'undefined') {
    state = {};
  }

  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return Object.assign({}, state, {
        content: action.content,
        isVisible: true
      });

    case 'HIDE_NOTIFICATION':
      return Object.assign({}, state, {
        isVisible: false
      });

    default:
      return state;
  }
}