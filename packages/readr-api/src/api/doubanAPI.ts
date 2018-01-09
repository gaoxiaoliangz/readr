import _ from 'lodash'
import request from '../utils/network/request'

export const DOUBAN_API_ROOT = 'https://api.douban.com/v2'

export function searchBook(keyword: string, config: { count?: number } = {}) {
  const { count } = config
  const url = `${DOUBAN_API_ROOT}/book/search?q=${encodeURI(keyword)}&count=${count || 5}`

  return request(url, {
    cookie: false,
    dataType: 'urlencoded'
  })
}
