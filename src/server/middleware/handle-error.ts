import print from '../utils/print'
import i18n from '../utils/i18n'
import _ from 'lodash'

export default function handleError(error, req, res, next) {
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
