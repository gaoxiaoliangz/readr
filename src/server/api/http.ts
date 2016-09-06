import _ from 'lodash'
import i18n from '../utils/i18n'
import print from '../utils/print'
import parseFormData from '../../isomorphic/utils/parseFormData'

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
