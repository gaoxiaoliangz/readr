import isServerRoutingEnabled from './isServerRoutingEnabled'
import { hashHistory, browserHistory } from 'react-router'

export default function redirect(url: string) {
  if (isServerRoutingEnabled()) {
    browserHistory.push(url)
  } else {
    hashHistory.push(url)
  }
}
