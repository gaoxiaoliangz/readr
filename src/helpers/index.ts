import * as lifecircle from './lifecircle'
import getApiRoot from './getApiRoot'
import isServerRoutingEnabled from './isServerRoutingEnabled'
import redirect from './redirect'
import isServerEnv from './isServerEnv'
import print from './print'

export default Object.assign({}, lifecircle, {
  getApiRoot,
  isServerRoutingEnabled,
  redirect,
  isServerEnv,
  print
})
