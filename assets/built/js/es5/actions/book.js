'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchBookProgress = fetchBookProgress;
exports.fetchBookList = fetchBookList;
exports.fetchBookContent = fetchBookContent;
exports.fetchBookInfo = fetchBookInfo;
exports.fetchDoubanBookSearchResults = fetchDoubanBookSearchResults;

var _actions = require('actions');

var _ApiRoots = require('constants/ApiRoots');

var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

var _schemas = require('schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchBookProgress(bookId) {
  return {
    bookId: bookId,
    CALL_API: {
      types: ['BOOK_PROGRESS_REQUEST', 'BOOK_PROGRESS_SUCCESS', 'BOOK_PROGRESS_FAILURE'],
      endpoint: 'books/' + bookId + '/progress',
      schema: _schemas.Schemas.BOOK_PROGRESS
    }
  };
}

function fetchBookList(filter) {
  return {
    filter: filter,
    CALL_API: {
      types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE'],
      endpoint: 'books?filter=' + filter,
      schema: _schemas.Schemas.BOOK_ARRAY
    }
  };
}

function fetchBookContent(bookId) {
  return {
    bookId: bookId,
    CALL_API: {
      types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
      endpoint: 'books/' + bookId + '/content',
      schema: _schemas.Schemas.BOOK
    }
  };
}

function fetchBookInfo(bookId) {
  return {
    bookId: bookId,
    CALL_API: {
      types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
      endpoint: 'books/' + bookId,
      schema: _schemas.Schemas.BOOK_ARRAY
    }
  };
}

function fetchDoubanBookSearchResults(query) {
  return {
    query: query,
    CALL_API: {
      types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
      endpoint: 'search?count=5&q=' + query,
      apiUrl: _ApiRoots2.default.DOUBAN_BOOKS,
      schema: _schemas.Schemas.DOUBAN_BOOK_SEARCH_RESULTS,
      extendedOptions: { useJsonp: true }
    }
  };
}
