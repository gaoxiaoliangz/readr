'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showConfirm = showConfirm;
exports.hideConfirm = hideConfirm;
exports.confirmYes = confirmYes;
exports.confirmNo = confirmNo;
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

var CONFIRM_YES = exports.CONFIRM_YES = 'CONFIRM_YES';
function confirmYes() {
  return {
    type: CONFIRM_YES,
    isVisible: false,
    result: 'yes'
  };
}

var CONFIRM_NO = exports.CONFIRM_NO = 'CONFIRM_NO';
function confirmNo() {
  return {
    type: CONFIRM_NO,
    isVisible: false,
    result: 'no'
  };
}
