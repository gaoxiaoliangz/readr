import _ from 'lodash'
import DataTypes from '../data/types'

type Fields = {
  [fieldName: string]: {
    // todo
    type: any
  }
}
export function outputEmptyEntity(fields: Fields, id = {}) {
  // id 可以为对象，此时会直接被扩展到输出结果里面
  let additional = id
  if (typeof id === 'string') {
    additional = { id }
  }

  return _.assign({}, _.mapValues(fields, key => {
    if (key.type) {
      if (key.type.isArray()) {
        return []
      }

      if (key.type.equals(DataTypes.Number)) {
        return 0
      }
    }

    return ''
  }), additional)
}

export default {
  outputEmptyEntity
}
