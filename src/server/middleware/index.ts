import parseContext from './parse-context'
import auth from './auth'
import requirePermissionsOf from './require-permissions-of'
import handleError from './handle-error'
import logFile from './log-file'
import prepareApi from './prepare-api'
import handleAPINotFound from './handle-api-not-found'
import cors from './cors'

export default {
  parseContext,
  auth,
  requirePermissionsOf,
  handleError,
  logFile,
  prepareApi,
  handleAPINotFound,
  cors
}
