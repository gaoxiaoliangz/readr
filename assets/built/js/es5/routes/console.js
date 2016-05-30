'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _index = require('containers/console/index');

var _index2 = _interopRequireDefault(_index);

var _ManageBooks = require('containers/console/ManageBooks');

var _ManageBooks2 = _interopRequireDefault(_ManageBooks);

var _ManageUsers = require('containers/console/ManageUsers');

var _ManageUsers2 = _interopRequireDefault(_ManageUsers);

var _AddBook = require('containers/console/AddBook');

var _AddBook2 = _interopRequireDefault(_AddBook);

var _AddCollection = require('containers/console/AddCollection');

var _AddCollection2 = _interopRequireDefault(_AddCollection);

var _NoMatch = require('containers/NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(_reactRouter.Router, null, _react2.default.createElement(_reactRouter.Route, { path: "/console", component: _index2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _ManageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "managebooks", component: _ManageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "manageusers", component: _ManageUsers2.default }), _react2.default.createElement(_reactRouter.Route, { path: "addbook", component: _AddBook2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collection/new", component: _AddCollection2.default })), _react2.default.createElement(_reactRouter.Route, { path: "*", component: _NoMatch2.default }));