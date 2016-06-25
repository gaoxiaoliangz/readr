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

// function pipeline(tasks) {
//   // for (let i = 0; i < tasks.length; i++) {
//   //   // if (tasks[i]().then
//   // }

//   return Promise.all(tasks.reduce(task => {

//   }))
// }



class ApiMethods {
  constructor(schema, config) {
    // todo: validatae config
    // this.config = Object.assign(
    //   {},
    //   defaultConfig,
    //   (typeof config === 'undefined' ? {} : config)
    // )
    this.config = _.merge(defaultConfig, (typeof config === 'undefined' ? {} : config))
    this.schema = schema
    this.model = new Model(schema)
  }

  // tasks 可以是返回 Promise 的 fn
  // 也可以是 Promise
  _pipeline(tasks) {
    return Promise.reduce(tasks, (result, task) => {
      return (typeof task === 'function' ? task() : task).then(res => {
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
      this.model.listRaw.bind(this.model)
    ])
  }

  edit(data) {
    return this.model.update(data.object)
  }

  delete(data) {
    return this.model.findById(data.options.id).delete()
  }

  find(data) {
    if (this.config.methods.find[0]) {
      return this.model.listRaw()
    }
    return this.model.findById(data.options.id).listRaw()
  }
}

module.exports = ApiMethods
