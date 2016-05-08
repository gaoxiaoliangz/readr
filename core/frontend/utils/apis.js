import callApi from './callApi'
import ApiRoots from 'constants/ApiRoots'

export function addCollection(name, ids, description) {
  const data = {
    name,
    ids,
    description
  }
  return callApi({ fullUrl: `${ApiRoots.LOCAL}collections`, method: 'POST', data: data })
}

/**
 * data: name, author, description, cover, content
 */
export function addBook(data) {
  callApi({ fullUrl: `${ApiRoots.LOCAL}books`, method: 'POST', data: data })
}

export default {
  addCollection,
  addBook
}
