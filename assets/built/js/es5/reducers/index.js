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

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  book: _book2.default,
  user: _user2.default,
  notification: _notification2.default,
  view: _view2.default,
  confirm: _confirm2.default
});

exports.default = rootReducer;
