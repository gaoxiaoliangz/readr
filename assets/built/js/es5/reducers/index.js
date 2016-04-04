'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _lang = require('./lang');

var _lang2 = _interopRequireDefault(_lang);

var _book = require('./book');

var _book2 = _interopRequireDefault(_book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  lang: _lang2.default,
  book: _book2.default
});

exports.default = rootReducer;
