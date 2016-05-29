'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NoMatch = require('containers/NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _Viewer = require('containers/Viewer');

var _Viewer2 = _interopRequireDefault(_Viewer);

var _Signin = require('containers/Signin');

var _Signin2 = _interopRequireDefault(_Signin);

var _Signup = require('containers/Signup');

var _Signup2 = _interopRequireDefault(_Signup);

var _BookInfo = require('containers/BookInfo');

var _BookInfo2 = _interopRequireDefault(_BookInfo);

var _App = require('containers/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('containers/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Profile = require('containers/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _BookShelf = require('containers/BookShelf');

var _BookShelf2 = _interopRequireDefault(_BookShelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  null,
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'book/:id', component: _BookInfo2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'profile', component: _Profile2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'shelf', component: _BookShelf2.default })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: 'signin', component: _Signin2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _Signup2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'viewer/book/:id', component: _Viewer2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NoMatch2.default })
);