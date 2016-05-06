'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBookList = addBookList;

var _callApi = require('./callApi');

var _callApi2 = _interopRequireDefault(_callApi);

var _ApiRoots = require('constants/ApiRoots');

var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addBookList(name, books, description) {
  var data = {
    name: name,
    books: books,
    description: description
  };
  return (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'booklist', method: 'POST', data: data });
}
