import Model from '../models/model'
import * as schemas from '../data/schemas'
import _ from 'lodash'
import { ROLES } from '../../isomorphic/constants'

const userModel = new Model(schemas.user)

export function findUser(id) {
  return userModel.findOne(id).then(entity => {
    return _.omit(entity, ['password'])
  })
}

export function addUser(userInfo) {
  return userModel.add(_.assign({}, userInfo, {
    role: ROLES.USER
  }))
}
