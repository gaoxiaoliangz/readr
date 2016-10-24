import * as api from '../api-v3'
import paginate from './paginate'
import _ from 'lodash'

export const listBooks = (req, res, next) => {
  api.listBooks({}).then(entities => {
    req.apiResults = paginate(_.map(entities, entity =>
      _.omit(entity, 'content')))
    next()
  }, err => {
    req.apiError = err
    next()
  })
}

export const listCollections = (req, res, next) => {
  api.listCollection({}).then(entities => {
    req.apiResults = paginate(_.map(entities, entity => {
      return _.assign({}, entity, {
        items: entity['items'].map(item => _.omit(item, 'content'))
      })
    }))
    next()
  }, err => {
    req.apiError = err
    next()
  })
}
