import fs from 'fs'
import _ from 'lodash'
import dataProvider from '../models/dataProvider'
import * as helpers from '../helpers'

/**
 * @param file: multer file boject
 */
export const saveFileIfNotExsit = async (file) => {
  const buffer = fs.readFileSync(file.path)
  const hash = helpers.computeHash(buffer.toString())
  const fileResult = await dataProvider.File.findOne({ hash }).exec()
  let fileId

  if (fileResult) {
    fileId = fileResult._id
  } else {
    const data = {
      filename: file.originalname,
      // 会被转换为 binData 的 BSON type
      content: buffer,
      mimetype: file.mimetype,
      size: file.size,
      encoding: file.encoding,
      hash
    }
    const result = await dataProvider.File.utils.save(data)
    fileId = result._id
  }

  return { fileId, buffer }
}
