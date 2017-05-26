import _ from 'lodash'
import parseUrlencoded from '../../utils/parseUrlencoded'
import dataProvider from '../models/data-provider'

export class APIResult {
  _data: any
  _meta: any

  constructor(data, meta?) {
    this._data = data
    this._meta = meta
  }

  get data() {
    return this._data || {}
  }

  get meta() {
    return this._meta || {}
  }

  toObject() {
    let result: GeneralObject = {
      data: this._data
    }
    if (this._meta) {
      result.meta = this._meta
    }
    return result
  }
}

export const makeResult = (data, meta?) => {
  return new APIResult(data, meta)
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

export const makeBasicAPIMethods = (Model: typeof dataProvider.Author) => {
  return {
    list(options) {
      let page = 1
      if (options.page) {
        page = options.page
      }

      return Model.utils.list(page)
    },
    add(object, options) {
      return Model.utils.save(object)
    },
    del(options) {
      const { id } = options
      return Model.utils.removeById(id)
    },
    find(options) {
      const { id } = options
      return Model.utils.findById(id)
    },
    update(object, options) {
      const { id } = options

      return Model.utils.updateById(id, object)
    }
  }
}

export const queryBoolean = (input) => {
  const consideredFalse = ['0', 'false', 'null', 'undefined']
  if (consideredFalse.indexOf(input) !== -1) {
    return false
  }
  return Boolean(input)
}

export const validateNonNullOptions = (options, nonNullFieldList) => {
  for (const field of nonNullFieldList) {
    if (_.isUndefined(options[field])) {
      return new Error(`Required field ${field} is not provided!`)
    }
  }
  return
}
