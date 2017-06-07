import { hashHistory, browserHistory } from 'react-router'

export default function redirect(url: string) {
  if (APP_ENV.SERVER_SIDE_RENDERING) {
    browserHistory.push(url)
  } else {
    hashHistory.push(url)
  }
}
