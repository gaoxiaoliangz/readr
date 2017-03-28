import Model from '../models/model'
import * as schemas from '../data/schemas'
import _ from 'lodash'

const tagModel = new Model(schemas.tag)

export function listTags(object, options) {
  return tagModel.list()
}
