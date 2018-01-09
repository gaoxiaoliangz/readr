import _ from 'lodash'
import { entity } from './utils'
// import { createSelector } from 'reselect'
import schemas from '../schemas'

export const id = state =>
  _.get(state, ['viewer', 'id']) as string

export const computed = bookId => state => {
  return _.get(state, ['viewer', 'data', bookId, 'content', 'computed'], []) as TBookPage[]
}

export const computed2 = state => {
  const _id = id(state)
  return computed(id)(state)
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
  const bookContent = entity(schemas.BOOK_CONTENT, bookId)(state)
  return _.get(bookContent, 'nav', []) as TBookNav[]
}
