import _ from 'lodash'
import DataTypes from '../data/types'
import { Field } from './schema'

export default function outputEmptyEntity(fields: Field[], idObjOrIdString = {}) {
  // id 可以为对象，此时会直接被扩展到输出结果里面
  let idObj = idObjOrIdString

  if (typeof idObjOrIdString === 'string') {
    idObj = { idObjOrIdString }
  }

  const entity = {}

  fields.forEach(field => {
    // todo
    // 添加类型判断
    entity[field.name] = ''
  })

  return _.assign({}, entity, idObj)
}
