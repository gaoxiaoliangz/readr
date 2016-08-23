import _ from 'lodash'
import DataTypes from '../data/types'
import parseTextToHtml from '../utils/parseTextToHtml'
import db from './db'
const embedRef = db.embedRef
const errors: any = require('../errors')
import i18n from '../utils/i18n'
import utils from '../utils'
import validate from './validate'
import modelUtils from './utils'

function dataConvention(schema, data) {
  const arrayTypedFieldKeys = Object.keys(schema.fields).filter(key => schema.fields[key].type
    && schema.fields[key].type.isArray())

  const textTypedFieldKeys = Object.keys(schema.fields).filter(key => schema.fields[key].type
    && schema.fields[key].type.equals(DataTypes.Text))

  // 处理特殊格式
  return _.mapValues(data, (val, key) => {
    if (arrayTypedFieldKeys.indexOf(key) !== -1 && !Array.isArray(val)) {
      return val.split(',')
    }

    // convert Text type to raw and html
    if (textTypedFieldKeys.indexOf(key) !== -1) {
      return {
        html: parseTextToHtml(val),
        raw: val
      }
    }

    return val
  })
}

class Model {
  constructor(schema) {
    // validate schema
    if (!schema.baseTable) {
      throw new Error('schema 格式错误！')
    }

    this.schema = schema
    this.tableName = schema.baseTable
    this.match = {}
  }

  _getAndResetMatch() {
    const match = Object.assign({}, this.match)
    this.match = {}
    return match
  }

  outputEmpty(id) {
    return modelUtils.outputEmptyEntity(this.schema.fields, id)
  }

  findById(_id) {
    this.match = Object.assign({}, { _id })
    return this
  }

  find(match) {
    this.match = Object.assign({}, match)
    return this
  }

  listRaw() {
    const match = this._getAndResetMatch()

    return db.getCollection(this.tableName).then(collection => {
      return collection.find(match).toArray()
    })
  }

  list() {
    return this.listRaw().then(results => {
      return embedRef(results, this.schema)
    })
  }

  // todo: validation
  insert(data) {
    const query = () => {
      let data2 = Object.assign({}, data, {
        _id: Math.random().toFixed(8).substr(2),
        date_created: new Date().toString()
      })

      data2 = dataConvention(this.schema, data2)

      // 检查是否需要确认唯一性
      const dataToCheck = Object.keys(this.schema.fields)
        .filter(key => this.schema.fields[key].unique)
        .map(key => ({
          key,
          value: data[key]
        }))

      // 过滤出和数据库中已存在数据相匹配的输入项
      if (dataToCheck.length !== 0) {
        const checkingResult = Promise.all(dataToCheck.map(data3 => {
          return db.fetchData({ [data3.key]: data3.value }, this.tableName).then(res => {
            if (res.length !== 0) {
              return data3
            }
            return false
          })
        })).then(res => {
          return res.filter(r => r !== false)
        })

        return checkingResult.then(res => {
          if (res.length !== 0) {
            return Promise.reject(new errors.BadRequestError(i18n('errors.schema.unique', res[0].key)))
          }

          return db.getCollection(this.tableName).then(collection => {
            return collection.insert([data2])
          })
        })
      }

      return db.getCollection(this.tableName).then(collection => {
        return collection.insert([data2])
      })
    }

    return utils.reduceTasks([
      validate(data, this.schema),
      query
    ])
  }

  // @multi: boolean
  update(data, updateConfig) {
    let multi = false
    let upsert = false

    const query = () => {
      if (updateConfig) {
        multi = updateConfig.multi || false
        upsert = updateConfig.upsert || false
      }

      // todo: 添加特殊格式处理
      const data2 = Object.assign({}, data, {
        date_updated: new Date().toString()
      })
      const match = this._getAndResetMatch()
      let enableMulti = false

      if (Object.keys(match).length === 0) {
        enableMulti = true
      }
      if (typeof multi !== 'undefined') {
        enableMulti = multi
      }

      return db.getCollection(this.tableName).then(collection => {
        return collection.update(match, { $set: data2 }, {
          upsert: typeof upsert !== undefined ? upsert : false,
          multi: enableMulti
        })
      })
    }

    return utils.reduceTasks([
      validate(data, this.schema, true),
      query
    ])
  }

  destroy() {
    const match = this._getAndResetMatch()

    return db.getCollection(this.tableName).then(collection => {
      return collection.remove(match)
    })
  }
}

export default Model
