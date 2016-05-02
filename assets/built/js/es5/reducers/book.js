'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = book;
function book(state, action) {
  if (typeof state === 'undefined') {
    state = {};
  }
  switch (action.type) {

    // case 'BOOK_LIST_REQUEST':
    //   return Object.assign({}, state, {
    //     isFetchingList: true
    //   })
    //
    // case 'BOOK_LIST_SUCCESS':
    //   return Object.assign({}, state, {
    //     isFetchingList: false,
    //     bookList: action.response
    //   })
    //
    // case 'BOOK_CONTENT_REQUEST':
    //   return Object.assign({}, state, {
    //     isFetchingContent: true,
    //     id: action.bookId
    //   })

    // case 'BOOK_CONTENT_SUCCESS':
    //   return Object.assign({}, state, {
    //     isFetchingContent: false,
    //     html: action.response.html
    //   })

    // case 'BOOK_INFO_REQUEST':
    //   return Object.assign({}, state, {
    //     isFetchingInfo: true,
    //     id: action.bookId
    //   })
    //
    // case 'BOOK_INFO_SUCCESS':
    //   return Object.assign({}, state, {
    //     isFetchingInfo: false,
    //     meta: action.response
    //   })

    // case 'LOAD_HTML':
    //   return Object.assign({}, state, {
    //     html: action.html
    //   })

    // case 'LOAD_PAGES':
    //   return Object.assign({}, state, {
    //     isPagesLoaded: true,
    //     pages: action.pages
    //   })

    // case 'SET_BOOK_MODE':
    //   return Object.assign({}, state, {
    //     mode: action.mode
    //   })
    //
    // case 'JUMP_TO':
    //   return Object.assign({}, state, {
    //     isPagesLoaded: true,
    //     currentPage: action.currentPage
    //   })

    case 'DOUBAN_BOOK_SEARCH_REQUEST':
      return Object.assign({}, state, {
        isFetchingSearch: true
      });

    case 'DOUBAN_BOOK_SEARCH_SUCCESS':
      return Object.assign({}, state, {
        isFetchingSearch: false,
        searchResults: action.response
      });

    case 'DOUBAN_BOOK_SEARCH_FAILURE':
      return Object.assign({}, state, {
        isFetchingSearch: false,
        error: action.response
      });

    case 'CLEAR_BOOK_SEARCH':
      return Object.assign({}, state, {
        searchResults: null
      });

    default:
      return state;
  }
}
