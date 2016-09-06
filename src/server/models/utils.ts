import _ from 'lodash'

type Fields = {
  [fieldName: string]: {
    // todo
    type: any
  }
}
export function outputEmptyEntity(fields: Fields, id) {
  return _.assign({}, _.mapValues(fields, key => {
      if (key.type && key.type.isArray()) {
        return []
      }
      return ''
    }), id)
}

export default {
  outputEmptyEntity
}
