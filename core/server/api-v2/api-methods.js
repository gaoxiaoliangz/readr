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

class ApiMethods {
  constructor(schema, config) {
    // todo: validatae config
    this.config = _.merge(defaultConfig, (typeof config === 'undefined' ? {} : config))
    this.schema = schema
    this.model = new Model(schema)
  }

  // tasks 可以是返回 Promise 的 fn
  // 也可以是 Promise
  _pipeline(tasks) {
    return Promise.reduce(tasks, (result, task) => {
      return (typeof task === 'function' ? task.call(this) : task).then(res => {
        return res
      })
    })
  }

  _isEnabled(methodName) {
    if (this.config.methods[methodName][0]) {
      return Promise.resolve(true)
    }
    return Promise.reject(new errors.BadRequestError('no no'))
  }

  add(data) {
    return this.model.insert(data.object)
  }

  browse(data) {
    return this._pipeline([
      this._isEnabled('browse'),
      // 作为 fn 传参后，需要手动绑定 this，不然 this 会被当前类的 this 覆盖
      this.model.listRaw.bind(this.model)
    ])
  }

  edit(data) {
    return this._pipeline([
      this._isEnabled('edit'),
      this.model.update.bind(this.model, data.object)
    ])
  }

  delete(data) {
    return this._pipeline([
      this._isEnabled('delete'),
      this.model.findById(data.options.id).delete.bind(this.model)
    ])
  }

  find(data) {
    const query = () => {
      return this.model.findById(data.options.id).listRaw().then(res => {
        if (res.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
        }
        return Promise.resolve(res)
      })
    }

    return this._pipeline([
      this._isEnabled('find'),
      query
    ])
  }
}

module.exports = ApiMethods
