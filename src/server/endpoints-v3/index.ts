import * as api from '../api-v3'
import paginate from './paginate'
import _ from 'lodash'

export const listBooks = (req, res, next) => {
  api.listBooks({}).then(entities => {
    req.apiResults = paginate(_.omit(entities, 'content'))
    next()
  }, err => {
    req.apiError = err
    next()
  })
}
