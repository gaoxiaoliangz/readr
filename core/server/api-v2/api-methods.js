'use strict'
const Promise = require('bluebird')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const Model = require('./model')
const _ = require('lodash')
const Validation = require('../data/validation')


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
    return (typeof task === 'function' ? task.call(this) : task).then(res => {
      return res
    })
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

  _validate(data) {
    return () => {
      const allFields = Object.keys(this.schema.fields)
      const requiredFields = allFields.filter(key => Boolean(this.schema.fields[key].required))

      
      return Promise.resolve(true)
    }
  }

  add(data) {
    return pipeline([
      this._isEnabled('edit'),
      this._validate(data.object),
      this.model.insert.bind(this.model, data.object)
    ])
  }

  browse(data) {
    // 支持 query string: ?exclude=field1,field2&include=field3,field4&limit=10
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

      return () => this.model.find(match).listRaw().then(results => {
        return results
          .map(includeFields(filedsToInclude))
          .map(excludeFields(fieldsToExclude))
          .filter(limitResults(limit))
      })
    }

    return pipeline([
      this._isEnabled('browse'),
      // 作为 fn 传参后，需要手动绑定 this，不然 this 会被当前类的 this 覆盖
      query()
    ])
  }

  edit(data) {
    return pipeline([
      this._isEnabled('edit'),
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
