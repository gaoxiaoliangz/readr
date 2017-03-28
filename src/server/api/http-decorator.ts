import _ from 'lodash'
import { parseLinks } from './utils'
import helpers from '../../app/helpers'

const API_ROOT = helpers.getApiRoot()

const addHeader = (req, res, result) => {
  if (result && result.meta && result.meta.pagination) {
    const links = parseLinks({
      fullPath: API_ROOT + req.path,
      query: req.query,
      entityPagination: result.meta.pagination
    })

    res.links(links)
  }
}

const http = (apiMethod) => (req, res, next) => {
  let object = req.body
  let options = _.extend({}, req.file, { ip: req.ip }, req.query, req.params, {
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
      let statusCode = 200

      if (req.method === 'POST') {
        statusCode = 201
      }

      if (result && result.error) {
        next(result.data)
      }

      addHeader(req, res, result)
      res.send((result && result.data) || {})
    })
    .catch(error => {
      next(error)
    })
}

export default http
