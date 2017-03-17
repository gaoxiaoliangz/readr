import _ from 'lodash'
import utils from '../utils'
import * as webAPI from '../webAPI/apifns'
import schemas from '../schemas'
import { CALL_API_OBJ } from '../middleware/api'
import { DOUBAN_API_ROOT } from '../constants'
import { createActionEntity, action, createTriggerAction } from './utils'
import * as ActionTypes from '../constants/actionTypes'

export const removeEntity = (name: string, id: string) =>
  ({ type: ActionTypes.REMOVE_ENTITY, name, id })

// export const book = createActionEntity(ActionTypes.BOOK)
// export const loadBook = (id: string) => action(ActionTypes.LOAD_BOOK, { id })

// export const bookContent = createActionEntity(ActionTypes.BOOK_CONTENT)
// export const loadBookContent = (id: string) => action(ActionTypes.LOAD_BOOK_CONTENT, { id })

// export const books = createActionEntity(ActionTypes.BOOKS)
// export const loadBooks = (options?: webAPI.FetchBooksOptions, key?: string) =>
//   action(ActionTypes.LOAD_BOOKS, { options, key })

export const users = createActionEntity(ActionTypes.USERS)
export const loadUsers = (options?: webAPI.FetchUsersOptions) =>
  action(ActionTypes.LOAD_USERS, { options })

export const logout = createActionEntity(ActionTypes.LOGOUT)
export const userLogout = () => action(ActionTypes.USER_LOGOUT)

export const progress = createActionEntity(ActionTypes.BOOK_PROGRESS)
export const loadBookProgress = (id: string) =>
  action(ActionTypes.LOAD_BOOK_PROGRESS, { id })


// define load actions handled in sagas
// export const LOAD_ACTIONS = [ActionTypes.LOAD_BOOK, ActionTypes.LOAD_BOOK_CONTENT, ActionTypes.LOAD_BOOKS, ActionTypes.LOAD_USERS]


/**
 * legacy call api actions
 */
export function fetchAuthors(options) {
  const CALL_API: CALL_API_OBJ = {
    types: [ActionTypes.AUTHORS.REQUEST, ActionTypes.AUTHORS.SUCCESS, ActionTypes.AUTHORS.FAILURE],
    endpoint: `authors?${utils.parseUrlencoded(options)}`,
    schema: schemas.AUTHOR_ARRAY,
    pagination: {
      name: 'authors',
      q: options.q
    }
  }

  return { CALL_API }
}

export function fetchCollections(flowType: 'newest' | 'hot' = 'newest') {
  return {
    flowType,
    CALL_API: {
      types: [ActionTypes.COLLECTIONS.REQUEST, ActionTypes.COLLECTIONS.SUCCESS, ActionTypes.COLLECTIONS.FAILURE],
      endpoint: `collections`,
      schema: schemas.COLLECTION_ARRAY
    }
  }
}

export function fetchCollection(collectionId) {
  return {
    collectionId,
    CALL_API: {
      types: [ActionTypes.COLLECTION.REQUEST, ActionTypes.COLLECTION.SUCCESS, ActionTypes.COLLECTION.FAILURE],
      endpoint: `collections/${collectionId}`,
      schema: schemas.COLLECTION
    }
  }
}

export function searchDoubanBooks(q) {
  const CALL_API: CALL_API_OBJ = {
    types: [ActionTypes.DOUBAN_BOOKS.REQUEST, ActionTypes.DOUBAN_BOOKS.SUCCESS, ActionTypes.DOUBAN_BOOKS.FAILURE],
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

export function fetchProfile() {
  const CALL_API: CALL_API_OBJ = {
    types: [ActionTypes.PROFILE.REQUEST, ActionTypes.PROFILE.SUCCESS, ActionTypes.PROFILE.FAILURE],
    endpoint: `user/profile`,
    schema: schemas.PROFILE
  }
  return { CALL_API }
}

export function fetchShelf() {
  const CALL_API: CALL_API_OBJ = {
    types: [ActionTypes.SHELF.REQUEST, ActionTypes.SHELF.SUCCESS, ActionTypes.SHELF.FAILURE],
    endpoint: `user/books/shelf`,
    schema: schemas.SHELF_BOOK_ARRAY,
    pagination: {
      name: 'bookShelves'
    }
  }
  return { CALL_API }
}

// load actions
export const loadBooks = (page = 1, q?) => {
  return createTriggerAction(ActionTypes.BOOKS, {
    request: {
      url: 'books',
      query: {
        page,
        q
      }
    },
    schema: schemas.BOOK_ARRAY
  })
}

export const loadBookInfo = (id) => {
  return createTriggerAction(ActionTypes.BOOK_INFO, {
    request: {
      url: `books/${id}`
    },
    targetId: id,
    schema: schemas.BOOK
  })
}

export const loadBookContent = (id) => {
  return createTriggerAction(ActionTypes.BOOK_CONTENT, {
    request: {
      url: `books/${id}/content`
    },
    targetId: id,
    schema: schemas.BOOK_CONTENT
  })
}

export const loadSession = () => {
  return createTriggerAction(ActionTypes.SESSION, {
    request: {
      url: 'auth'
    }
  })
}
