import _ from 'lodash'
import request from '../../utils/network/request'
import { DOUBAN_API_ROOT } from '../../app/constants'

export function searchBook(keyword: string, config: { count?: number } = {}) {
  const { count } = config
  return request(`${DOUBAN_API_ROOT}/book/search?q=${encodeURI(keyword)}&count=${count}`)
}
