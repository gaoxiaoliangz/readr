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

function getIdMatch(options) {
  if (options.id) {
    return { _id: options.id }
  }

  const match = {}
  _.forEach(options, (val, key) => {
    if (key.indexOf('id')) {
      match[key] = val
    }
  })

  return match
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



  // _validate(data, isEditing) {
  //   const suppliedFields = Object.keys(data)
  //   const allFields = Object.keys(this.schema.fields)
  //   const requiredFields = allFields.filter(key => Boolean(this.schema.fields[key].required))
  //   const unsupportedFields = suppliedFields.filter(key => allFields.indexOf(key) === -1)
  //   const missedFields = requiredFields.filter(key => suppliedFields.indexOf(key) === -1)

  //   if (unsupportedFields.length > 0) {
  //     return Promise.reject(new errors.BadRequestError(i18n('errors.validation.preCheck.unsupportedInput', unsupportedFields[0])))
  //   }

  //   if (missedFields.length > 0 && !isEditing) {
  //     return Promise.reject(new errors.BadRequestError(i18n('errors.validation.preCheck.missRequiredFields', missedFields[0])))
  //   }

  //   // 验证 fields，因为每个 field 可能有不止一个 validator
  //   const validateField = (key, val, validators) => {
  //     return pipeline(validators.map(validation => {
  //       if (validation[0](val)) {
  //         return Promise.resolve(true)
  //       }
  //       return Promise.reject(new errors.BadRequestError(validation[1]))
  //     }))
  //   }

  //   // 所有 fields 验证一遍
  //   return pipeline(Object.keys(data).map(key => {
  //     const validators = this.schema.fields[key].validators
  //     if (validators) {
  //       return validateField(key, data[key], validators)
  //     }
  //     // 跳过未定义 validation 的 filed
  //     return Promise.resolve(true)
  //   }))
  // }

  add(data) {
    const query = () => {
      const data2 = data.object

      // 处理注册
      if (this.config.methods.add[1] && this.config.methods.add[1].isRegister) {
        data2.role = 'user'
      }

      return this.model.insert(data2)
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

      return this.model.find(match).list().then(results => {
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
    let config
    const match = getIdMatch(data.options)
    if (this.config.methods.edit[0]) {
      config = this.config.methods.edit[1]
    }

    // todo: 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
    // 可能会造成 upsert 的数据 fields 不全的问题
    return pipeline([
      this._isEnabled('edit'),
      this._validate(data.object, true),
      this.model.find(match).update.bind(this.model, data.object, {
        multi: config.multi ? config.multi : false,
        upsert: config.upsert ? config.upsert : false
      })
    ])
  }

  delete(data) {
    const match = getIdMatch(data.options)

    return pipeline([
      this._isEnabled('delete'),
      this.model.find(match).delete.bind(this.model)
    ])
  }

  find(data) {
    const fieldsToExclude = data.options && data.options.exclude ? data.options.exclude.split(',') : []
    const filedsToInclude = data.options && data.options.fields ? data.options.fields.split(',') : []
    const match = getIdMatch(data.options)
    const query = () => {
      return this.model.find(match).list().then(res => {
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
