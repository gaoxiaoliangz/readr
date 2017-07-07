import _ from 'lodash'
import { ROLES } from '../../app/constants'
import { makeBasicAPIMethods, makeResult } from './utils'
import dataProvider from '../models/dataProvider'
import errors from '../errors'

const userBasicAPI = makeBasicAPIMethods(dataProvider.User)

type CreateUserConfig = {
  email: string
  password: string
}
async function createUser(object: CreateUserConfig) {
  const queryEmailResult = await dataProvider.User.findOne({
    email: object.email
  })

  if (queryEmailResult) {
    return Promise.reject(new errors.ValidationError('邮箱已存在！'))
  }

  let defaultName = object.email.split('@')[0]
  const queryUsernameResult = await dataProvider.User.findOne({
    username: defaultName
  })

  if (queryUsernameResult) {
    defaultName += Math.random().toFixed(3).substr(2)
  }

  return dataProvider.User.utils.save({
    ...object,
    ...{
      role: ROLES.USER,
      username: defaultName,
      display_name: defaultName
    }
  })
}

const userAPI = {
  ...userBasicAPI,
  ...{
    add: createUser,
    find(options) {
      const { id } = options
      return dataProvider.User.findById(id).exec(res => {
        return makeResult(_.omit(res, ['password']))
      })
    },
    async update(object, options) {
      const { id } = options
      const result = await dataProvider.User.utils.updateById(id, object)

      return result
    }
  }
}

export default userAPI
