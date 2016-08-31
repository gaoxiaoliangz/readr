import _ from 'lodash'
import basic from './basic'
import books from './books'
import user from './user'
import users from './users'
import http from './http'

export default _.assign({}, {
  books,
  user,
  users,
  http,
  basic
})
