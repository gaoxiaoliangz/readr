import _ from 'lodash'
import DataTypes from '../data/types'
import parseTextToHtml from '../utils/parseTextToHtml'
import db, { embedRef } from './database'
import errors from '../errors'
import i18n from '../utils/i18n'
import utils from '../utils'
import validate from './validate'
import Schema from './schema'

// todo
// function dataConvention(schema, data) {
//   const arrayTypedFieldKeys = Object.keys(schema.fields).filter(key => schema.fields[key].type
//     && schema.fields[key].type.isArray())

//   const textTypedFieldKeys = Object.keys(schema.fields).filter(key => schema.fields[key].type
//     && schema.fields[key].type.equals(DataTypes.Text))

//   // 处理特殊格式
//   return _.mapValues(data, (val, key) => {
//     if (arrayTypedFieldKeys.indexOf(key) !== -1 && !Array.isArray(val)) {
//       return val.split(',')
//     }

//     // convert Text type to raw and html
//     if (textTypedFieldKeys.indexOf(key) !== -1) {
//       return {
//         html: parseTextToHtml(val),
//         raw: val
//       }
//     }

//     return val
//   })
// }

class Model {
  _schema: Schema
  _tableName: string

  constructor(schema: Schema) {
    this._schema = schema
    this._tableName = schema.name
  }

  // todo
  // outputEmpty(id) {
  //   return modelUtils.outputEmptyEntity(this._schema.fields, id)
  // }

  findById(id, raw: boolean) {
    return this.list({ _id: id}, raw)[0]
  }

  list(match, raw?: boolean) {
    const listRaw = listRawMatch => {
      return db.getCollection(this._tableName).then(collection => {
        return collection.find(listRawMatch).toArray()
      }, error => {
        throw error
      })
    }

    const rawResults = listRaw(match)

    if (raw) {
      return rawResults
    } else {
      return rawResults.then(results => {
        return embedRef(results, this._schema)
      }, error => {
        throw error
      })
    }
  }

  add(data) {
    const query = () => {
      let data2 = Object.assign({}, data, {
        _id: Math.random().toFixed(8).substr(2),
        date_created: new Date().toString()
      })

      // data2 = dataConvention(this._schema, data2)

      // 检查是否需要确认唯一性
      const dataToCheck = Object.keys(this._schema.fields)
        .filter(key => this._schema.fields[key].unique)
        .map(key => ({
          key,
          value: data[key]
        }))
        .filter(fileld => {
          return Boolean(fileld.value)
        })

      // 过滤出和数据库中已存在数据相匹配的输入项
      if (dataToCheck.length !== 0) {
        const checkingResult = Promise.all(dataToCheck.map(data3 => {
          return db.getRowByMatch({ [data3.key]: data3.value }, this._tableName).then(res => {
            if (res.length !== 0) {
              return data3
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
            return collection.insert([data2])
          })
        })
      }

      return db.getCollection(this._tableName).then(collection => {
        return collection.insert([data2])
      })
    }

    return utils.reduceTasks([
      validate(data, this._schema),
      query
    ])
  }

  // @multi: boolean
  update(match, data, updateConfig) {
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
      let enableMulti = false

      if (Object.keys(match).length === 0) {
        enableMulti = true
      }
      if (typeof multi !== 'undefined') {
        enableMulti = multi
      }

      return db.getCollection(this._tableName).then(collection => {
        return collection.update(match, { $set: data2 }, {
          upsert: typeof upsert !== undefined ? upsert : false,
          multi: enableMulti
        })
      })
    }

    return utils.reduceTasks([
      validate(data, this._schema, true),
      query
    ])
  }

  remove(match) {
    return db.getCollection(this._tableName).then(collection => {
      return collection.remove(match)
    })
  }
}

export default Model
