'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BOOK_INFO_FAILURE = exports.BOOK_INFO_SUCCESS = exports.BOOK_INFO_REQUEST = exports.CLEAR_BOOK_SEARCH = exports.BOOK_LIST_FAILURE = exports.BOOK_LIST_SUCCESS = exports.BOOK_LIST_REQUEST = undefined;
exports.fetchBookProgress = fetchBookProgress;
exports.fetchBookList = fetchBookList;
exports.fetchDoubanBookSearchResults = fetchDoubanBookSearchResults;
exports.clearBookSearch = clearBookSearch;
exports.fetchBookContent = fetchBookContent;
exports.fetchBookInfo = fetchBookInfo;

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
      endpoint: 'books/' + bookId + '/content',
      schema: _api.Schemas.BOOK
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
// export function fetchBookInfo00(bookId, endpoint) {
//   return promisedCallApi({
//     types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
//     endpoint
//   }, { bookId })
// }
//
// export const LOAD_HTML = 'LOAD_HTML'
// export function loadHTML(html) {
//   return {
//     type: LOAD_HTML,
//     html
//   }
// }
//
// export const SET_BOOK_MODE = 'SET_BOOK_MODE'
// export function setBookMode(mode) {
//   return {
//     type: SET_BOOK_MODE,
//     mode
//   }
// }
//
// export const LOAD_PAGES = 'LOAD_PAGES'
// export function loadPages(pages) {
//   return {
//     type: LOAD_PAGES,
//     pages
//   }
// }
//
// export const JUMP_TO = 'JUMP_TO'
// export function jumpTo(pageNo) {
//   return {
//     type: JUMP_TO,
//     currentPage: pageNo
//   }
// }
