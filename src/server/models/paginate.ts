import _ from 'lodash'

export type Fields = string[]

export interface ListingOptions {
  page?: number
  limit?: number
  order?: 'new' | 'old'
}

const defaultOptions = {
  page: 1,
  limit: 10,
  order: 'new'
}

export default function paginate(results, options?: ListingOptions) {
  let { page, limit, order } = Object.assign({}, defaultOptions, options)
  // query 里面传过来的都是 string
  page = parseInt(page as any, 10)
  // 如果 page 小于 0 则当做 1 来处理，大于最大页面则不管
  // 此逻辑参照 GitHub api
  page = page <= 0 ? 1 : page
  limit = parseInt(limit as any, 10)

  if (order === 'new') {
    results.reverse()
  }

  const startIndex = (page - 1) * limit

  return {
    entities: results.slice(startIndex, limit + startIndex),
    _pagination: {
      current: page,
      all: Math.ceil(results.length / limit) || 1
    }
  }
}
