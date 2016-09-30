import schemas from '../../../services/schemas'
import { CALL_API_OBJ } from '../../middleware/api'
import utils from '../../../utils'
import _ from 'lodash'
import helpers from '../../../helpers'

const doubanApi = helpers.getApiRoots().douban

export const BOOKS_REQUEST = 'data-fetching/books/REQUEST'
export const BOOKS_SUCCESS = 'data-fetching/books/SUCCESS'
export const BOOKS_FAILURE = 'data-fetching/books/FAILURE'
export type fetchBooks = {
  page?: number
  merge?: boolean
  q?: string
}
export function fetchBooks(options?: fetchBooks) {
  const defaultConfig = { page: 1, merge: false }
  const mergedOptions = Object.assign(defaultConfig, options || {})
  const { merge, q } = mergedOptions
  let queryOptions = _.omit(mergedOptions, ['merge'])

  queryOptions = _.assign({}, queryOptions, {
    exclude: 'content'
  })

  const queryString = utils.parseUrlencoded(queryOptions)
  const pagination = {
      name: 'books',
      merge,
      query: q
    }

  const CALL_API: CALL_API_OBJ = {
    types: [BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAILURE],
    endpoint: `books?${queryString}`,
    schema: schemas.BOOK_ARRAY,
    pagination
  }

  return {
    cacheKey: pagination,
    CALL_API
  }
}

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

export function fetchCollections(flowType: 'newest' | 'hot' = 'newest') {
  return {
    flowType,
    CALL_API: {
      types: ['COLLECTIONS_REQUEST', 'COLLECTIONS_SUCCESS', 'COLLECTIONS_FAILURE'],
      endpoint: `collections`,
      schema: schemas.COLLECTION_ARRAY
    }
  }
}

export function fetchCollection(collectionId) {
  return {
    collectionId,
    CALL_API: {
      types: ['COLLECTION_REQUEST', 'COLLECTION_SUCCESS', 'COLLECTION_FAILURE'],
      endpoint: `collections/${collectionId}`,
      schema: schemas.COLLECTION
    }
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
