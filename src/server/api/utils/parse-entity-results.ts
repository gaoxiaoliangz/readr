import _ from 'lodash'

/**
 * 查询结果过滤
 * 作为 model 返回结果数据数组方法的 iteratee 使用
 */

type Fields = string[]

export function excludeFields(fieldsToExclude: Fields) {
  return res => {
    return _.omit(res, fieldsToExclude)
  }
}

export function includeFields(fieldsToInclude: Fields) {
  if (fieldsToInclude.length === 0) {
    return res => res
  }
  return res => _.pick(res, fieldsToInclude)
}

export interface Options {
  page?: number
  limit?: number
  order?: 'new' | 'old'
  exclude?: Fields
  fields?: Fields
}

const defaultOptions = {
  page: 1,
  limit: 10,
  order: 'new'
}

export default function parseEntityResults(results, options: Options) {
  let { page, limit, order, exclude, fields } = Object.assign({}, defaultOptions, options)
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
  const pagedResults = {
    _response: results.slice(startIndex, limit + startIndex),
    _pagination: {
      current: page,
      all: Math.ceil(results.length / limit)
    }
  }

  if (exclude) {
    pagedResults._response = pagedResults._response.map(excludeFields(exclude))
  }

  if (fields) {
    pagedResults._response = pagedResults._response.map(includeFields(fields))
  }

  return pagedResults
}
