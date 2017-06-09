import _ from 'lodash'
import * as helpers from '../helpers'
import dataProvider from '../models/dataProvider'

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

  dataProvider.File.findOne({ hash }).exec(result => {
    if (!_.isEmpty(result)) {
      const err = new Error('File already exists!')
      next(err)
    } else {
      dataProvider.File.utils.save(data).then(result2 => {
        // todo
        // result might have a different shape
        const loggedFileId = _.get(result2, ['ops', 0, '_id'])
        if (!loggedFileId) {
          // TODO
          const err = new Error('File not Found!')
          next(err)
        } else {
          req.loggedFileId = loggedFileId
          next()
        }
      })
    }
  })

  // fileModel.findOne({ hash }).then(result => {
  //   // req.loggedFileId = result._id
  //   // TODO: 404 处理
  //   const err = new Error('File already exists!')
  //   next(err)
  // }, notFoundError => {
  //   // TODO: 不使用 404
  //   // 为了确定是未找到而不是其他错误需要做额外的判断
  //   fileModel
  //     .add(data)
  //     .then(result => {
  //       const loggedFileId = _.get(result, ['ops', 0, '_id'])
  //       if (!loggedFileId) {
  //         // TODO
  //         // throw new Error('File not Found!')
  //         const err = new Error('File not Found!')
  //         next(err)
  //       } else {
  //         req.loggedFileId = loggedFileId
  //         next()
  //       }
  //     })
  //     .catch(error => {
  //       next(error)
  //     })
  // })
}
