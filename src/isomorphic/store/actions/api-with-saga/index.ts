import _ from 'lodash'
import utils from '../../../utils'
import * as api from '../../../services/api'
import schemas from '../../../services/schemas'
import { CALL_API_OBJ } from '../../middleware/api'

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

export const USERS = createRequestTypes('users')
export const users = createActionEntity(USERS)


export type loadBooks = api.FetchBooksOptions
export const LOAD_BOOKS = 'LOAD_BOOKS'
export const loadBooks = (options?: loadBooks) => action(LOAD_BOOKS, {options})

export interface loadUsers {
  (options?: api.FetchUsersOptions): any
}
export const LOAD_USERS = 'LOAD_USERS'
export const loadUsers: loadUsers = (options) => action(LOAD_USERS, {options})


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
      query: options.q
    }
  }

  return {
    CALL_API
  }
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
