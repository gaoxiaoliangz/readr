import appConfig from '../../app.config'
import _ from 'lodash'
import Schema, { Field } from './schema'
import outputEmptyEntity from './output-empty-entity'
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

function getCollection(table) {
  const dbConnect = MongoClient.connect(`${appConfig.database.host}/${appConfig.database.name}`)
  return dbConnect.then(db => {
    return Promise.resolve(db.collection(table))
  })
}

function getRowByMatch(match, table) {
  return getCollection(table).then(collection => {
    return collection.find(match).toArray()
  })
}

function getRowById(id, table) {
  return getRowByMatch({ _id: id }, table)
}


/**
 * embedRef & its little functions
 */
interface FieldWithIds extends Field {
  ids: string[]
}
const getRefFieldsWithIds = (rawResult, schema: Schema): FieldWithIds[] => {
  return schema.fields
    .filter(field => {
      return (typeof field.ref !== 'undefined')
    })
    .map(field => {
      let ids = rawResult[field.name]

      // 将 ids 通通转换为数组
      // 这里包括本该传数组却得到字符串被转换的情况
      if (!Array.isArray(ids)) {
        ids = [ids]
      }

      return Object.assign({}, field, { ids })
    })
}

// 并且添加相应错误信息
const handleRefResult = (rawRefResult, refSchema: Schema, id) => {
  if (typeof rawRefResult === 'object') {
    return rawRefResult
  }

  return outputEmptyEntity(refSchema.fields, id)
}

const doesRefHaveRefInside = (ref: Schema) => {
  return _.filter(ref.fields, field => Boolean(field.ref)).length !== 0
}

// rawResults 必须为数组
function embedRef(rawResults, schema: Schema) {
  if (rawResults.length === 0) {
    return Promise.resolve([])
  }

  // 获取 ref 数据，生成由 ref 字段组成的对象
  const getRefFieldsWithData = (fieldsWithRefIds: FieldWithIds[]) => {
    return fieldsWithRefIds.map(field => {
      // 一个 field 里面的 ids 返回的查询结果
      return Promise.all(
        field.ids.map(id => {
          return getRowById(id, field.ref.name)
            .then(results => {
              const isRefInRef = doesRefHaveRefInside(field.ref)
              const refSchema = field.ref

              if (isRefInRef) {
                // 递归很强大！！
                return embedRef(results, refSchema).then(reRefedResult =>
                  handleRefResult(reRefedResult[0], refSchema, id))
              }

              return handleRefResult(results[0], refSchema, id)
            })
        })
      ).then(dataResults => {
        let fieldData

        if (field['type'] && field['type'].isArray()) {
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
        .then(refResults => {
          // todo
          let embedResult = {}

          refResults.forEach(refResult => {
            embedResult = Object.assign({}, embedResult, refResult)
          })

          return Promise.resolve(Object.assign({}, rawResult, embedResult))
        })
    })
  )
}

export {
  embedRef,
  getCollection,
  getRowByMatch,
  getRowById
}

export default {
  embedRef,
  getCollection,
  getRowByMatch,
  getRowById
}
