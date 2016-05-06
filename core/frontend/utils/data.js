import callApi from './callApi'
import ApiRoots from 'constants/ApiRoots'

export function addBookList(name, books, description) {
  const data = {
    name,
    books,
    description
  }
  return callApi({ fullUrl: `${ApiRoots.LOCAL}booklist`, method: 'POST', data: data })
}
