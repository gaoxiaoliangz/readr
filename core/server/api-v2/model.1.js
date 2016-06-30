'use strict'
const config = require('../config')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const _ = require('lodash')
// const errors = require('../errors')
// const i18n = require('../utils/i18n')


class Model {
  constructor(schema) {
    // validate schema
    if (!schema.baseTable) {
      throw new Error('schema 格式错误！')
    }

    this.schema = schema
    this.tableName = schema.baseTable
    this.db = MongoClient.connect(config.db.host + config.db.name)
    this.collection = this.db.then(db => {
      return Promise.resolve(db.collection(this.schema.baseTable))
    })
    this.match = {}
  }

  // take array as param
  _embedRef(rawResults) {
    if (rawResults.length === 0) {
      return Promise.resolve([])
    }

    // handle ref
    // ------------------------------------------------------------------------
    // output something like this
    // refFields = [{
    //   name,
    //   type,
    //   ids,
    //   ref: {
    //     table,
    //     fields
    //   }
    // }]
    const getRefFieldsWithIds = (rawResult) => {
      return Object.keys(this.schema.fields)
        .filter(key => {
          return (typeof this.schema.fields[key].ref !== 'undefined')
        })
        .map(key => {
          // 使用了新的 type 定义方式
          let ids = []
          if (this.schema.fields[key].type.isArray()) {
            ids = rawResult[key]
            if (typeof ids === 'string') {
              ids = []
              // throw new Error('Reference id invalid!')
              console.error('Reference id invalid!')
            }
          } else {
            // todo: 检查 id 是否可用？
            ids = [rawResult[key]]
          }
          return Object.assign({}, this.schema.fields[key], {
            name: key,
            ids
          })
        })
    }

    // fetch ref data
    // ------------------------------------------------------------------------
    // output something like this
    // [{
    //   fieldName: fetchedData
    // }]
    const getRefFieldsWithData = (fieldsWithRefIds) => {
      return fieldsWithRefIds.map(field => {
        // 一个 field 里面的 ids 返回的查询结果
        return Promise.all(
          field.ids.map(id => {
            return this.db.then(db => {
              return db.collection(field.ref.table)
                .find({ id })
                .toArray()
                .then(results => {
                  let filteredResult = results[0]
                  try {
                    if (typeof filteredResult === 'object') {
                      // 如果 fields 为空数组则将字段全部无保留输出
                      if (field.ref.fields.length !== 0) {
                        filteredResult = _.pick(filteredResult, field.ref.fields)
                      }
                    } else {
                      filteredResult = {}
                    }
                  } catch (e) {
                    console.error(e)
                  }
                  return Promise.resolve(filteredResult)
                }, err => {
                  console.error(err)
                  Promise.reject(err)
                })
            })
          })
        ).then(dataResults => {
          return Promise.resolve({
            // 使用了新的 type 定义方式
            // todo: 检查可用性
            [field.name]: field.type.isArray() ? dataResults : dataResults[0]
          })
        })
      })
    }

    return Promise.all(
      rawResults.map(rawResult => {
        const filedsWithIds = getRefFieldsWithIds(rawResult)
        
        return Promise.all(getRefFieldsWithData(filedsWithIds))
          .then(newFields => {
            let embedResult = {}
            newFields.forEach(newField => {
              embedResult = Object.assign({}, embedResult, newField)
            })

            return Promise.resolve(Object.assign(rawResult, embedResult))
          })
      })
    )
  }

  _getAndResetMatch() {
    const match = Object.assign({}, this.match)
    this.match = {}
    return match
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

    return this.collection.then(collection => {
      return collection.find(match).toArray()
    })
  }

  list() {
    return this.listRaw().then(results => {
      return this._embedRef(results)
    })
  }

  // todo: validation 
  insert(data) {
    let data2 = Object.assign({}, data, {
      _id: Math.random().toFixed(8).substr(2),
      date_created: new Date().toString()
    })

    const arrayTypedFieldKeys = Object.keys(this.schema.fields).filter(key => this.schema.fields[key].type
      && this.schema.fields[key].type.isArray())

    data2 = _.mapValues(data2, (val, key) => {
      if (arrayTypedFieldKeys.indexOf(key) !== -1) {
        return val.split(',')
      }
      return val
    })
    
    return this.collection.then(collection => {
      return collection.insert([data2])
    })
  }

  update(data, multi) {
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

    return this.collection.then(collection => {
      return collection.update(match, { $set: data2 }, {
        upsert: true,
        multi: enableMulti
      })
    })
  }

  delete() {
    const match = this._getAndResetMatch()

    return this.collection.then(collection => {
      return collection.remove(match)
    })
  }
}

module.exports = Model
