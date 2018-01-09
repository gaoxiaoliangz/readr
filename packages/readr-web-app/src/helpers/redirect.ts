import { browserHistory, hashHistory } from 'react-router'
import { USE_HASH_HISTORY } from '../config'

export function routerHistory() {
  const history = USE_HASH_HISTORY ? hashHistory : browserHistory
  return history
}

export default function redirect(url: string) {
  if (USE_HASH_HISTORY) {
    hashHistory.push(url)
  } else {
    browserHistory.push(url)
  }
}
