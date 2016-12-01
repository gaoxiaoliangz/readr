import _ from 'lodash'

export const config = state => {
  return _.get(state, ['components', 'viewer', 'config'], {}) as {
    bookId: string
  }
}

export const computed = bookId => state => {
  return _.get(state, ['components', 'viewer', 'contents', bookId, 'computed'], []) as TBookPage[]
}

export const progress = bookId => state => {
  return _.get(state, ['components', 'viewer', 'progress', bookId], {}) as {
    pageNo: number,
    percentage: number,
    isFetching: boolean
  }
}
