import { promisedCallApi } from 'actions'
import ApiRoots from 'constants/ApiRoots'
import { Schemas } from 'middleware/api'

export function fetchBookProgress(bookId) {
  return {
    CALL_API: {
      types: ['BOOK_PROGRESS_REQUEST', 'BOOK_PROGRESS_SUCCESS', 'BOOK_PROGRESS_FAILURE'],
      endpoint: `books/${bookId}/progress`,
      schema: Schemas.BOOK_PROGRESS
    }
  }
}

export const BOOK_LIST_REQUEST = 'BOOK_LIST_REQUEST'
export const BOOK_LIST_SUCCESS = 'BOOK_LIST_SUCCESS'
export const BOOK_LIST_FAILURE = 'BOOK_LIST_FAILURE'
export function fetchBookList() {
  return {
    CALL_API: {
      types: [BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE],
      endpoint: 'books',
      schema: Schemas.BOOK_ARRAY
    }
  }
}

export function fetchBookContent(bookId) {
  return {
    CALL_API: {
      types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
      endpoint: `books/${bookId}/content`,
      schema: Schemas.BOOK
    }
  }
}

export const BOOK_INFO_REQUEST = 'BOOK_INFO_REQUEST'
export const BOOK_INFO_SUCCESS = 'BOOK_INFO_SUCCESS'
export const BOOK_INFO_FAILURE = 'BOOK_INFO_FAILURE'
export function fetchBookInfo(bookId) {
  return {
    CALL_API:{
      types: [BOOK_INFO_REQUEST, BOOK_INFO_SUCCESS, BOOK_INFO_FAILURE],
      endpoint: `books/${bookId}`,
      schema: Schemas.BOOK
    }
  }
}

export function fetchDoubanBookSearchResults(endpoint) {
  return promisedCallApi({
    types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
    endpoint,
    apiUrl: ApiRoots.DOUBAN_BOOKS
  }, {})
}

export const CLEAR_BOOK_SEARCH = 'CLEAR_BOOK_SEARCH'
export function clearBookSearch() {
  return {
    type: CLEAR_BOOK_SEARCH
  }
}
