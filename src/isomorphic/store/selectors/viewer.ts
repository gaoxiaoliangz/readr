import _ from 'lodash'

export const basicInfo = state => {
  return _.get(state, ['components', 'viewer', 'basicInfo'], {})
}
