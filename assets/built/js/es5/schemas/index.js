'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Schemas = undefined;

var _normalizr = require('normalizr');

var book = new _normalizr.Schema('books', {
    idAttribute: 'id'
});
var collection = new _normalizr.Schema('collections', {
    idAttribute: 'id'
});
var user = new _normalizr.Schema('users', {
    idAttribute: 'id'
});
var doubanBook = new _normalizr.Schema('doubanBooks', {
    idAttribute: 'id'
});
var bookProgress = new _normalizr.Schema('books', {
    idAttribute: 'bookId'
});
var matchedBooks = new _normalizr.Schema('books', {
    idAttribute: 'bookId'
});
var Schemas = exports.Schemas = {
    BOOK: book,
    BOOK_PROGRESS: bookProgress,
    BOOK_ARRAY: (0, _normalizr.arrayOf)(book),
    DOUBAN_BOOK_SEARCH_RESULTS: { books: (0, _normalizr.arrayOf)(doubanBook) },
    USER_ARRAY: (0, _normalizr.arrayOf)(user),
    MATCHED_BOOK_ARRAY: (0, _normalizr.arrayOf)(matchedBooks),
    COLLECTION: collection,
    COLLECTION_ARRAY: (0, _normalizr.arrayOf)(collection)
};