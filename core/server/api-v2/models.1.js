'use strict'
const config = require('../config')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')


const SchemaTypes = {
  String: 'String',
  Array: 'Array',
  Number: 'Number',
  ID: 'ID',
  arrayOf: function ArrayOf(type) {
    return `ArrayOf${type}`
  }
}


// for testing
const express = require('express')
const router = new express.Router()

class Model {
  constructor(schema) {
    this.schema = schema
    this.tableName = schema.baseTable
    this.db = MongoClient.connect(config.db.host + config.db.name)
    this.collection = this.db.then(db => {
      return Promise.resolve(db.collection(this.schema.baseTable))
    })
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
          const ids = this.schema.fields[key].type === SchemaTypes.arrayOf(SchemaTypes.ID) ? rawResult[key] : [rawResult[key]]

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
            [field.name]: field.type === SchemaTypes.arrayOf(SchemaTypes.ID) ? dataResults : dataResults[0]
          })
        })
      })
    }

    return Promise.all(
      rawResults.map(rawResult => {
        const filedsWithIds = getRefFieldsWithIds(rawResult)
        // console.log(filedsWithIds)
        
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

  _findAll() {
    return this._find({})
  }

  _findById(id) {
    return this._find({ id })
  }

  _find(match) {
    return this.db.then(db => {
      return db.collection(this.tableName)
        .find(match)
        .toArray()
        .then(res => {          
          return Promise.resolve(res)
        })
    })
  }

  find(match) {
    return this._find(match).then(res => this._embedRef(res))
  }

  findById(id) {
    return this.find({ id }).then(res => {
      if (res.length === 0) {
        return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
      }
      return Promise.resolve(res[0])
    })
  }

  findAll() {
    return this.find({})
  }

  // todo: validation 
  insert(data) {
    return this.collection.then(collection => {
      return collection.insert([data])
    })
  }

  update(match, data) {
    return this.db.then(db => {
      return db.collection(this.tableName).update(match, { $set: data }, {
        upsert: true
      })
    })
  }

  delete(match) {
    return this.collection.then(collection => {
      return collection.remove(match)
    })
  }

  deleteById(id) {
    return this.delete({ id })
  }
}


// for testing
const collection2 = {
  baseTable: 'collections',
  fields: {
    name: {
      type: SchemaTypes.String
    },
    items: {
      type: SchemaTypes.arrayOf(SchemaTypes.ID),
      ref: {
        table: 'books',
        fields: ['title', 'author', 'description']
      }
    },
    creator_id: {
      type: SchemaTypes.ID,
      ref: {
        table: 'users',
        fields: []
      }
    }
  }
}

const model = function model() {
  router.get('/model', (req, res) => {
    const user = new Model(collection2)

    // user._findAll().then(result => {
    //   res.send(result)
    // })

    user.findAll().then(result => {
      res.send(result)
    })

    // user.findById('08361320').then(result => {
    //   res.send(result)
    // }, err => {
    //   res.send(err)
    // })

    // user.insert({ name: 'test' }).then(result => {
    //   res.send(result)
    // })

    // user.deleteById('08361320').then(result => {
    //   res.send(result)
    // })
  })
  return router
}

module.exports = model
