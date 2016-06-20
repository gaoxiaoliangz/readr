'use strict'
const Promise = require('bluebird')
const errors = require('../errors')
const models = require('../api-v1/models')
const i18n = require('../utils/i18n')

const defaultConfig = {}

class ApiMethods {
  // config: {}
  constructor(schema, config) {
    this.config = Object.assign(
      {},
      defaultConfig,
      (typeof config === 'undefined' ? {} : config)
    )
    this.schema = schema    
  }

  add(data) {
    return models.create(this.schema.table, data.object).then(result => {
      return Promise.resolve(result)
    }, error => {
      return Promise.reject(error)
    })
  }

  browse(data) {
    return models.read(this.schema.table, {}).then(result => {
      return Promise.resolve(result)
    })
  }

  edit(data) {
    return models.update(this.schema.table, { id: data.options.id }, data.object, true).then(result => {
      return Promise.resolve(result)
    }, error => {
      return Promise.reject(error)
    })
  }

  delete(data) {
    return models.delete(this.schema.table, { id: data.options.id }).then(result => {
      return Promise.resolve(result)
    }, error => {
      return Promise.reject(error)
    })
  }

  find(data) {
    return models.read(this.schema.table, { id: data.options.id }).then(rawResult => {
      if (rawResult.length === 0) {
        return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
      }

      // handle ref
      // return something like this
      // refField = {
      //   name: 'name1',
      //   type: 'array',
      //   ids: [1, 2],
      //   data: [data1, data2],
      //   ref: {
      //     table: 'table1',
      //     fields: ['field1', 'field2']
      //   }
      // }
      const refFields = this.schema.fields
        .filter(field => {
          return (typeof field.ref !== 'undefined')
        })
        .map(field => {
          let ids = field.type === 'array' ? rawResult[0][field.name] : [rawResult[0][field.name]]
          // console.log(ids)
          return Object.assign({}, field, { ids })
        })

      const promisedFields = refFields.map(refField => {
        // 一个 field 里面的 ids 返回的查询结果
        return Promise
          .all(refField.ids.map(id => {
            return models.read(refField.ref.table, { id }).then(refResult => {
              // console.log(Array.isArray(refResult))
              // console.log(refResult[0].content)
              
              // todo
              if (typeof refResult[0] === 'object' && refResult[0].hasOwnProperty('content')) {
                delete refResult[0].content
              }
              
              return refResult[0]
            })
          }))
          .then(data => {
            // todo: filter fields
            // console.log(result0[])
            
            // console.log(result[0][refField.name])
            
            rawResult[0][refField.name] = data
            return rawResult[0]
          })
      })

      return Promise.all(promisedFields).then(fields => {
        return fields[0]
      })
    })
  }
}

module.exports = ApiMethods
