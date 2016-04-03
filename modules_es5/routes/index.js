'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('containers/app');

var _app2 = _interopRequireDefault(_app);

var _noMatch = require('containers/no-match');

var _noMatch2 = _interopRequireDefault(_noMatch);

var _home = require('containers/home');

var _home2 = _interopRequireDefault(_home);

var _bookViewer = require('containers/book-viewer');

var _bookViewer2 = _interopRequireDefault(_bookViewer);

var _bookStore = require('containers/book-store');

var _bookStore2 = _interopRequireDefault(_bookStore);

var _signin = require('containers/signin');

var _signin2 = _interopRequireDefault(_signin);

var _signup = require('containers/signup');

var _signup2 = _interopRequireDefault(_signup);

var _addBook = require('containers/add-book');

var _addBook2 = _interopRequireDefault(_addBook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _app2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'signin', component: _signin2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'Signup', component: _signup2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'addbook', component: _addBook2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: 'bookstore', component: _app2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _bookStore2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'book/:bookname', component: _bookViewer2.default })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: 'book/:id', component: _bookViewer2.default })
);
