import _ from 'lodash'
import { parseLinks } from './utils'
import helpers from '../../app/helpers'
import { APIResult } from './utils'

const API_ROOT = helpers.getApiRoot()

const addHeader = (req, res, result) => {
  if (APIResult.prototype.isPrototypeOf(result)) {
    if (result.meta.pagination) {
      const links = parseLinks({
        fullPath: API_ROOT + req.path,
        query: req.query,
        entityPagination: result.meta.pagination
      })

      res.links(links)
    }
  }
}

const http = (apiMethod) => (req, res, next) => {
  let object = req.body
  let options = _.assign({}, { file: req.file }, { ip: req.ip }, req.query, req.params, {
    context: {
      user: req.user
    }
  })

  // If this is a GET, or a DELETE, req.body should be null, so we only have options (route and query params)
  // If this is a PUT, POST, or PATCH, req.body is an object
  if (_.isEmpty(object)) {
    object = options
    options = {}
  }

  apiMethod(object, options)
    .then(result => {
      let _result = result
      if (APIResult.prototype.isPrototypeOf(result)) {
        _result = result.data
      }

      let statusCode = 200

      if (req.method === 'POST') {
        statusCode = 201
      }

      addHeader(req, res, result)
      res.json(_result || {})
    })
    .catch(error => {
      next(error)
    })
}

export default http
