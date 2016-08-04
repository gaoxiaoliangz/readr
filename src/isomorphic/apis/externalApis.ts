import jsonp from '../utils/jsonp'
import ApiRoots from '../config'

export function fetchDoubanBooks(query) {
  return jsonp(`${ApiRoots.DOUBAN_BOOKS}/search?count=5&q=${query}`, {})
}
