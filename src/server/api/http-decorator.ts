import _ from 'lodash'
import { parseLinks } from './utils'
import helpers from '../../app/helpers'
import { QueryResult } from '../models/queryResult'

const API_ROOT = helpers.getApiRoot()

const addHeader = (req, res, result: QueryResult<any>) => {
  if (QueryResult.prototype.isPrototypeOf(result)) {
    const links = parseLinks({
      fullPath: API_ROOT + req.path,
      query: req.query,
      entityPagination: {
        current: Math.ceil(result.offset / result.limit),
        all: Math.ceil(result.totalCount / result.limit)
      }
    })

    res.links(links)
  }
}

export const parseReq = req => {
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

  return [object, options]
}

const http = (apiMethod) => (req, res, next) => {
  apiMethod(...parseReq(req))
    .then(result => {
      let _result = result
      if (QueryResult.prototype.isPrototypeOf(result)) {
        _result = result.list
      }

      let statusCode = 200

      if (req.method === 'POST') {
        statusCode = 201
      }

      addHeader(req, res, result)
      return res.json(_result || {})
    })
    .catch(error => {
      next(error)
    })
}

export default http
