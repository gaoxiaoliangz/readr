import { API_PATH } from '../config'

export default function getAPIRoot() {
  if (!__BROWSER__) {
    return `http://localhost:${process.env.PORT}${API_PATH}`
  }
  return API_PATH
}
