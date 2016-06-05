'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBookView = getBookView;
exports.lockScroll = lockScroll;
exports.unlockScroll = unlockScroll;
function getBookView() {
    var aspectRatio = 7 / 9;
    if (window.innerWidth <= 540) {
        return {
            screen: 'phone',
            pageWidth: window.innerWidth,
            pageHeight: window.innerWidth / aspectRatio
        };
    } else {
        return {
            screen: 'hd',
            pageWidth: 700,
            pageHeight: 700 / aspectRatio
        };
    }
}
function lockScroll() {
    document.body.style.overflow = 'hidden';
}
function unlockScroll() {
    document.body.style.overflow = 'visible';
}
exports.default = {
    getBookView: getBookView,
    lockScroll: lockScroll,
    unlockScroll: unlockScroll
};