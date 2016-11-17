import _ from 'lodash'
import utils from '../../utils'
import * as api from '../../services/api'
import schemas from '../../services/schemas'
import { CALL_API_OBJ } from '../middleware/api'
import { DOUBAN_API_ROOT } from '../../constants'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const LOAD_CACHE = 'LOAD_CACHE'

/**
 * helpers
 */
function action(type, payload = {}) {
  return Object.assign({}, {
    type
  }, payload)
}

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE, LOAD_CACHE].reduce((acc, type) => {
    acc[type] = `api/${base}/${type}`
    return acc
  }, {}) as RequestTypes
}

function createActionEntity(requestTypes: RequestTypes) {
  return {
    request: (payload?: Object) => action(requestTypes.REQUEST, payload),
    success: (response?, payload?: Object) => action(requestTypes.SUCCESS, Object.assign({}, { response }, payload )),
    // todo
    loadCache: (response, payload: Object) => action(requestTypes.SUCCESS, Object.assign({}, { response }, payload, { loadedFromCache: true } )),
    failure: (error, payload?: Object) => action(requestTypes.FAILURE, Object.assign({}, { error }, payload )),
  }
}

/**
 * action types & actions
 */
export const BOOK = createRequestTypes('book')
export const book = createActionEntity(BOOK)
export interface loadBook {
  (id: string): any
}
export const LOAD_BOOK = 'LOAD_BOOK'
export const loadBook: loadBook = id => action(LOAD_BOOK, { id })


export const BOOK_CONTENT = createRequestTypes('book-content')
export const bookContent = createActionEntity(BOOK_CONTENT)
export interface loadBookContent {
  (id: string): any
}
export const LOAD_BOOK_CONTENT = 'LOAD_BOOK_CONTENT'
export const loadBookContent: loadBookContent = id => action(LOAD_BOOK_CONTENT, { id })


export const BOOKS = createRequestTypes('books')
export const books = createActionEntity(BOOKS)
export interface loadBooks {
  (options?: api.FetchBooksOptions, key?: string): any
}
export const LOAD_BOOKS = 'LOAD_BOOKS'
export const loadBooks: loadBooks = (options?, key?) => action(LOAD_BOOKS, { options, key })


export const USERS = createRequestTypes('users')
export const users = createActionEntity(USERS)
export interface loadUsers {
  (options?: api.FetchUsersOptions): any
}
export const LOAD_USERS = 'LOAD_USERS'
export const loadUsers: loadUsers = (options?) => action(LOAD_USERS, { options })


export const LOGOUT = createRequestTypes('revoke')
export const logout = createActionEntity(LOGOUT)
export const USER_LOGOUT = 'USER_LOGOUT'
export interface userLogout {
  (): any
}
export const userLogout: userLogout = () => action(USER_LOGOUT)

// define load actions handled in sagas
export const LOAD_ACTIONS = [LOAD_BOOK, LOAD_BOOK_CONTENT, LOAD_BOOKS, LOAD_USERS]

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
    apiUrl: DOUBAN_API_ROOT,
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

export const SHELF = createRequestTypes('shelf')
export function fetchShelf() {
  const CALL_API: CALL_API_OBJ = {
    types: [SHELF.REQUEST, SHELF.SUCCESS, SHELF.FAILURE],
    endpoint: `user/books/shelf`,
    schema: schemas.SHELF_BOOK_ARRAY,
    pagination: {
      name: 'bookShelves'
    }
  }
  return { CALL_API }
}

export const BOOK_PROGRESS = createRequestTypes('book-progress')
export function fetchProgress(bookId) {
  const CALL_API: CALL_API_OBJ = {
    types: [BOOK_PROGRESS.REQUEST, BOOK_PROGRESS.SUCCESS, BOOK_PROGRESS.FAILURE],
    endpoint: `user/books/${bookId}/progress`,
    schema: schemas.BOOK_PROGRESS
  }

  return { bookId, CALL_API }
}
