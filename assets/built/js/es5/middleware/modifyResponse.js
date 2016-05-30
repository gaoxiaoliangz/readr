'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  return function (next) {
    return function (action) {

      switch (action.type) {
        case 'DOUBAN_BOOK_SEARCH_SUCCESS':
          // TODO: can be fixed in normalizr?
          action.response.result = action.response.result.books;
          break;
        default:
          break;
      }

      next(action);
    };
  };
};
