'use strict';

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('routes/app');

var _app2 = _interopRequireDefault(_app);

var _reactRedux = require('react-redux');

var _DevTools = require('containers/DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

var _reactRouterRedux = require('react-router-redux');

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _createStore2.default)();
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouter.Router, { history: history, routes: _app2.default }),
    _react2.default.createElement(_DevTools2.default, null)
  )
), document.getElementById('root'));