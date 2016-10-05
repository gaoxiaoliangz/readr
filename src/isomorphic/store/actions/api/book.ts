import schemas from '../../../services/schemas'
import { CALL_API_OBJ } from '../../middleware/api'
import _ from 'lodash'
import helpers from '../../../helpers'

const doubanApi = helpers.getApiRoots().douban

export const BOOK_REQUEST = 'data-fetching/book/REQUEST'
export const BOOK_SUCCESS = 'data-fetching/book/SUCCESS'
export const BOOK_FAILURE = 'data-fetching/book/FAILURE'
export function fetchBook(bookId, fields?: Array<any>) {
  let endpoint = `books/${bookId}`

  if (fields) {
    endpoint += `?fields=${fields.join(',')}`
  }

  const CALL_API: CALL_API_OBJ = {
    types: [BOOK_REQUEST, BOOK_SUCCESS, BOOK_FAILURE],
    endpoint,
    schema: schemas.BOOK
  }

  return {
    bookId,
    CALL_API
  }
}

export const DOUBAN_BOOK_SEARCH_REQUEST = 'data-fetching/douban-book-search/REQUEST'
export const DOUBAN_BOOK_SEARCH_SUCCESS = 'data-fetching/douban-book-search/SUCCESS'
export const DOUBAN_BOOK_SEARCH_FAILURE = 'data-fetching/douban-book-search/FAILURE'
export function searchDoubanBooks(query) {
  const CALL_API: CALL_API_OBJ = {
    types: [DOUBAN_BOOK_SEARCH_REQUEST, DOUBAN_BOOK_SEARCH_SUCCESS, DOUBAN_BOOK_SEARCH_FAILURE],
    endpoint: `book/search?count=5&q=${query}`,
    apiUrl: doubanApi,
    schema: schemas.DOUBAN_BOOK_SEARCH_RESULTS,
    options: { useJsonp: true },
    pagination: {
      name: 'doubanBooks',
      query
    }
  }

  return {
    query,
    CALL_API
  }
}
