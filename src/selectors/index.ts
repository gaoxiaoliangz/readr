import { selectors as form } from 'better-redux-form'
import _ from 'lodash'
import * as viewer from './viewer'
import * as utils from './utils'
import * as pagination from './pagination'

export const session = state => _.get(state, 'session', {}) as Session
export const routing = state => _.get(state, 'routing.locationBeforeTransitions', {})
export const profile = state => _.get(state, 'profile', {})

export * from './utils'
export { utils, form, viewer, pagination }
