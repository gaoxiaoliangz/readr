import _ from 'lodash'

export const toArray = obj => {
  return _.map(obj, (val, id) => {
    return _.assign({}, val, { id })
  })
}
