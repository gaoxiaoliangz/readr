/**
 * 查询结果过滤
 * 作为 model 返回结果数据数组方法的 iteratee 使用
 */

type Fields = string[]

// for map
export function excludeFields(fieldsToExclude: Fields) {
  return res => _.omit(res, fieldsToExclude)
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

export default function parseEntityResults(results, options: Options = {
  page: 1,
  limit: 3,
  order: 'new'
}) {
  const { page, limit, order, exclude, fields } = options

  if (order === 'new') {
    results.reverse()
  }

  const startIndex = (page - 1) * limit
  const pagedResults = {
    _response: results.slice(startIndex, limit + startIndex),
    _pagination: {
      current: page,
      // todo: 可能有 bug
      all: parseInt((results.length / limit) as any, 10) + 1
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
