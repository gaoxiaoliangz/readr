import models from '../../models'
import _ from 'lodash'

const users = {
  add(data) {
    return models.user.insert(_.assign({}, data, {
      role: 'user'
    }))
  }
}

export default users
