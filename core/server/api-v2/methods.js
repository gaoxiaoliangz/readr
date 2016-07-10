'use strict'
const Promise = require('bluebird')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const models = require('../models')
const _ = require('lodash')
const utils = require('./utils')



const defaultConfig = {
  methods: {
    add: [true, {}],
    browse: [true, {}],
    edit: [true, {}],
    delete: [true, {}],
    find: [true, {}]
  }
}

const apiMethods = {
  add(model, query) {
    return data => {
      const query = () => {
        const data2 = data.object

        // 处理注册
        // if (this.config.methods.add[1] && this.config.methods.add[1].isRegister) {
        //   data2.role = 'user'
        // }

        return model.insert(data2)
      }

      return utils.pipeline([
        // this._isEnabled('edit'),
        utils.validate(data.object, false),
        query
      ])
    }
  },

  browse(data) {
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
        const matchArray = getSearchableFields(this.schema.fields).map(key => ({
          [key]: reg
        }))
        match = { $or: matchArray }
      }

      return this.model.find(match).list().then(results => {
        return results
          .map(utils.includeFields(filedsToInclude))
          .map(utils.excludeFields(fieldsToExclude))
          .filter(utils.limitResults(limit))
      })
    }

    return utils.pipeline([
      this._isEnabled('browse'),
      // 作为 fn 传参后，需要手动绑定 this（或者像现在这样使用闭包）
      // 不然 this 会被当前类的 this 覆盖
      query
    ])
  },

  edit(data) {
    let config
    const match = utils.getIdMatch(data.options)
    if (this.config.methods.edit[0]) {
      config = this.config.methods.edit[1]
    }

    // todo: 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
    // 可能会造成 upsert 的数据 fields 不全的问题
    return utils.pipeline([
      this._isEnabled('edit'),
      this._validate(data.object, true),
      this.model.find(match).update.bind(this.model, data.object, {
        multi: config.multi ? config.multi : false,
        upsert: config.upsert ? config.upsert : false
      })
    ])
  },

  delete(data) {
    const match = utils.getIdMatch(data.options)

    return utils.pipeline([
      this._isEnabled('delete'),
      this.model.find(match).delete.bind(this.model)
    ])
  },

  find(data) {
    const fieldsToExclude = data.options && data.options.exclude ? data.options.exclude.split(',') : []
    const filedsToInclude = data.options && data.options.fields ? data.options.fields.split(',') : []
    const match = utils.getIdMatch(data.options)
    const query = () => {
      return this.model.find(match).list().then(res => {
        if (res.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
        }
        return res
          .map(utils.includeFields(filedsToInclude))
          .map(utils.excludeFields(fieldsToExclude))[0]
      })
    }

    return utils.pipeline([
      this._isEnabled('find'),
      query
    ])
  },
}


class ApiMethods {
  constructor(config) {
    // todo: validatae config
    this.config = _.merge(defaultConfig, (typeof config === 'undefined' ? {} : config))
    this.schema = config.schema
    try {
      this.model = new Model(config.schema)
    } catch (e) {
      console.error(e)
    }
  }

  _isEnabled(methodName) {
    if (this.config.methods[methodName][0]) {
      return Promise.resolve(true)
    }
    // todo
    return Promise.reject(new errors.BadRequestError('no no'))
  }

}


module.exports = apiMethods
