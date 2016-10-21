import * as lifecircle from './lifecircle'
import getApiRoot from './getApiRoot'
import isServerRoutingEnabled from './isServerRoutingEnabled'
import redirect from './redirect'

export default Object.assign({}, lifecircle, {
  getApiRoot,
  isServerRoutingEnabled,
  redirect
})
