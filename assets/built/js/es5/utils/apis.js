'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCollection = addCollection;
exports.addBook = addBook;
exports.searchAuthors = searchAuthors;

var _callApi = require('./callApi');

var _callApi2 = _interopRequireDefault(_callApi);

var _ApiRoots = require('constants/ApiRoots');

var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addCollection(name, ids, description) {
  var data = {
    name: name,
    ids: ids,
    description: description
  };
  return (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'collections', method: 'POST', data: data });
}

/**
 * data: name, author, description, cover, content
 */
function addBook(data) {
  (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'books', method: 'POST', data: data });
}

function searchAuthors(query) {
  return (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'authors?q=' + query });
}

exports.default = {
  addCollection: addCollection,
  addBook: addBook,
  searchAuthors: searchAuthors
};
