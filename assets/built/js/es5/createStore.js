'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configureStore = require('store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore() {
  var store = void 0;

  if (typeof window.__INITIAL_STATE__ !== 'undefined') {
    store = (0, _configureStore2.default)(window.__INITIAL_STATE__);
  } else {
    store = (0, _configureStore2.default)();
  }

  return store;
}

exports.default = createStore;