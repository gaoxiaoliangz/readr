'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JUMP_TO = exports.LOAD_PAGES = exports.SET_BOOK_MODE = exports.LOAD_HTML = exports.BOOK_INFO_FAILURE = exports.BOOK_INFO_SUCCESS = exports.BOOK_INFO_REQUEST = exports.CLEAR_BOOK_SEARCH = exports.BOOK_LIST_FAILURE = exports.BOOK_LIST_SUCCESS = exports.BOOK_LIST_REQUEST = undefined;
exports.fetchBookProgress = fetchBookProgress;
exports.fetchBookList = fetchBookList;
exports.fetchDoubanBookSearchResults = fetchDoubanBookSearchResults;
exports.clearBookSearch = clearBookSearch;
exports.fetchBookContent = fetchBookContent;
exports.fetchBookInfo = fetchBookInfo;
exports.fetchBookInfo00 = fetchBookInfo00;
exports.loadHTML = loadHTML;
exports.setBookMode = setBookMode;
exports.loadPages = loadPages;
exports.jumpTo = jumpTo;

var _actions = require('actions');

var _APIS = require('constants/APIS');

var _api = require('middleware/api');

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

function fetchDoubanBookSearchResults(endpoint) {
  return (0, _actions.promisedCallApi)({
    types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
    endpoint: endpoint,
    apiUrl: _APIS.API_DOUBAN_BOOKS
  }, {});
}

var CLEAR_BOOK_SEARCH = exports.CLEAR_BOOK_SEARCH = 'CLEAR_BOOK_SEARCH';
function clearBookSearch() {
  return {
    type: CLEAR_BOOK_SEARCH
  };
}

function fetchBookContent(bookId) {
  return {
    CALL_API: {
      types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
      endpoint: 'books/' + bookId + '/content'
    }
  };
}

// export function fetchBookContent(bookId) {
//   return promisedCallApi({
//     types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
//     endpoint: `books/${bookId}/content`
//   }, { bookId })
// }

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

// TODO
function fetchBookInfo00(bookId, endpoint) {
  return (0, _actions.promisedCallApi)({
    types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
    endpoint: endpoint
  }, { bookId: bookId });
}

var LOAD_HTML = exports.LOAD_HTML = 'LOAD_HTML';
function loadHTML(html) {
  return {
    type: LOAD_HTML,
    html: html
  };
}

var SET_BOOK_MODE = exports.SET_BOOK_MODE = 'SET_BOOK_MODE';
function setBookMode(mode) {
  return {
    type: SET_BOOK_MODE,
    mode: mode
  };
}

var LOAD_PAGES = exports.LOAD_PAGES = 'LOAD_PAGES';
function loadPages(pages) {
  return {
    type: LOAD_PAGES,
    pages: pages
  };
}

var JUMP_TO = exports.JUMP_TO = 'JUMP_TO';
function jumpTo(pageNo) {
  return {
    type: JUMP_TO,
    currentPage: pageNo
  };
}
