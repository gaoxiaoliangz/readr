import _ from 'lodash'
import BasicApi from '../basic-api'
import models from '../../models'

export default {
  authors: new BasicApi(models.author),
  collections: new BasicApi(models.collection),
  // todo: excludedMethods: ['add']
  books: new BasicApi(models.book),
  tags: new BasicApi(models.tag),
  // todo: excludedMethods: ['add', 'find', 'update', 'remove']
  users: new BasicApi(models.user),
}
