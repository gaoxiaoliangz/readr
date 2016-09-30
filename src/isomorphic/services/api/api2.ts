import callApi from '../utils/callApi'
import helpers from '../../helpers'

const { local: apiRoot } = helpers.getApiRoots()

export function addCollection(data: {
  name: string
  items: string
  description: string
}) {
  return callApi(`${apiRoot}/collections`, { method: 'POST', data: data })
}

/**
 * data: name, author, description, cover, content
 * todo
 */
export function addBook(data) {
  return callApi(`${apiRoot}/books`, { method: 'POST', data: data })
}

/**
 * data: name, slug, description
 * todo
 */
export function addAuthor(data) {
  return callApi(`${apiRoot}/authors`, { method: 'POST', data: data })
}

export function searchAuthors(query) {
  return callApi(`${apiRoot}/authors?q=${query}`)
}

export function searchBooks(query) {
  return callApi(`${apiRoot}/books?q=${query}`)
}

/**
 * data: pageNo, pageSum, percentage
 * todo
 */
export type setProgress = {
  percentage: number
}
export function setProgress(bookId, data: setProgress) {
  callApi(`${apiRoot}/user/books/${bookId}/progress`, { method: 'PUT', data })
}

export function deleteBook(id) {
  return callApi(`${apiRoot}/books/${id}`, {
    method: 'DELETE'
  })
}

export function logout() {
  return callApi(`${apiRoot}/auth/revoke`, {
    method: 'PUT'
  })
}
