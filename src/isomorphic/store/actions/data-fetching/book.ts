import { Schemas } from '../../../schemas'
import { ApiRoots } from '../../../config'
import { CALL_API_OBJ } from '../../middleware/api'
import utils from '../../../utils'
import _ from 'lodash'

export const BOOKS_REQUEST = 'data-fetching/books/REQUEST'
export const BOOKS_SUCCESS = 'data-fetching/books/SUCCESS'
export const BOOKS_FAILURE = 'data-fetching/books/FAILURE'
export type fetchBooks = {
  page?: number
  merge?: boolean
  q?: string
}
export function fetchBooks(options?: fetchBooks) {
  const defaultConfig = { page: 1, merge: true }
  const mergedOptions = Object.assign(defaultConfig, options || {})
  const { merge, q } = mergedOptions
  let queryOptions = _.omit(mergedOptions, ['merge'])

  queryOptions = _.assign({}, queryOptions, {
    exclude: 'content'
  })

  const queryString = utils.parseFormData(queryOptions)
  const CALL_API = {
    types: [BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAILURE],
    endpoint: `books?${queryString}`,
    schema: Schemas.BOOK_ARRAY,
    pagination: {
      name: 'books',
      merge,
      query: q
    }
  } as CALL_API_OBJ

  return {
    CALL_API
  }
}

export function fetchBook(bookId, fields?: Array<any>) {
  let endpoint = `books/${bookId}`

  if (fields) {
    endpoint += `?fields=${fields.join(',')}`
  }

  return {
    bookId,
    CALL_API: {
      types: ['BOOK_REQUEST', 'BOOK_SUCCESS', 'BOOK_FAILURE'],
      endpoint,
      schema: Schemas.BOOK
    }
  }
}

export function fetchCollections(flowType: 'newest' | 'hot' = 'newest') {
  return {
    flowType,
    CALL_API: {
      types: ['COLLECTIONS_REQUEST', 'COLLECTIONS_SUCCESS', 'COLLECTIONS_FAILURE'],
      endpoint: `collections`,
      schema: Schemas.COLLECTION_ARRAY
    }
  }
}

export function fetchCollection(collectionId) {
  return {
    collectionId,
    CALL_API: {
      types: ['COLLECTION_REQUEST', 'COLLECTION_SUCCESS', 'COLLECTION_FAILURE'],
      endpoint: `collections/${collectionId}`,
      schema: Schemas.COLLECTION
    }
  }
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


export const DOUBAN_BOOK_SEARCH_REQUEST = 'data-fetching/douban-book-search/REQUEST'
export const DOUBAN_BOOK_SEARCH_SUCCESS = 'data-fetching/douban-book-search/SUCCESS'
export const DOUBAN_BOOK_SEARCH_FAILURE = 'data-fetching/douban-book-search/FAILURE'
export function searchDoubanBooks(query) {
  const CALL_API: CALL_API_OBJ = {
    types: [DOUBAN_BOOK_SEARCH_REQUEST, DOUBAN_BOOK_SEARCH_SUCCESS, DOUBAN_BOOK_SEARCH_FAILURE],
    endpoint: `search?count=5&q=${query}`,
    apiUrl: ApiRoots.DOUBAN_BOOKS,
    schema: Schemas.DOUBAN_BOOK_SEARCH_RESULTS,
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

// export function searchBooks(query) {
//   return {
//     query,
//     CALL_API: {
//       types: ['BOOK_SEARCH_REQUEST', 'BOOK_SEARCH_SUCCESS', 'BOOK_SEARCH_FAILURE'],
//       endpoint: `search?q=${query}`,
//       apiUrl: ApiRoots.LOCAL,
//       schema: Schemas.MATCHED_BOOK_ARRAY
//     }
//   }
// }
