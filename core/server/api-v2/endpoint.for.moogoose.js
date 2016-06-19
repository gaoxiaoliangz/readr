'use strict'

const Promise = require('bluebird')
const errors = require('../errors')
const models = require('./models')
// const humps = require('humps')
// const utils = require('./utils')
// const _ = require('lodash')
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema


const defaultConfig = {}

class ApiMethods {
  // config: {}
  constructor(Model, config) {
    if (typeof config === 'undefined') {
      config = {}
    }
    this.config = Object.assign({}, defaultConfig, config)
    this.Model = Model
  }

  add(data) {
    const model = new this.Model(data.object)

    return model.save((err) => {
      if (err) {
        console.error(err)
        return Promise.reject(err)
      }
    })
  }

  browse(data) {
    return this.Model.find((err) => {
      if (err) return err
    })
  }

  find(data) {
    return this.Model
      .findOne({
        id: data.options.id
      })
      .exec()
  }
}

const books = new ApiMethods(models.Book)

module.exports = {
  books
}
