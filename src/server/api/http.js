'use strict'
const _ = require('lodash')
const i18n = require('../utils/i18n')
// const humps = require('humps')
const print = require('../utils/print.ts').default

function parseRequest(req) {
  // const object = humps.decamelizeKeys(req.body)
  // const options = humps.decamelizeKeys(_.extend({}, req.files, req.query, req.params))
  // const context = {
  //   // todo
  //   user: req.session.user ? req.session.user : null,
  // }
  // const data = { context }

  // if (!_.isEmpty(object)) {
  //   data.object = object
  // }

  // if (!_.isEmpty(options)) {
  //   data.options = options
  // }

  return req
}

function done(req, res) {
  return result => {
    if (req.method === 'POST') {
      res.status(201).send(result)
    } else {
      res.status(200).send(result)
    }
  }
}

function err(res) {
  return error => {
    const statusCode = error.statusCode || 500
    let errorJson = error

    if (Error.prototype.isPrototypeOf(error)) {
      errorJson = {
        message: error.message || i18n('errors.general.unknownErrorOccurred'),
        type: error.name,
      }
    }

    print.error(error)

    res.status(statusCode).send(_.omit(errorJson, ['statusCode', 'name']))
  }
}

function apiHttp(apiMethod) {
  return (req, res) => {
    apiMethod(parseRequest(req)).then(done(req, res), err(res))
  }
}

module.exports = apiHttp
