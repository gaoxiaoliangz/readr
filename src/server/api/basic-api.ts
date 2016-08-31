import errors from '../errors'
import i18n from '../utils/i18n'
import _ from 'lodash'
import utils from './utils'
import { Options } from './utils/parse-entity-results'

export const apiMethodNames = {
  find: 'find',
  list: 'list',
  add: 'add',
  update: 'update',
  remove: 'remove',
}

interface ListOptions extends Options {
  q: string
}

class BasicApi {
  // todo
  model: any

  constructor(model) {
    this.model = model
  }

  find(match) {
    return this.list(match).then(res => {
      if (res.length === 0) {
        return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
      }
      return res._response[0]
    })
  }

  list(match = {}, options?: ListOptions) {
    const search = options && options.q ? options.q : ''

    const getSearchableFields = (fields) => {
      return Object.keys(fields)
        .filter(key => Boolean(fields[key].includeInSearch))
        .map(key => key)
    }

    const query = () => {
      let match2 = {}

      if (search !== '') {
        const reg = new RegExp(search)
        const matchArray = getSearchableFields(this.model.schema.fields).map(key => ({
          [key]: reg
        }))
        match2 = { $or: matchArray }
      }

      return this.model.find(match2).list().then(results => {
        return utils.parseEntityResults(results, options)
      })
    }

    const result = query()
    return result
  }

  add(data) {
    return this.model.insert(data)
  }

  update(match, data) {
    // todo: 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
    // 可能会造成 upsert 的数据 fields 不全的问题
    return this.model.find(match).update(data)
  }

  remove(match) {
    return this.model.find(match).destroy()
  }
}

export default BasicApi
