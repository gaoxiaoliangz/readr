'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = notification;
function notification(state, action) {
  if (typeof state === 'undefined') {
    state = {
      isVisible: false,
      result: 'unsettled'
    };
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

    case 'CONFIRM_YES':
      return Object.assign({}, state, {
        isVisible: false,
        result: 'yes'
      });

    case 'CONFIRM_NO':
      return Object.assign({}, state, {
        isVisible: false,
        result: 'no'
      });

    default:
      return state;
  }
}
