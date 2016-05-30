'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function handleInitialState() {
    var initialState = void 0;
    if (typeof window.__INITIAL_STATE__ !== 'undefined') {
        initialState = window.__INITIAL_STATE__;
    }
    return initialState;
}
exports.default = handleInitialState;