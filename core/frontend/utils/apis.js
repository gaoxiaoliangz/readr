import callApi from './callApi'
import ApiRoots from 'constants/ApiRoots'


/**
 * data: name, content, description
 */
export function addCollection(data) {
  return callApi({ fullUrl: `${ApiRoots.LOCAL}collections`, method: 'POST', data: data })
}

/**
 * data: name, author, description, cover, content
 */
export function addBook(data) {
  return callApi({ fullUrl: `${ApiRoots.LOCAL}books`, method: 'POST', data: data })
}

/**
 * data: name, slug, description
 */
export function addAuthor(data) {
  return callApi({ fullUrl: `${ApiRoots.LOCAL}authors`, method: 'POST', data: data })
}

export function searchAuthors(query) {
  return callApi({ fullUrl: `${ApiRoots.LOCAL}authors?q=${query}` })
}

export default {
  addCollection,
  addBook,
  addAuthor,
  searchAuthors
}
