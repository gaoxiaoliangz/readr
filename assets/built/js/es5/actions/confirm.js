'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showConfirm = showConfirm;
exports.hideConfirm = hideConfirm;
var SHOW_CONFIRM = exports.SHOW_CONFIRM = 'SHOW_CONFIRM';
function showConfirm(content) {
  return {
    type: SHOW_CONFIRM,
    content: content,
    isVisible: true
  };
}

var HIDE_CONFIRM = exports.HIDE_CONFIRM = 'HIDE_CONFIRM';
function hideConfirm() {
  return {
    type: HIDE_CONFIRM,
    isVisible: false
  };
}
