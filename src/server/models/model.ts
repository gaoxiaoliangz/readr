import _ from 'lodash'
import db, { embedRef } from './database'
import errors from '../errors'
import i18n from '../utils/i18n'
import utils from '../utils'
import validate from './validate'
import Schema from './schema'
import outputEmptyEntity from './output-empty-entity'
import paginate from './paginate'
import { notFoundIn } from '../helpers'

interface ListRawOptions {
  filter?: (entity, index: number) => boolean
  mapping?: (entity, index: number) => any
  query?: Object
}

interface ListOptions {
  raw?: boolean
  disablePagination?: boolean
  page?: number
  filter?: (entity, index: number) => boolean
  mapping?: (entity, index: number) => any
  query?: Object
}

type Match = string | Object

class Model {
  _schema: Schema
  _tableName: string

  static parseQuery(idOrQuery: Match) {
    if (typeof idOrQuery === 'undefined') {
      throw new Error('Param idOrQuery is undefined!')
    }

    return typeof idOrQuery === 'string'
      ? { _id: idOrQuery }
      : idOrQuery
  }

  constructor(schema: Schema) {
    this._schema = schema
    this._tableName = schema.name
  }

  outputEmpty(id) {
    return outputEmptyEntity(this._schema.fields, id)
  }

  findOne(idOrQuery: Match, raw?: boolean) {
    const query = Model.parseQuery(idOrQuery)

    return this.list({ raw, disablePagination: true, query }).then(result => {
      const entity = result[0]

      if (!entity) {
        return Promise.reject(notFoundIn(this._schema._baseTable))
      }

      return entity
    })
  }

  list(options: ListOptions = {}) {
    const { raw, page, disablePagination, filter, mapping, query } = options

    const doQuery = () => {
      const listRaw = listRawQuery => {
        return db.getCollection(this._tableName).then(collection => {
          return collection.find(listRawQuery).toArray()
        })
      }

      const rawResults = listRaw(query || {})

      if (raw) {
        return rawResults
      } else {
        return rawResults.then(results => {
          return embedRef(results, this._schema)
        })
      }
    }

    return doQuery().then(entities => {
      const modifiedEntities = entities
        .filter(filter || (() => true))
        .map(mapping || (entity => entity))

      if (!disablePagination) {
        return paginate(modifiedEntities, {
          page: page || 1
        })
      }

      return modifiedEntities
    })
  }

  listRaw(options: ListRawOptions = {}): Promise<any[]> {
    const { filter, mapping, query } = options

    return this.list({
      disablePagination: true,
      raw: true,
      filter,
      mapping,
      query: query || {}
    })
  }

  add(data) {
    const query = () => {
      let dataWithID = Object.assign({}, data, {
        _id: Math.random().toFixed(8).substr(2),
        date_created: new Date().toString()
      })

      // 检查是否需要确认唯一性
      const dataToCheck = this._schema.fields
        .filter(field => Boolean(field.unique))
        .map(field => ({
          key: field.name,
          value: data[field.name]
        }))
        .filter(fileld => {
          return Boolean(fileld.value)
        })

      // 过滤出和数据库中已存在数据相匹配的输入项
      if (dataToCheck.length !== 0) {
        const checkingResult = Promise.all(dataToCheck.map(dataItem => {
          return db.getRowByMatch({ [dataItem.key]: dataItem.value }, this._tableName).then(res => {
            if (res.length !== 0) {
              return dataItem
            }
            return false as any
          })
        })).then(res => {
          return res.filter(r => r !== false)
        })

        return checkingResult.then(res => {
          if (res.length !== 0) {
            return Promise.reject(new errors.BadRequestError(i18n('errors.schema.unique', res[0].key)))
          }

          return db.getCollection(this._tableName).then(collection => {
            return collection.insert([dataWithID])
          })
        })
      }

      return db.getCollection(this._tableName).then(collection => {
        return collection.insert([dataWithID])
      })
    }

    return utils.reduceTasks([
      validate(data, this._schema),
      query
    ]) as any
  }

  update(idOrQuery: Match, data, updateConfig: {
    multi?: boolean
    upsert?: boolean
  } = {}) {
    const { multi, upsert } = updateConfig
    const query = Model.parseQuery(idOrQuery)

    const doQuery = () => {
      const data2 = Object.assign({}, data, {
        date_updated: new Date().toString()
      })

      const doIt = () => {
        return db.getCollection(this._tableName).then(collection => {
          return collection.update(query, { $set: data2 }, {
            upsert: Boolean(upsert),
            multi: Boolean(multi)
          })
        })
      }

      if (!upsert) {
        return this.findOne(idOrQuery, true).then(result => {
          return doIt()
        })
      }

      return doIt()
    }

    return utils.reduceTasks([
      validate(data, this._schema, true),
      doQuery
    ])
  }

  remove(idOrQuery: Match) {
    const query = Model.parseQuery(idOrQuery)

    return db.getCollection(this._tableName).then(collection => {
      return collection.remove(query)
    })
  }
}

export default Model
