'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('containers/App');

var _App2 = _interopRequireDefault(_App);

var _NoMatch = require('containers/NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _BookViewer = require('containers/BookViewer');

var _BookViewer2 = _interopRequireDefault(_BookViewer);

var _BookStore = require('containers/BookStore');

var _BookStore2 = _interopRequireDefault(_BookStore);

var _Signin = require('containers/Signin');

var _Signin2 = _interopRequireDefault(_Signin);

var _Signup = require('containers/Signup');

var _Signup2 = _interopRequireDefault(_Signup);

var _AddBook = require('containers/AddBook');

var _AddBook2 = _interopRequireDefault(_AddBook);

var _BookInfo = require('containers/BookInfo');

var _BookInfo2 = _interopRequireDefault(_BookInfo);

var _Template = require('containers/Template');

var _Template2 = _interopRequireDefault(_Template);

var _ManageBooks = require('containers/ManageBooks');

var _ManageBooks2 = _interopRequireDefault(_ManageBooks);

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
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _BookStore2.default, onEnter: handleEnter.bind(undefined) }),
  _react2.default.createElement(_reactRouter.Route, { path: '/template', component: _Template2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/bookstore', component: _BookStore2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'signin', component: _Signin2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'Signup', component: _Signup2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'addbook', component: _AddBook2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'bookstore/book/:id', component: _BookInfo2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'book/:id', component: _BookViewer2.default }),
  _react2.default.createElement(
    _reactRouter.Router,
    { path: '/admin', component: _Template2.default, haha: 'yessss' },
    _react2.default.createElement(_reactRouter.Route, { path: 'books', component: _ManageBooks2.default, fuck: 'you', onEnter: requireAdminPermission })
  )
);
