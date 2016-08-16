const models = require('../../models')
// const utils = require('../utils')
const errors: any = require('../../errors')
const i18n: any = require('../../utils/i18n')
const mapHttpMethod: any = require('../../endpoints/map-http-method')
// const _ = require('lodash')
import _ from 'lodash'

function createApiMethod(methodName, model): any {
  function list(match, queryString = { page: '1', itemsPerPage: '5'}) {
    const { page: pageStr, itemsPerPage: itemsPerPageStr } = queryString
    const page = parseInt(pageStr || '1', 10)
    const itemsPerPage = parseInt(itemsPerPageStr || '5', 10)
    // 支持过滤器：exclude, fields, limit
    // 例如：?exclude=field1,field2&fields=field3,field4&limit=10
    // const fieldsToExclude = data.options && data.options.exclude ? data.options.exclude.split(',') : []
    // const filedsToInclude = data.options && data.options.fields ? data.options.fields.split(',') : []
    // const limit = data.options && data.options.limit ? parseInt(data.options.limit, 10) : 0
    // const search = data.options && data.options.q ? data.options.q : ''

    // const getSearchableFields = (fields) => {
    //   return Object.keys(fields)
    //     .filter(key => Boolean(fields[key].includeInSearch))
    //     .map(key => key)
    // }

    const query = () => {
      // let match = {}

      // if (search !== '') {
      //   const reg = new RegExp(search)
      //   const matchArray = getSearchableFields(models[model].schema.fields).map(key => ({
      //     [key]: reg
      //   }))
      //   match = { $or: matchArray }
      // }

      // todo: 边界情况考虑
      return models[model].find(match).list().then(results => {
        // if (typeof page === 'undefined') {
        //   console.log('wtf')
        //   // return Promise.resolve(results)
        // }
        const startIndex = (page - 1) * itemsPerPage
        const pagedResults = {
          _response: results.slice(startIndex, itemsPerPage + startIndex),
          _pagination: {
            current: page,
            // todo: 可能有 bug
            all: parseInt((results.length / itemsPerPage) as any, 10) + 1
          }
        }

        return pagedResults
        // .map(utils.includeFields(filedsToInclude))
        // .map(utils.excludeFields(fieldsToExclude))
        // .filter(utils.limitResults(limit))
      })
    }

    return query()
  }

  switch (methodName) {
    // case 'find':
    //   return function find(data) {
    //     const fieldsToExclude = data.options && data.options.exclude ? data.options.exclude.split(',') : []
    //     const filedsToInclude = data.options && data.options.fields ? data.options.fields.split(',') : []
    //     const match = utils.getIdMatch(data.options)

    //     const query = () => {
    //       return models[model].find(match).list().then(res => {
    //         if (res.length === 0) {
    //           return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
    //         }
    //         return res
    //           .map(utils.includeFields(filedsToInclude))
    //           .map(utils.excludeFields(fieldsToExclude))[0]
    //       })
    //     }

    //     return query()
    //   }

    case 'find':
      return match => {
        return list(match).then(res => {
          if (res.length === 0) {
            return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
          }
          return res._response[0]
        })
      }

    case 'list':
      return (match, options) => {
        return list(match, options)
      }

    case 'update':
      return function edit(match, data) {
        // const match = utils.getIdMatch(data.options)

        // todo: 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
        // 可能会造成 upsert 的数据 fields 不全的问题
        return models[model].find(match).update(data)
      }

    case 'add':
      return function add(data) {
        return models[model].insert(data)
      }

    case 'remove':
      return function remove(match) {
        return models[model].find(match).destroy()
      }

    default:
      return new Error('API method not defined!')
  }
}

function generateBasicApi(config) {
  // todo
  const allMethodNames = ['find', 'add', 'list', 'update', 'remove']
  const methodsWithoutId = ['add', 'list']
  let methods = {}
  let _publicMethods = [] // { name, url }[]

  allMethodNames.forEach(methodName => {
    if (!config.excludedMethods || (config.excludedMethods && config.excludedMethods.indexOf(methodName) === -1)) {
      // 如果方法没在配置文件里面被排除

      let url = config.url
      const httpMethod = mapHttpMethod(methodName)

      if (methodsWithoutId.indexOf(methodName) === -1) {
        url = `${url}/:_id`
      }

      methods = Object.assign({}, methods, {
        [methodName]: createApiMethod(methodName, config.model)
      })

      if (!config.privateMethods || (config.privateMethods && config.privateMethods.indexOf(methodName) === -1)) {
        // 如果不是私有方法
        _publicMethods = _publicMethods.concat({
          name: methodName,
          url,
          httpMethod
        })
      }
    }
  })

  return _.assign({}, methods, { _publicMethods })
}

module.exports = generateBasicApi
