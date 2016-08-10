const _ = require('lodash')

export function outputEmptyEntity(fields, id) {
  return _(fields)
    .mapValues(val => {
      if (val.type && val.type.isArray()) {
        return []
      }
      return ''
    })
    .assign({}, {
      id
    })
    .value()
}
