import _ from 'lodash'

export const basicInfo = state => {
  return _.get(state, ['components', 'viewer', 'basicInfo'], {})
}

export const computed = bookId => state => {
  return _.get(state, ['components', 'viewer', 'contents', bookId, 'computed'], [])
}
