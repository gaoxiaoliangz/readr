'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JUMP_TO = exports.LOAD_PAGES = exports.SET_BOOK_MODE = exports.READ_CONTENT_FROM_CACHE = exports.CLEAR_BOOK_SEARCH = undefined;
exports.fetchBookList = fetchBookList;
exports.fetchDoubanBookSearchResults = fetchDoubanBookSearchResults;
exports.clearBookSearch = clearBookSearch;
exports.fetchBookContent = fetchBookContent;
exports.fetchBookInfo = fetchBookInfo;
exports.readContentFromCache = readContentFromCache;
exports.setBookMode = setBookMode;
exports.loadPages = loadPages;
exports.jumpTo = jumpTo;

var _actions = require('actions');

var _apiUrls = require('constants/api-urls');

function fetchBookList(endpoint) {
  return (0, _actions.promisedCallApi)({
    types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE'],
    endpoint: endpoint
  }, {});
}

function fetchDoubanBookSearchResults(endpoint) {
  return (0, _actions.promisedCallApi)({
    types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
    endpoint: endpoint,
    apiUrl: _apiUrls.API_DOUBAN_BOOKS
  }, {});
}

var CLEAR_BOOK_SEARCH = exports.CLEAR_BOOK_SEARCH = 'CLEAR_BOOK_SEARCH';
function clearBookSearch() {
  return {
    type: CLEAR_BOOK_SEARCH
  };
}

function fetchBookContent(bookId, endpoint) {
  return (0, _actions.promisedCallApi)({
    types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
    endpoint: endpoint
  }, { bookId: bookId });
}

function fetchBookInfo(bookId, endpoint) {
  return (0, _actions.promisedCallApi)({
    types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
    endpoint: endpoint
  }, { bookId: bookId });
}

// export function fetchBookInfo(bookId, endpoint) {
//   return {
//     bookId,
//     CALL_API: {
//       types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
//       endpoint
//     }
//   }
// }

var READ_CONTENT_FROM_CACHE = exports.READ_CONTENT_FROM_CACHE = 'READ_CONTENT_FROM_CACHE';
function readContentFromCache(bookId, content) {
  return {
    type: READ_CONTENT_FROM_CACHE,
    bookId: bookId,
    content: content
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
