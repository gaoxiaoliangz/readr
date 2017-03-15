import { selectors as form } from 'better-redux-form'
import _ from 'lodash'
import * as viewer from './viewer'

export const session = state => {
  return _.get(state, 'session', {})
}

export * from './entityUtils'
export * from './entities'
export { form, viewer }
