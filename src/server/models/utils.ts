import _ from 'lodash'

type Fields = {
  [fieldName: string]: {
    type: string
  }
}
export function outputEmptyEntity(fields: Fields, id) {
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

// function a (fields: Fields) {
//   return _.mapValues(fields, val => {
//     val.type
//   })
//   return _(fields).mapValues(val => {
//     val.dfdf
//   })
// }
