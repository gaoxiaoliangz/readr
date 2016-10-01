import * as lifecircle from './lifecircle'
import getApiRoots from './getApiRoots'
import isServerRoutingEnabled from './isServerRoutingEnabled'
import redirect from './redirect'

export default Object.assign({}, lifecircle, {
  getApiRoots,
  isServerRoutingEnabled,
  redirect
})
