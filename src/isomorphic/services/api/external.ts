import jsonp from '../utils/jsonp'
import helpers from '../../helpers'

const { douban: doubanApiRoot } = helpers.getApiRoots()

export function fetchDoubanBooks(query) {
  return jsonp(`${doubanApiRoot}/book/search?count=5&q=${query}`)
}
