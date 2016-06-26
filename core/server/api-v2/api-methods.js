'use strict'
const Promise = require('bluebird')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const Model = require('./model')
const _ = require('lodash')


const defaultConfig = {
  methods: {
    add: [true, {}],
    browse: [true, {}],
    edit: [true, {}],
    delete: [true, {}],
    find: [true, {}]
  }
}

// tasks 可以是返回 Promise 的 fn
// 也可以是 Promise
function pipeline(tasks) {
  return Promise.reduce(tasks, (result, task) => {
    if (typeof task === 'function') {
      return task.call(this)
    }
    // 如果 task 是 Promise blue bird 貌似会自动把 promise resolve 出来，是 reject 直接就终止执行
    // 所以 写 task#then 会出错
    return task
  })
}

function excludeFields(fieldsToExclude) {
  return res => _.omit(res, fieldsToExclude)
}

function includeFields(fieldsToInclude) {
  if (fieldsToInclude.length === 0) {
    return res => res
  }
  return res => _.pick(res, fieldsToInclude)
}

function limitResults(limit) {
  if (isNaN(limit) || limit === 0) {
    return () => true
  }
  return (res, index) => index < limit
}

class ApiMethods {
  constructor(schema, config) {
    // todo: validatae config
    this.config = _.merge(defaultConfig, (typeof config === 'undefined' ? {} : config))
    this.schema = schema
    this.model = new Model(schema)
  }

  _isEnabled(methodName) {
    if (this.config.methods[methodName][0]) {
      return Promise.resolve(true)
    }
    return Promise.reject(new errors.BadRequestError('no no'))
  }

  _validate(data, isEditing) {
    const suppliedFields = Object.keys(data)
    const allFields = Object.keys(this.schema.fields)
    const requiredFields = allFields.filter(key => Boolean(this.schema.fields[key].required))
    const unsupportedFields = suppliedFields.filter(key => allFields.indexOf(key) === -1)
    const missedFields = requiredFields.filter(key => suppliedFields.indexOf(key) === -1)

    if (unsupportedFields.length > 0) {
      return Promise.reject('Unsupported input found!')
    }

    if (missedFields.length > 0 && !isEditing) {
      return Promise.reject('Miss required input!')
    }

    // 验证 fields，因为每个 field 可能有不止一个 validator
    const validateField = (key, val, validators) => {
      return pipeline(validators.map(validation => {
        if (validation[0](val)) {
          return Promise.resolve(true)
        }
        return Promise.reject(validation[1])
      }))
    }

    // 所有 fields 验证一遍
    return pipeline(Object.keys(data).map(key => {
      const validators = this.schema.fields[key].validators
      if (validators) {
        return validateField(key, data[key], validators)
      }
      // 跳过未定义 validation 的 filed
      return Promise.resolve(true)
    }))
  }

  add(data) {
    const query = () => {
      return this.model.insert(data.object)
    }

    return pipeline([
      this._isEnabled('edit'),
      this._validate(data.object, false),
      query
    ])
  }

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

      return this.model.find(match).listRaw().then(results => {
        return results
          .map(includeFields(filedsToInclude))
          .map(excludeFields(fieldsToExclude))
          .filter(limitResults(limit))
      })
    }

    return pipeline([
      this._isEnabled('browse'),
      // 作为 fn 传参后，需要手动绑定 this（或者像现在这样使用闭包）
      // 不然 this 会被当前类的 this 覆盖
      query
    ])
  }

  edit(data) {
    return pipeline([
      this._isEnabled('edit'),
      this._validate(data.object, true),
      this.model.findById(data.options.id).update.bind(this.model, data.object)
    ])
  }

  delete(data) {
    return pipeline([
      this._isEnabled('delete'),
      this.model.findById(data.options.id).delete.bind(this.model)
    ])
  }

  find(data) {
    const fieldsToExclude = data.options && data.options.exclude ? data.options.exclude.split(',') : []
    const filedsToInclude = data.options && data.options.fields ? data.options.fields.split(',') : []

    const query = () => {
      return this.model.findById(data.options.id).listRaw().then(res => {
        if (res.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
        }
        return res
          .map(includeFields(filedsToInclude))
          .map(excludeFields(fieldsToExclude))[0]
      })
    }

    return pipeline([
      this._isEnabled('find'),
      query
    ])
  }
}

module.exports = ApiMethods
