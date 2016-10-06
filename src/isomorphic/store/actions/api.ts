import _ from 'lodash'
import utils from '../../utils'
import * as api from '../../services/api'
import schemas from '../../services/schemas'
import { CALL_API_OBJ } from '../middleware/api'
import helpers from '../../helpers'

const DOUBAN_API = helpers.getApiRoots().douban

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

export const BOOK = createRequestTypes('book')
export const book = createActionEntity(BOOK)

export const BOOKS = createRequestTypes('books')
export const books = createActionEntity(BOOKS)

export const USERS = createRequestTypes('users')
export const users = createActionEntity(USERS)

// todo
export type loadBooks = api.FetchBooksOptions
export const LOAD_BOOKS = 'LOAD_BOOKS'
export const loadBooks = (options?: loadBooks) => action(LOAD_BOOKS, { options })

export interface loadBook {
  (id: string): any
}
export const LOAD_BOOK = 'LOAD_BOOK'
export const loadBook: loadBook = id => action(LOAD_BOOK, { id })

export interface loadUsers {
  (options?: api.FetchUsersOptions): any
}
export const LOAD_USERS = 'LOAD_USERS'
export const loadUsers: loadUsers = (options) => action(LOAD_USERS, { options })


/**
 * legacy call api actions
 */
export const AUTHORS = createRequestTypes('authors')
export function fetchAuthors(options) {
  const CALL_API: CALL_API_OBJ = {
    types: [AUTHORS.REQUEST, AUTHORS.SUCCESS, AUTHORS.FAILURE],
    endpoint: `authors?${utils.parseUrlencoded(options)}`,
    schema: schemas.AUTHOR_ARRAY,
    pagination: {
      name: 'authors',
      q: options.q
    }
  }

  return { CALL_API }
}

export const COLLECTIONS = createRequestTypes('collections')
export function fetchCollections(flowType: 'newest' | 'hot' = 'newest') {
  return {
    flowType,
    CALL_API: {
      types: [COLLECTIONS.REQUEST, COLLECTIONS.SUCCESS, COLLECTIONS.FAILURE],
      endpoint: `collections`,
      schema: schemas.COLLECTION_ARRAY
    }
  }
}

export const COLLECTION = createRequestTypes('collection')
export function fetchCollection(collectionId) {
  return {
    collectionId,
    CALL_API: {
      types: [COLLECTION.REQUEST, COLLECTION.SUCCESS, COLLECTION.FAILURE],
      endpoint: `collections/${collectionId}`,
      schema: schemas.COLLECTION
    }
  }
}

export const DOUBAN_BOOKS = createRequestTypes('douban-books')
export function searchDoubanBooks(q) {
  const CALL_API: CALL_API_OBJ = {
    types: [DOUBAN_BOOKS.REQUEST, DOUBAN_BOOKS.SUCCESS, DOUBAN_BOOKS.FAILURE],
    endpoint: `book/search?count=10&q=${q}`,
    apiUrl: DOUBAN_API,
    schema: schemas.DOUBAN_BOOK_SEARCH_RESULTS,
    options: { useJsonp: true },
    pagination: {
      name: 'doubanBooks',
      q
    }
  }

  return { q, CALL_API }
}

export const PROFILE = createRequestTypes('profile')
export function fetchProfile() {
  const CALL_API: CALL_API_OBJ = {
    types: [PROFILE.REQUEST, PROFILE.SUCCESS, PROFILE.FAILURE],
    endpoint: `user/profile`,
    schema: schemas.PROFILE
  }
  return { CALL_API }
}

export const AUTH = createRequestTypes('auth')
export function userAuth(userSession?): Object {
  // 服务端渲染 session
  if (userSession) {
    return {
      SERVER_STORE: {
        body: {
          response: userSession,
          type: AUTH.SUCCESS
        }
      }
    }
  }

  return {
    CALL_API: {
      types: [AUTH.REQUEST, AUTH.SUCCESS, AUTH.FAILURE],
      endpoint: 'auth'
    }
  }
}

// payload
export function fetchShelf() {
  return {
    payload: 'bookShelf',
    CALL_API: {
      types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE'],
      endpoint: `user/books/shelf`,
    }
  }
}

export function fetchProgress(bookId) {
  return {
    bookId,
    payload: 'progress',
    CALL_API: {
      types: ['PROGRESS_REQUEST', 'PROGRESS_SUCCESS', 'PROGRESS_FAILURE'],
      endpoint: `user/books/${bookId}/progress`,
    }
  }
}
