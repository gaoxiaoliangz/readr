import _ from 'lodash'
import * as common from './common'
import { createSelector } from 'reselect'

export const self = state => {
  return _.get(state, ['components', 'viewer'], {}) as any
}

export const config = state => {
  return _.get(state, ['components', 'viewer', 'config'], {}) as {
    bookId: string
  }
}

export const computed = bookId => state => {
  return _.get(state, ['components', 'viewer', 'contents', bookId, 'computed'], []) as TBookPage[]
}

export const navData = bookId => state => {
  const bookContent = common.entity('bookContents', bookId)(state)
  return _.get(bookContent, 'nav', []) as TBookNav[]
}

export const progress = bookId => state => {
  return _.get(state, ['components', 'viewer', 'progress', bookId], {}) as {
    pageNo: number,
    percentage: number,
    isFetching: boolean
  }
}

// sub components
export const panel = createSelector(self, _self => {
  return _.get(_self, ['components', 'panel'], {}) as {
    show: boolean
  }
})

export const preference = createSelector(self, _self => {
  return _.get(_self, ['components', 'preference'], {}) as {
    show: boolean
  }
})

export const navigation = createSelector(self, _self => {
  return _.get(_self, ['components', 'navigation'], {}) as {
    show: boolean
  }
})
