import _ from 'lodash'
import utils from '../../../utils'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export type RequestTypes = {
  REQUEST: string
  SUCCESS: string
  FAILURE: string
}
function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `api/${base}/${type}`
    return acc
  }, {}) as RequestTypes
}

export const DOUBAN_BOOKS = createRequestTypes('douban-books')
export const fetchDoubanBooks = keyword => {
  return {
    type: DOUBAN_BOOKS.REQUEST,
    payload: {
      keyword
    }
  }
}


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