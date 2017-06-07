// import { ENABLE_SERVER_ROUTING } from '../../constants'

export default function isServerRoutingEnabled() {
  return APP_CONFIG.SERVER_SIDE_RENDERING
  // return Boolean(window[ENABLE_SERVER_ROUTING])
}
