import i18n from '../utils/i18n'
import _ from 'lodash'

const debug = require('debug')('readr:handleError')

export default function handleError(error, req, res, next) {
  const statusCode = error.statusCode || 500
  let errorJson = _.cloneDeep(error)

  if (!error.message) {
    errorJson.message = i18n('errors.general.unknownErrorOccurred')
  }

  if (!error.statusCode) {
    debug('error without statusCode')
    debug(error)
  }

  // TODO: check if is mongoose error, if true then remove some private info
  res.status(statusCode).json(_.omit(errorJson, ['statusCode', 'name', 'stack']))
}
