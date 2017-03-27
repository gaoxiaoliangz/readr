import { ENABLE_SERVER_ROUTING } from '../../constants'

export default function isServerRoutingEnabled() {
  return Boolean(window[ENABLE_SERVER_ROUTING])
}
