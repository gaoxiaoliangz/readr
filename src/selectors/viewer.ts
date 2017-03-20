import _ from 'lodash'
import { entity } from './utils'

export const id = state =>
  _.get(state, ['viewer', 'id']) as string

export const computed = bookId => state => {
  return _.get(state, ['viewer', 'data', bookId, 'content', 'computed'], []) as TBookPage[]
}

export const status = state => {
  return _.get(state, ['viewer', 'status'], {}) as Viewer.Status
}

export const config = state => {
  return _.get(state, ['viewer', 'config'], {}) as Viewer.Config
}

export const components = state => {
  return _.get(state, ['viewer', 'components'], {}) as Viewer.Components
}

export const localProgress = bookId => state => {
  return _.get(state, ['viewer', 'data', bookId, 'progress', 'local'], [])
}

export const self = state => {
  return _.get(state, ['viewer'], {}) as any
}

export const navData = bookId => state => {
  const bookContent = entity('bookContents', bookId)(state)
  return _.get(bookContent, 'nav', []) as TBookNav[]
}
