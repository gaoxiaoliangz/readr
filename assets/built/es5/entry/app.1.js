'use strict';

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('routes/App');

var _App2 = _interopRequireDefault(_App);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _configureStore = require('store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
(0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_reactRouter.Router, { history: history, routes: _App2.default.props.children })), document.getElementById('root'));