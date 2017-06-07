import _ from 'lodash'
import { ROLES } from '../../app/constants'
import { makeBasicAPIMethods, makeResult } from './utils'
import dataProvider from '../models/dataProvider'

const userBasicAPI = makeBasicAPIMethods(dataProvider.User)

const userAPI = {
  ...userBasicAPI,
  ...{
    add(object, options) {
      return dataProvider.User.utils.save({
        ...object,
        ...{
          role: ROLES.USER
        }
      })
    },
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
