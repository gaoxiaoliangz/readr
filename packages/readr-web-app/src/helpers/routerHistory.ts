import { browserHistory, hashHistory } from 'react-router'
import { USE_HASH_HISTORY } from '../config'

function routerHistory() {
  const history = USE_HASH_HISTORY ? hashHistory : browserHistory
  return history
}

export default routerHistory
