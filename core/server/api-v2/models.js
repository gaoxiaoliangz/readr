'use strict'
const config = require('../config')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
// const errors = require('../errors')
// const i18n = require('../utils/i18n')


const SchemaTypes = {
  String: 'string',
  Array: 'array',
  Number: 'number',
  ID: 'id'
}


// for testing
const express = require('express')
const router = new express.Router()




class Model {
  constructor(schema) {
    this.schema = schema
    this.tableName = schema.baseTable
    this.db = MongoClient.connect(config.db.host + config.db.name)
  }

  // take array as param
  _embedRef(rawResults) {
    if (rawResults.length === 0) {
      return Promise.resolve([])
    }

    // handle ref
    // return something like this
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
          const ids = this.schema.fields[key].type === SchemaTypes.Array ? rawResult[key] : [rawResult[key]]
          // console.log(ids)
          return Object.assign({}, this.schema.fields[key], {
            name: key,
            ids
          })
        })
    }

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
                  try {
                    // todo
                    // filter
                    if (typeof results[0] === 'object' && results[0].hasOwnProperty('content')) {
                      delete results[0].content
                    }
                  } catch (e) {
                    console.error(e)
                  }
                  return Promise.resolve(results[0])
                }, err => {
                  console.error(err)
                  Promise.reject(err)
                })
            })
          })
        ).then(dataResults => {
          return Promise.resolve({
            [field.name]: field.type === SchemaTypes.Array ? dataResults : dataResults[0]
          })
        })
      })
    }

    return Promise.all(
      rawResults.map(rawResult => {
        return Promise.all(getRefFieldsWithData(getRefFieldsWithIds(rawResult)))
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

  findAll() {
    return this._findAll().then(res => this._embedRef(res))
  }

  insert(data) {

  }

  update(match, data) {
    return this.db.then(db => {
      return db.collection(this.tableName).update(match, { $set: data }, {
        upsert: true
      })
    })
  }

  delete() {
    
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
      type: SchemaTypes.Array,
      ref: {
        table: 'books',
        fields: ['name', 'authors', 'description']
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

    user.findAll().then(result => {
      res.send(result)
    })
  })
  return router
}

module.exports = model
