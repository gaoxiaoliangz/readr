import { INITIAL_STATE } from '../constants/common'

export default function handleInitialState() {
  if (typeof window === 'undefined') {
    return {}
  }

  return window[INITIAL_STATE] || {}
}
