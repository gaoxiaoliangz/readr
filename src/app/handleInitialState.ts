import { INITIAL_STATE } from '../constants'

export default function handleInitialState() {
  if (typeof window === 'undefined') {
    return {}
  }

  return window[INITIAL_STATE] || {}
}
