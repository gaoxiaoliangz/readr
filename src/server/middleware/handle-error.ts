import i18n from '../utils/i18n'
import _ from 'lodash'
import errors from '../errors'

const debug = require('debug')('readr:handleError')

interface GeneralObject {
  [key: string]: any
}

export default function handleError(error, req, res, next) {
  const statusCode = error.statusCode || 500
  let errorJson = error

  // if is an instance of Error, message property will not be shown
  // have to set it
  if (Error.prototype.isPrototypeOf(error)) {
    errorJson = _.mapValues(error, val => val)
    errorJson.message = error.message
    errorJson.stack = error.stack
  }

  if (!error.message) {
    errorJson.message = i18n('errors.general.unknownErrorOccurred')
  }

  if (!error.statusCode) {
    debug('error without statusCode')
    debug(error)
  }
  errorJson = _.omit(errorJson, ['statusCode', 'name'])
  if (process.env.NODE_ENV === 'production') {
    errorJson = _.omit(errorJson, ['stack'])
  }
  // TODO: check if is mongoose error, if true then remove some private info
  res.status(statusCode).json(errorJson)
}
