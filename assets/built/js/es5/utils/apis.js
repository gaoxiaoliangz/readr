'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCollection = addCollection;
exports.addBook = addBook;
exports.addAuthor = addAuthor;
exports.searchAuthors = searchAuthors;
exports.searchBooks = searchBooks;
exports.setProgress = setProgress;

var _callApi = require('./callApi');

var _callApi2 = _interopRequireDefault(_callApi);

var _ApiRoots = require('constants/ApiRoots');

var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * data: name, items, description
 */
function addCollection(data) {
  return (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'collections', method: 'POST', data: data });
}

/**
 * data: name, author, description, cover, content
 */
function addBook(data) {
  return (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'books', method: 'POST', data: data });
}

/**
 * data: name, slug, description
 */
function addAuthor(data) {
  return (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'authors', method: 'POST', data: data });
}

function searchAuthors(query) {
  return (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'authors?q=' + query });
}

function searchBooks(query) {
  return (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'books?q=' + query });
}

/**
 * data: pageNo, pageSum, percentage
 */
function setProgress(bookId, data) {
  (0, _callApi2.default)({ fullUrl: _ApiRoots2.default.LOCAL + 'books/' + bookId + '/progress', method: 'POST', data: data });
}

exports.default = {
  addCollection: addCollection,
  addBook: addBook,
  addAuthor: addAuthor,
  searchBooks: searchBooks,
  searchAuthors: searchAuthors,
  setProgress: setProgress
};
