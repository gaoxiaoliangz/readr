'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleNotification = handleNotification;
exports.showNotification = showNotification;
exports.hideNotification = hideNotification;
function handleNotification(content, t) {
    if (typeof t === 'undefined') {
        t = 6000;
    }
    return function (dispatch, getState) {
        dispatch(showNotification(content));
        setTimeout(function () {
            dispatch(hideNotification());
        }, t);
    };
}
var SHOW_NOTIFICATION = exports.SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
function showNotification(content) {
    return {
        type: SHOW_NOTIFICATION,
        content: content,
        isVisible: true
    };
}
var HIDE_NOTIFICATION = exports.HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
function hideNotification() {
    return {
        type: HIDE_NOTIFICATION,
        isVisible: false
    };
}