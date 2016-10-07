import callApi from '../utils/callApi'
import helpers from '../../helpers'
import normalizeResponse from '../utils/normalizeResponse'
import schemas from '../schemas'
import utils from '../../utils'
import _ from 'lodash'

const { local: apiRoot, douban: doubanApiRoot } = helpers.getApiRoots()

interface GeneralApiOptions {
  q?: string
  page?: number
}

/**
 * general helper functions
 */
const parseEndpointWithOptions = (endpoint, options) => {
  if (typeof options === 'string') {
    return options
  } else {
    const queryString = utils.parseUrlencoded(options)
    return `${endpoint}?${queryString}`
  }
}

export function fetchNormalized(endpoint, schema, fetchOptions = {}) {
  if (endpoint.indexOf('http://') !== -1) {
    return normalizeResponse(callApi(endpoint, fetchOptions), schema)
  }

  return normalizeResponse(callApi(`${apiRoot}/${endpoint}`, fetchOptions), schema)
}


/**
 * specific api services
 */
export type FetchBookOptions = {
  withContent?: boolean
}
export const fetchBook = (id, options: FetchBookOptions = {}) => {
  const {withContent} = options
  const apiOptions = !withContent
    ? {
      exclude: 'content'
    }
    : {}
  return fetchNormalized(
    parseEndpointWithOptions(`books/${id}`, apiOptions),
    schemas.BOOK
  )
}

export interface FetchBooksOptions extends GeneralApiOptions {
  withContent?: boolean
}
export const fetchBooks = (options: FetchBooksOptions = {}) => {
  const {withContent} = options
  let apiOptions = !withContent
    ? {
      exclude: 'content'
    }
    : {}
  apiOptions = _.assign({}, _.omit(options, ['withContent']), apiOptions)
  return fetchNormalized(
    parseEndpointWithOptions('books', apiOptions)
    , schemas.BOOK_ARRAY
  )
}

export type FetchUsersOptions = GeneralApiOptions
export const fetchUsers = (options?: FetchUsersOptions) => {
  return fetchNormalized(
    parseEndpointWithOptions('users', options)
    , schemas.USER_ARRAY
  )
}

// external apis
export const fetchDoubanBooks = keyword => callApi(`${doubanApiRoot}/book/search?count=10&q=${keyword}`, {
  useJsonp: true
})

// auth
export type UserLoginOptions = {
  login: string
  password: string
}
export const userLogin = (data: UserLoginOptions) => callApi(`${apiRoot}/auth`, {
  method: 'POST',
  data
})

export type UserSignupOptions = {
  username: string
  email: string
  password: string
}
export const userSignup = (data: UserSignupOptions) => callApi(`${apiRoot}/auth`, {
  method: 'POST',
  data
})

export function logout() {
  return callApi(`${apiRoot}/auth/revoke`, {
    method: 'PUT'
  })
}

// data posting
export interface AddCollectionData {
  name: string
  items: string
  description: string
}
export function addCollection(data: AddCollectionData) {
  return callApi(`${apiRoot}/collections`, { method: 'POST', data })
}

export interface AddBookData {
  name: string
  author?: string
  description?: string
  cover?: string
  content: string
}
export function addBook(data: AddBookData) {
  return callApi(`${apiRoot}/books`, { method: 'POST', data })
}

export interface AddAuthorData {
  name: string
  slug?: string
  description?: string
}
export function addAuthor(data: AddAuthorData) {
  return callApi(`${apiRoot}/authors`, { method: 'POST', data })
}

export type SetProgressData = {
  percentage: number
}
export function setProgress(bookId, data: SetProgressData) {
  callApi(`${apiRoot}/user/books/${bookId}/progress`, { method: 'PUT', data })
}

export function deleteBook(id) {
  return callApi(`${apiRoot}/books/${id}`, {
    method: 'DELETE'
  })
}
