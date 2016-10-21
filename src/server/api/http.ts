import _ from 'lodash'
import i18n from '../utils/i18n'
import print from '../utils/print'
import parseUrlencoded from '../../isomorphic/utils/parseUrlencoded'
import helpers from '../../isomorphic/helpers'

const API_ROOT = helpers.getApiRoot()

function parsePagination({ fullPath, query }, { current, all }) {
  const getLintByPage = page => (`${fullPath}?${parseUrlencoded(_.assign({}, query, { page }))}`)

  const links = {
    first: getLintByPage(1),
    last: getLintByPage(all),
    prev: getLintByPage(current - 1),
    next: getLintByPage(current + 1),
  }

  if (current > all) {
    links.prev = links.last
  }

  if (all === 1) {
    if (current > 1) {
      return _.omit(links, ['next'])
    }

    if (current === 1) {
      return _.omit(links, ['prev', 'next'])
    }
  }

  if (current <= 1) {
    return _.omit(links, ['prev'])
  }

  if (current >= all) {
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
        const host = API_ROOT

        res.links(parsePagination({
          fullPath: host + req.path,
          query: req.query,
        }, result._pagination))

        res.status(200).send(result._response)
        return false
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

    if (!error.statusCode) {
      print.error(error)
    }

    res.status(statusCode).send(_.omit(errorJson, ['statusCode', 'name', 'stack']))
  }
}

function apiHttp(apiMethod) {
  return (req, res) => {
    const response = apiMethod(req)
    response.then(done(req, res), err(res))
  }
}

export default apiHttp
