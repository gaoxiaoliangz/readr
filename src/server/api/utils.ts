import _ from 'lodash'
import parseUrlencoded from '../../utils/parseUrlencoded'

export const makeResult = (errorOrData, meta?) => {
  const result: ApiResult = {
    data: errorOrData
  }

  if (_.isError(errorOrData)) {
    result.error = true
  }

  if (meta) {
    result.meta = meta
  }

  return result
}

interface EntityPagination {
  current: number
  all: number
}

interface ParseLinksConfig {
  fullPath: string
  query: object
  entityPagination: EntityPagination
}

export function parseLinks(config: ParseLinksConfig) {
  const { fullPath, query, entityPagination } = config
  const { current, all } = entityPagination
  const getLintByPage = page => `${fullPath}?${parseUrlencoded(_.assign({}, query, { page }))}`

  const links = {
    first: getLintByPage(1),
    last: getLintByPage(all),
    prev: getLintByPage(current - 1),
    next: getLintByPage(current + 1),
  }

  if (current > all) {
    links.prev = links.last
  }

  if (all === 1) {
    if (current > 1) {
      return _.omit(links, ['next'])
    }

    if (current === 1) {
      return _.omit(links, ['prev', 'next'])
    }
  }

  if (current <= 1) {
    return _.omit(links, ['prev'])
  }

  if (current >= all) {
    return _.omit(links, ['next'])
  }

  return links
}
