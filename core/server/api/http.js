'use strict'
const _ = require('lodash')
const i18n = require('../utils/i18n')
// const runtimeOptions = require('../utils/runtime-options')
const humps = require('humps')


function parseReqData(req) {
  const object = humps.decamelizeKeys(req.body)
  const options = humps.decamelizeKeys(_.extend({}, req.files, req.query, req.params))
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
    let errorJson = error

    if (Error.prototype.isPrototypeOf(error)) {
      errorJson = {
        message: error.message || i18n('errors.general.unknownErrorOccurred'),
        type: error.name,
      }
    }

    res.status(statusCode).send(_.omit(errorJson, ['statusCode', 'name', 'stack']))
  }
}

function apiHttp(apiMethod) {
  return function apiHandler(req, res) {
    apiMethod(parseReqData(req)).then(done(req, res), err(res))
  }
}

module.exports = apiHttp