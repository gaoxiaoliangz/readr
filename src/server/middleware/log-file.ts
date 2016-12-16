import * as schemas from '../data/schemas'
import Model from '../models/model'
import _ from 'lodash'

const fileModel = new Model(schemas.file)

// @req#loggedFileId
export default function logFile(req, res, next) {
  const file = req.file

  req.apiResults = fileModel
    .add({
      name: file.filename,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    })
    .then(result => {
      const loggedFileId = _.get(result, ['ops', 0])
      if (!loggedFileId) {
        // TODO
        // throw new Error('File not Found!')
        const err = new Error('File not Found!')
        next(err)
      } else {
        req.loggedFileId = loggedFileId
        next()
      }
    })
    .catch(error => {
      next(error)
    })
}
