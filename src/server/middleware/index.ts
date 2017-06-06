import parseContext from './parseContext'
import auth from './auth'
import requirePermissionsOf from './requirePermissionsOf'
import handleError from './handleError'
import logFile from './logFile'
import prepareApi from './prepareApi'
import handleAPINotFound from './handleAPINotFound'
import cors from './cors'
import proxy from './proxy'

export default {
  parseContext,
  auth,
  requirePermissionsOf,
  handleError,
  logFile,
  prepareApi,
  handleAPINotFound,
  cors,
  proxy
}
