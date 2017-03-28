import _ from 'lodash'
import { ROLES } from '../../constants'
import { makeBasicAPIMethods, makeResult } from './utils'
import dataProvider from '../models/data-provider'

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
    }
  }
}

export default userAPI
