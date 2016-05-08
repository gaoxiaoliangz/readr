import callApi from './callApi'
import ApiRoots from 'constants/ApiRoots'

export function addBookList(name, ids, description) {
  const data = {
    name,
    ids,
    description
  }
  return callApi({ fullUrl: `${ApiRoots.LOCAL}collections`, method: 'POST', data: data })
}
