import _ from 'lodash'
import utils from '../../../utils'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `api/${base}/${type}`
    return acc
  }, {}) as RequestTypes
}

function action(type, payload = {}) {
  return Object.assign({}, {
    type
  }, payload)
}

function createActionEntity(requestTypes: RequestTypes) {
  return {
    request: apiArgs => action(requestTypes.REQUEST, { apiArgs }),
    success: (response, apiArgs) => action(requestTypes.SUCCESS, { response, apiArgs }),
    failure: (error, apiArgs) => action(requestTypes.FAILURE, { error, apiArgs }),
  }
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

export const BOOKS = createRequestTypes('books')
export const books = createActionEntity(BOOKS)
// export const books: ActionEntity = {
//   request: apiArgs => action(BOOKS.REQUEST, { apiArgs }),
//   success: (response, apiArgs) => action(BOOKS.SUCCESS, { response, apiArgs }),
//   failure: (error, apiArgs) => action(BOOKS.FAILURE, { error, apiArgs }),
// }


// export type fetchBooks = {
//   keyword?: string
// }
export type fetchBooks = any
export const FETCH_BOOKS = 'FETCH_BOOKS'
export const fetchBooks = (options?: fetchBooks) => action(FETCH_BOOKS, options)
export const PAGINATE_BOOKS = 'PAGINATE_BOOKS'
export const paginateBooks = (keyword, response) => action(PAGINATE_BOOKS, {
  pagination: {
    name: 'books',
    query: keyword
  },
  response
})

// export const BOOKS_REQUEST = 'data-fetching/books/REQUEST'
// export const BOOKS_SUCCESS = 'data-fetching/books/SUCCESS'
// export const BOOKS_FAILURE = 'data-fetching/books/FAILURE'
// export type fetchBooks = {
//   page?: number
//   merge?: boolean
//   q?: string
// }
// export function fetchBooks(options?: fetchBooks) {
//   const defaultConfig = { page: 1, merge: false }
//   const mergedOptions = Object.assign(defaultConfig, options || {})
//   const { merge, q } = mergedOptions
//   let queryOptions = _.omit(mergedOptions, ['merge'])

//   queryOptions = _.assign({}, queryOptions, {
//     exclude: 'content'
//   })

//   const queryString = utils.parseUrlencoded(queryOptions)
//   const pagination = {
//       name: 'books',
//       merge,
//       query: q
//     }

//   const CALL_API: CALL_API_OBJ = {
//     types: [BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAILURE],
//     endpoint: `books?${queryString}`,
//     schema: schemas.BOOK_ARRAY,
//     pagination
//   }

//   return {
//     cacheKey: pagination,
//     CALL_API
//   }
// }