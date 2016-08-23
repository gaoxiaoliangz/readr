import _ from 'lodash'
import basicApi from './basic'
import books from './books'
import user from './user'
import users from './users'
import http from './http'

export default _.assign({}, basicApi, {
  books,
  user,
  users,
  http,
})
