'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchBookProgress = fetchBookProgress;
exports.fetchBooks = fetchBooks;
exports.fetchBook = fetchBook;
exports.fetchCollections = fetchCollections;
exports.fetchCollection = fetchCollection;
exports.fetchDoubanBookSearchResults = fetchDoubanBookSearchResults;
exports.searchBooks = searchBooks;

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

function fetchBooks(flow) {
  return {
    flow: flow,
    CALL_API: {
      types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE'],
      endpoint: 'books?flow=' + flow,
      schema: _schemas.Schemas.BOOK_ARRAY
    }
  };
}

function fetchBook(bookId, fields) {
  var endpoint = 'books/' + bookId;

  if (fields) {
    endpoint += '?fields=' + fields.join(',');
  }

  return {
    bookId: bookId,
    CALL_API: {
      types: ['BOOK_REQUEST', 'BOOK_SUCCESS', 'BOOK_FAILURE'],
      endpoint: endpoint,
      schema: _schemas.Schemas.BOOK
    }
  };
}

function fetchCollections() {
  return {
    CALL_API: {
      types: ['COLLECTIONS_REQUEST', 'COLLECTIONS_SUCCESS', 'COLLECTIONS_FAILURE'],
      endpoint: 'collections',
      schema: _schemas.Schemas.COLLECTION_ARRAY
    }
  };
}

function fetchCollection(collectionId) {
  return {
    collectionId: collectionId,
    CALL_API: {
      types: ['COLLECTION_REQUEST', 'COLLECTION_SUCCESS', 'COLLECTION_FAILURE'],
      endpoint: 'collections/' + collectionId,
      schema: _schemas.Schemas.COLLECTION
    }
  };
}

// export function fetchBookContent(bookId) {
//   return {
//     bookId,
//     CALL_API: {
//       types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
//       endpoint: `books/${bookId}/content`,
//       schema: Schemas.BOOK
//     }
//   }
// }
//
// export function fetchBookInfo(bookId) {
//   return {
//     bookId,
//     CALL_API:{
//       types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
//       endpoint: `books/${bookId}`,
//       schema: Schemas.BOOK_ARRAY
//     }
//   }
// }

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

function searchBooks(query) {
  return {
    query: query,
    CALL_API: {
      types: ['BOOK_SEARCH_REQUEST', 'BOOK_SEARCH_SUCCESS', 'BOOK_SEARCH_FAILURE'],
      endpoint: 'search?q=' + query,
      apiUrl: _ApiRoots2.default.LOCAL,
      schema: _schemas.Schemas.MATCHED_BOOK_ARRAY
    }
  };
}