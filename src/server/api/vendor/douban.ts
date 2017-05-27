import _ from 'lodash'
import request from '../../../utils/network/request'

export function searchBook(keyword: string, config: { count?: number } = {}) {
  const { count } = config
  return request(`https://api.douban.com/v2/book/search?q=${encodeURI(keyword)}&count=${count}`)
}
