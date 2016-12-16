import * as schemas from '../data/schemas'
import Model from '../models/model'
import _ from 'lodash'
import * as helpers from '../helpers'

const fileModel = new Model(schemas.file)

// @req#loggedFileId
export default function logFile(req, res, next) {
  const file = req.file
  const hash = helpers.computeHash(file.buffer)
  const data = {
    filename: file.originalname,
    // 会被转换为 binData 的 BSON type
    content: file.buffer,
    mimetype: file.mimetype,
    size: file.size,
    encoding: file.encoding,
    hash
  }

  fileModel.findOne({ hash }).then(result => {
    req.loggedFileId = result._id
    next()
  }, notFoundError => {
    // TODO: 不使用 404
    // 为了确定是未找到而不是其他错误需要做额外的判断
    fileModel
      .add(data)
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
  })
}
