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

function fetchData(match, table) {
  return getCollection(table).then(collection => {
    return collection.find(match).toArray()
  })
}

function fetchDataById(id, table) {
  return fetchData({ _id: id }, table)
}

// 将 ids 通通转换为数组
// 这里包括本该传数组却得到字符串被转换的情况
function parseIds(ids) {
  let ids2 = ids
  if (typeof ids === 'string') {
    ids2 = [ids]
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
      return Object.assign({}, schema.fields[key], {
        name: key,
        ids: parseIds(rawResult[key])
      })
    })
}

// 并且添加相应错误信息
function filterRefResult(rawRefResult, schemaField, id) {
  let newResults = rawRefResult

  if (typeof rawRefResult === 'object') {
    // 如果 fields 为空数组则将字段全部无保留输出
    if (schemaField.ref.fields.length !== 0) {
      newResults = _.pick(rawRefResult, schemaField.ref.fields)
      return { ref_data: newResults }
    }

    return { ref_data: newResults }
  }

  return {
    ref_error: {
      // 不使用 i18n, 该信息不会直接向终端用户展示
      id,
      field_name: schemaField.name,
      message: `${schemaField.name} with id ${id} not found! `
    }
  }
}

// rawResults 必须为数组
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
          return fetchDataById(id, field.ref.table)
            .then(results => {
              const isRefInRef = doesRefTableHaveRefInItsSchema(field.ref.table)

              if (isRefInRef) {
                const refSchema = getSchemaByTable(field.ref.table)
                // 递归很强大！！
                return embedRef(results, refSchema).then(reRefedResult => filterRefResult(reRefedResult[0], field, id))
              }

              return filterRefResult(results[0], field, id)
            }, err => {
              console.error(err)
              Promise.reject(err)
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

          return Promise.resolve(Object.assign({}, rawResult, embedResult))
        })
    })
  )
}

module.exports = {
  embedRef,
  getCollection,
  fetchData,
  fetchDataById
}
