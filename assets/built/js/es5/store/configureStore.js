'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _DevTools = require('containers/DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _api = require('middleware/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  if (module.hot) {
    module.hot.accept('../reducers', function () {
      var nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(
  // applyMiddleware(thunk, api, createLogger()),
  (0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default), _DevTools2.default.instrument()));
}
