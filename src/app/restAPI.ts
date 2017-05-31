import _ from 'lodash'
import helpers from './helpers'
import { DOUBAN_API_ROOT } from './../constants'
import request from './../utils/network/request'

const API_ROOT = helpers.getApiRoot()

// resolve endpoint
const re = endpoint => {
  return `${API_ROOT}/${endpoint}`
}

export const auth = (cookie?) => request(re('auth'), {
  cookie
})

export type UserLoginOptions = {
  login: string
  password: string
}
export const basicAuth = (data: UserLoginOptions) => request(re('auth'), {
  method: 'POST',
  data
})

export type UserSignupOptions = {
  username: string
  email: string
  password: string
}
export const userSignup = (data: UserSignupOptions) => request(`${API_ROOT}/users`, {
  method: 'POST',
  data
})

export const logout = () => {
  return request(`${API_ROOT}/auth/revoke`, {
    method: 'PUT'
  })
}

export interface AddCollectionData {
  name: string
  items: string
  description: string
}
export function addCollection(data: AddCollectionData) {
  return request(`${API_ROOT}/collections`, { method: 'POST', data })
}

export interface AddBookData {
  title: string
  authors?: string
  description?: string
  cover?: string
}
export function addBook(data: AddBookData) {
  return request(`${API_ROOT}/books`, { method: 'POST', data })
}

export interface BookMeta {
  title?: string
  authors?: string
  description?: string
  cover?: string
}
export function editBookMeta(bookId: string, data: BookMeta) {
  return request(`${API_ROOT}/books/${bookId}`, { method: 'PUT', data })
}

export interface AddAuthorData {
  name: string
  slug?: string
  description?: string
}
export function addAuthor(data: AddAuthorData) {
  return request(`${API_ROOT}/authors`, { method: 'POST', data })
}

export type SetProgressData = {
  percentage: number
}
export function setProgress(bookId, data: SetProgressData) {
  request(`${API_ROOT}/user/books/${bookId}/progress`, { method: 'PUT', data })
}

export function deleteBook(id) {
  return request(`${API_ROOT}/books/${id}`, {
    method: 'DELETE'
  })
}

// external apis
export const fetchDoubanBooks = keyword => request(`${DOUBAN_API_ROOT}/book/search?count=10&q=${keyword}`, {
  useJsonp: true
})
