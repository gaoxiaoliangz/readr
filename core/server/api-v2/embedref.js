'use strict'
const config = require('../config')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const schemas = require('./config/schemas')
const _ = require('lodash')

function getSchemaByTable(table) {
  const schema = _.filter(schemas, val => {
    return (val.baseTable === table)
  })[0]

  return schema
}

function doesRefTableHaveRefInItsSchema(table) {
  const schema = getSchemaByTable(table)
  const keysWithRef = _.filter(schema.fields, val => Boolean(val.ref))
  return keysWithRef.length !== 0
}

function getCollection(table) {
  const dbConnect = MongoClient.connect(config.db.host + config.db.name)
  return dbConnect.then(db => {
    return Promise.resolve(db.collection(table))
  })
}

function getRefFields(fields) {
  return Object.keys(fields).filter(key => {
    return (typeof fields[key].ref !== 'undefined')
  })
}

function fetchDataById(id, table) {
  return getCollection(table).then(collection => {
    return collection.find({ _id: id }).toArray()
  })
}

function parseIds(ids) {
  let ids2 = ids
  if (typeof ids === 'string') {
    ids2 = [ids]
    console.error('WARNING: Ref id 应该为数组，却得到字符串，现在将字符串封装为第一个元素为该字符串的数组！')
  }
  return ids2
} 

// prepare ref fields
// output = Array<{
//   name,
//   type,
//   ids,
//   ref: {
//     table,
//     fields
//   }
// }>
function getRefFieldsWithIds(rawResult, schema) {
  return Object.keys(schema.fields)
    .filter(key => {
      return (typeof schema.fields[key].ref !== 'undefined')
    })
    .map(key => {
      // 使用了新的 type 定义方式
      let ids = []
      if (schema.fields[key].type.isArray()) {
        ids = rawResult[key]
        if (typeof ids === 'string') {
          ids = [ids]
          console.error('WARNING: Ref id 应该为数组，却得到字符串，现在将字符串封装为第一个元素为该字符串的数组！')
        }
      } else {
        // todo: 检查 id 是否可用？
        ids = [rawResult[key]]
      }
      return Object.assign({}, schema.fields[key], {
        name: key,
        ids
      })
    })
}

// 问题真多！！！
let warning = []

// take array as param
function embedRef(rawResults, schema) {
  if (rawResults.length === 0) {
    return Promise.resolve([])
  }

  // 获取 ref 数据
  // output = Array<{
  //   fieldName: {}
  // }>
  function getRefFieldsWithData(fieldsWithRefIds) {
    return fieldsWithRefIds.map(field => {
      // 一个 field 里面的 ids 返回的查询结果
      return Promise.all(
        field.ids.map(id => {
          return getCollection(field.ref.table).then(collection => {
            return collection.find({ _id: id })
              .toArray()
              .then(results => {
                const isRefInRef = doesRefTableHaveRefInItsSchema(field.ref.table)

                const filterResults = rawRefResults => {
                  let newResults = rawRefResults[0]

                  if (rawRefResults.length !== 0 && typeof rawRefResults === 'object') {
                    // 如果 fields 为空数组则将字段全部无保留输出
                    if (field.ref.fields.length !== 0) {
                      newResults = _.pick(rawRefResults[0], field.ref.fields)
                    }
                  } else {
                    newResults = null
                    warning.push(`${field.name} with id: ${id} not found! `)
                  }

                  return Promise.resolve(newResults)
                }

                if (isRefInRef) {
                  const refSchema = getSchemaByTable(field.ref.table)
                  // 递归很强大！！
                  return embedRef(results, refSchema).then(reRefedResult => filterResults(reRefedResult))
                }

                return filterResults(results)
              }, err => {
                console.error(err)
                Promise.reject(err)
              })
          })
        })
      ).then(dataResults => {
        let fieldData

        if (field.type.isArray()) {
          const resultWithNoEmptyItem = dataResults.filter(r => {
            return !_.isEmpty(r)
          })

          if (resultWithNoEmptyItem.length !== 0) {
            fieldData = resultWithNoEmptyItem
          } else {
            fieldData = null
          }
        } else {
          fieldData = dataResults[0]
        }

        const dataToResolve = {
          [field.name]: fieldData
        }

        return Promise.resolve(dataToResolve)
      })
    })
  }

  return Promise.all(
    rawResults.map(rawResult => {
      const fieldsWithIds = getRefFieldsWithIds(rawResult, schema)

      return Promise.all(getRefFieldsWithData(fieldsWithIds))
        .then(newFields => {
          let embedResult = {}

          newFields.forEach(newField => {
            embedResult = Object.assign({}, embedResult, newField)
          })
          embedResult.warning = warning

          return Promise.resolve(Object.assign({}, rawResult, embedResult))
        })
    })
  )
}

module.exports = embedRef
