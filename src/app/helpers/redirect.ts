import { browserHistory, hashHistory } from 'react-router'
import { USE_HASH_HISTORY } from '../config'

export default function redirect(url: string) {
  if (USE_HASH_HISTORY) {
    hashHistory.push(url)
  } else {
    browserHistory.push(url)
  }
}
