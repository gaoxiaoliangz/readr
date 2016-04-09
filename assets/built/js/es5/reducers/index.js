'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _book = require('./book');

var _book2 = _interopRequireDefault(_book);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _notification = require('./notification');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  book: _book2.default,
  user: _user2.default,
  notification: _notification2.default
});

exports.default = rootReducer;
