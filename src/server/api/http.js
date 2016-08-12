'use strict'
const _ = require('lodash')
const i18n = require('../utils/i18n')
// const humps = require('humps')
const print = require('../utils/print.ts').default
const parseFormData = require('../../isomorphic/utils/parseFormData.ts').default

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

// todo: 边界情况考虑
function parsePagination({ fullPath, query }, { current, all }) {
  const links = {
    first: `${fullPath}?${parseFormData(_.assign({}, query, { page: 1 }))}`,
    last: `${fullPath}?${parseFormData(_.assign({}, query, { page: all }))}`,
    prev: `${fullPath}?${parseFormData(_.assign({}, query, { page: current - 1 }))}`,
    next: `${fullPath}?${parseFormData(_.assign({}, query, { page: current + 1 }))}`,
  }

  if (current <= 1) {
    return _.omit(links, ['prev'])
  }

  if (current === all) {
    return _.omit(links, ['next'])
  }

  if (current > all) {
    links.prev = links.last
    return _.omit(links, ['next'])
  }

  return links
}

function done(req, res) {
  return result => {
    if (req.method === 'POST') {
      res.status(201).send(result)
    } else {
      if (result._pagination) {
        const host = 'http://readrweb.com'

        res.links(parsePagination({
          fullPath: host + req.path,
          query: req.query,
        }, result._pagination))
        res.status(200).send(result._response)
      }

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
