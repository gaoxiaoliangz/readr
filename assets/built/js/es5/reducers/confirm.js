'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = notification;
function notification(state, action) {
  if (typeof state === 'undefined') {
    state = { isVisible: false };
  }

  switch (action.type) {
    case 'SHOW_CONFIRM':
      return Object.assign({}, state, {
        content: action.content,
        isVisible: true
      });

    case 'HIDE_CONFIRM':
      return Object.assign({}, state, {
        isVisible: false
      });

    default:
      return state;
  }
}
