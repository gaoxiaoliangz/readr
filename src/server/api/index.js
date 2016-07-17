'use strict'
const apiConfig = require('./config')
const models = require('../models')
const utils = require('./utils')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const http = require('./http')
const _ = require('lodash')
const extendedApi = require('./extended')


function createApiFn(fnName, model) {
  switch (fnName) {
    case 'find':
      return function find(data) {
        const fieldsToExclude = data.options && data.options.exclude ? data.options.exclude.split(',') : []
        const filedsToInclude = data.options && data.options.fields ? data.options.fields.split(',') : []
        const match = utils.getIdMatch(data.options)

        const query = () => {
          return models[model].find(match).list().then(res => {
            if (res.length === 0) {
              return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
            }
            return res
              .map(utils.includeFields(filedsToInclude))
              .map(utils.excludeFields(fieldsToExclude))[0]
          })
        }

        return query()
      }

    case 'edit':
      return function edit(data) {
        const match = utils.getIdMatch(data.options)

        // todo: 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
        // 可能会造成 upsert 的数据 fields 不全的问题
        return models[model].find(match).update(data.object)
      }

    case 'add':
      return function add(data) {
        return models[model].insert(data.object)
      }

    case 'browse':
      return function browse(data) {
        // 支持过滤器：exclude, fields, limit
        // 例如：?exclude=field1,field2&fields=field3,field4&limit=10
        const fieldsToExclude = data.options && data.options.exclude ? data.options.exclude.split(',') : []
        const filedsToInclude = data.options && data.options.fields ? data.options.fields.split(',') : []
        const limit = data.options && data.options.limit ? parseInt(data.options.limit, 10) : 0
        const search = data.options && data.options.q ? data.options.q : ''

        const getSearchableFields = (fields) => {
          return Object.keys(fields)
            .filter(key => Boolean(fields[key].includeInSearch))
            .map(key => key)
        }

        const query = () => {
          let match = {}

          if (search !== '') {
            const reg = new RegExp(search)
            const matchArray = getSearchableFields(models[model].schema.fields).map(key => ({
              [key]: reg
            }))
            match = { $or: matchArray }
          }

          return models[model].find(match).list().then(results => {
            return results
              .map(utils.includeFields(filedsToInclude))
              .map(utils.excludeFields(fieldsToExclude))
              .filter(utils.limitResults(limit))
          })
        }

        return query()
      }

    case 'remove':
      return function remove(data) {
        const match = utils.getIdMatch(data.options)

        return models[model].find(match).destroy()
      }

    default:
      return new Error('API method not defined!')
  }
}

function createApi(config) {
  const allFns = ['add', 'browse', 'find', 'edit', 'remove']
  const fnWithoutId = ['add', 'browse']
  let fns = {}
  let _publicMethods = [] // { name, url }[]

  allFns.forEach(mtd => {
    if (!config.excludedMethods || (config.excludedMethods && config.excludedMethods.indexOf(mtd) === -1)) {
      // 如果方法没在配置文件里面被排除

      let url = config.url
      let httpMethod

      switch (mtd) {
        case 'browse':
        case 'find':
          httpMethod = 'get'
          break

        case 'add':
        case 'edit':
          httpMethod = 'post'
          break

        case 'remove':
          httpMethod = 'delete'
          break
      
        default:
          throw new Error('Undefined api method!')
      }

      if (fnWithoutId.indexOf(mtd) === -1) {
        url = `${url}/:_id`
      }

      fns = Object.assign({}, fns, {
        [mtd]: createApiFn(mtd, config.model)
      })

      if (!config.privateMethods || (config.privateMethods && config.privateMethods.indexOf(mtd) === -1)) {
        // 如果不是私有方法
        _publicMethods = _publicMethods.concat({
          name: mtd,
          url,
          httpMethod
        })
      }
    }
  })

  return Object.assign({}, fns, { _publicMethods })
}

let _api = _.mapValues(apiConfig, (val, key) => {
  return createApi(apiConfig[key])
})

_api = _.merge({}, _api, extendedApi, (objValue, srcValue) => {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
  return undefined
})

module.exports = _.assign({
  http,
  _api,
}, _api)
