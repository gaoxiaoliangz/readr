'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('containers/App');

var _App2 = _interopRequireDefault(_App);

var _Template = require('containers/Template');

var _Template2 = _interopRequireDefault(_Template);

var _ManageBooks = require('containers/ManageBooks');

var _ManageBooks2 = _interopRequireDefault(_ManageBooks);

var _ManageUsers = require('containers/ManageUsers');

var _ManageUsers2 = _interopRequireDefault(_ManageUsers);

var _AddBook = require('containers/AddBook');

var _AddBook2 = _interopRequireDefault(_AddBook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleEnter(a, b) {
  // console.log(a);
  // console.log(b);
}

function requireAdminPermission(nextState, replace) {
  if (true) {
    replace({
      pathname: '/Signin',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { path: '/', component: _App2.default },
  _react2.default.createElement(
    _reactRouter.Router,
    { path: '/console', component: _Template2.default },
    _react2.default.createElement(_reactRouter.Route, { path: 'books', component: _ManageBooks2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'users', component: _ManageUsers2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'addbook', component: _AddBook2.default })
  )
);
