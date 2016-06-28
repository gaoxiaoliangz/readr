'use strict'
const _ = require('lodash')
const i18n = require('../utils/i18n')
const runtimeOptions = require('../utils/runtime-options')


function parseReqData(req) {
  const object = req.body
  const options = _.extend({}, req.files, req.query, req.params)
  const context = {
    user: req.user ? req.user : null,
  }
  const data = { context }

  if (!_.isEmpty(object)) {
    data.object = object
  }

  if (!_.isEmpty(options)) {
    data.options = options
  }

  return data
}

function done(req, res) {
  return result => {
    // todo: remove
    if (result.hook) {
      if (result.hook.action === 'auth') {
        req.session.user = result.hook.data
      }

      delete result.hook
    }

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

    if (statusCode >= 500) {
      console.error(error.stack)
    }

    if (Error.prototype.isPrototypeOf(error)) {
      error = {
        message: error.message || i18n('errors.general.unknownErrorOccurred'),
        type: error.name,
      }
    }

    delete error.statusCode
    delete error.name
    delete error.stack

    if (runtimeOptions.env === 'production') {
      delete error.stack
    }

    res.status(statusCode).send(error)
  }
}

function apiHttp(apiMethod) {
  return function apiHandler(req, res) {
    apiMethod(parseReqData(req)).then(done(req, res), err(res))
  }
}

module.exports = apiHttp
