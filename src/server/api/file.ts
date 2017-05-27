import fs from 'fs'
import _ from 'lodash'
import dataProvider from '../models/data-provider'
import * as helpers from '../helpers'

// import Model from '../models/model'
// import * as schemas from '../data/schemas'
// import _ from 'lodash'

// const fileModel = new Model(schemas.file)

// export function readFile(fileId, parser?: (file: any) => Promise<any>): Promise<any> {
//   return fileModel.findOne(fileId).then(fileResult => {
//     if (parser && typeof parser === 'function') {
//       const binaryFile = fileResult.content.buffer

//       return parser(binaryFile).then(content => {
//         return _.assign({}, fileResult, {
//           content
//         })
//       })
//     }

//     return fileResult
//   })
// }

// // TODO
// export function delFile(fileId) {
//   return fileModel.findOne(fileId).then(resultFile => {
//     return fileModel.remove(fileId)
//   }, error => {
//     if (error.type === 'NotFoundError') {
//       return {
//         message: 'File record not found, probably because it doesn\'t exist, or hasn\'t been created in the first place!'
//       }
//     }
//     return Promise.reject(error) as any
//   })
// }


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
