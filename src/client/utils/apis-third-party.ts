import jsonp from './jsonp'
import ApiRoots from '../api-config/api-roots'

export function fetchDoubanBooks(query) {
  return jsonp(`${ApiRoots.DOUBAN_BOOKS}/search?count=5&q=${query}`, {})
}
