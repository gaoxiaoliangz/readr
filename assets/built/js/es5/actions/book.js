'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLEAR_BOOK_SEARCH = exports.BOOK_INFO_FAILURE = exports.BOOK_INFO_SUCCESS = exports.BOOK_INFO_REQUEST = exports.BOOK_LIST_FAILURE = exports.BOOK_LIST_SUCCESS = exports.BOOK_LIST_REQUEST = undefined;
exports.fetchBookProgress = fetchBookProgress;
exports.fetchBookList = fetchBookList;
exports.fetchBookContent = fetchBookContent;
exports.fetchBookInfo = fetchBookInfo;
exports.fetchDoubanBookSearchResults = fetchDoubanBookSearchResults;
exports.clearBookSearch = clearBookSearch;

var _actions = require('actions');

var _ApiRoots = require('constants/ApiRoots');

var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

var _api = require('middleware/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchBookProgress(bookId) {
  return {
    CALL_API: {
      types: ['BOOK_PROGRESS_REQUEST', 'BOOK_PROGRESS_SUCCESS', 'BOOK_PROGRESS_FAILURE'],
      endpoint: 'books/' + bookId + '/progress',
      schema: _api.Schemas.BOOK_PROGRESS
    }
  };
}

var BOOK_LIST_REQUEST = exports.BOOK_LIST_REQUEST = 'BOOK_LIST_REQUEST';
var BOOK_LIST_SUCCESS = exports.BOOK_LIST_SUCCESS = 'BOOK_LIST_SUCCESS';
var BOOK_LIST_FAILURE = exports.BOOK_LIST_FAILURE = 'BOOK_LIST_FAILURE';
function fetchBookList() {
  return {
    CALL_API: {
      types: [BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE],
      endpoint: 'books',
      schema: _api.Schemas.BOOK_ARRAY
    }
  };
}

function fetchBookContent(bookId) {
  return {
    CALL_API: {
      types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
      endpoint: 'books/' + bookId + '/content',
      schema: _api.Schemas.BOOK
    }
  };
}

var BOOK_INFO_REQUEST = exports.BOOK_INFO_REQUEST = 'BOOK_INFO_REQUEST';
var BOOK_INFO_SUCCESS = exports.BOOK_INFO_SUCCESS = 'BOOK_INFO_SUCCESS';
var BOOK_INFO_FAILURE = exports.BOOK_INFO_FAILURE = 'BOOK_INFO_FAILURE';
function fetchBookInfo(bookId) {
  return {
    CALL_API: {
      types: [BOOK_INFO_REQUEST, BOOK_INFO_SUCCESS, BOOK_INFO_FAILURE],
      endpoint: 'books/' + bookId,
      schema: _api.Schemas.BOOK
    }
  };
}

function fetchDoubanBookSearchResults(endpoint) {
  return (0, _actions.promisedCallApi)({
    types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
    endpoint: endpoint,
    apiUrl: _ApiRoots2.default.DOUBAN_BOOKS
  }, {});
}

var CLEAR_BOOK_SEARCH = exports.CLEAR_BOOK_SEARCH = 'CLEAR_BOOK_SEARCH';
function clearBookSearch() {
  return {
    type: CLEAR_BOOK_SEARCH
  };
}
