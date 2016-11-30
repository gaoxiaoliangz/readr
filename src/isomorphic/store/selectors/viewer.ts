import _ from 'lodash'

export const basicInfo = state => {
  // TODO
  return _.get(state, ['components', 'viewer', 'basicInfo'], {}) as {
    bookId: string
  }
}

export const computed = bookId => state => {
  return _.get(state, ['components', 'viewer', 'contents', bookId, 'computed'], []) as TBookPage[]
}
