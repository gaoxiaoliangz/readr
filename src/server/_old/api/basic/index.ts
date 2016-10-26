import _ from 'lodash'
import BasicApi from '../basic-api'
import models from '../../models'

export default {
  authors: new BasicApi(models.author),
  collections: new BasicApi(models.collection),
  books: new BasicApi(models.book),
  tags: new BasicApi(models.tag),
  users: new BasicApi(models.user),
}
