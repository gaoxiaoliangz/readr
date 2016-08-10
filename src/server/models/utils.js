const _ = require('lodash')

export function outputEmptyEntity(fields, id) {
  return _(fields)
    .mapValues(val => {
      return ''
    })
    .assign({}, {
      id
    })
    .value()
}
