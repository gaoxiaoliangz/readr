import _ from 'lodash'
import { entity } from './index'
import { createSelector } from 'reselect'


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

export const id = state =>
  _.get(state, ['viewer', 'id']) as string

export const localProgress = bookId => state => {
  return _.get(state, ['viewer', 'data', bookId, 'progress', 'local'], [])
}



export const self = state => {
  return _.get(state, ['components', 'viewer'], {}) as any
}

export const navData = bookId => state => {
  const bookContent = entity('bookContents', bookId)(state)
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
// export const panel = createSelector(self, _self => {
//   return _.get(_self, ['components', 'panel'], {}) as {
//     show: boolean
//   }
// })

// export const preference = createSelector(self, _self => {
//   return _.get(_self, ['components', 'preference'], {}) as {
//     show: boolean
//   }
// })

// export const navigation = createSelector(self, _self => {
//   return _.get(_self, ['components', 'navigation'], {}) as {
//     show: boolean
//   }
// })

// export const progressComponent = createSelector(self, _self => {
//   return _.get(_self, ['components', 'progress'], {}) as {
//     show: boolean
//   }
// })
