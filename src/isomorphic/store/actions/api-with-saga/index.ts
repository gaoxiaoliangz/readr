import _ from 'lodash'
import utils from '../../../utils'
import * as api from '../../../services/api'

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
