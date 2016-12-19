import Model from '../models/model'
import * as schemas from '../data/schemas'
import _ from 'lodash'

const fileModel = new Model(schemas.file)

export function readFile(fileId, parser?: (file: any) => Promise<any>): Promise<any> {
  return fileModel.findOne(fileId).then(fileResult => {
    if (parser && typeof parser === 'function') {
      const binaryFile = fileResult.content.buffer

      return parser(binaryFile).then(content => {
        return _.assign({}, fileResult, {
          content
        })
      })
    }

    return fileResult
  })
}

// TODO
export function delFile(fileId) {
  return fileModel.findOne(fileId).then(resultFile => {
    return fileModel.remove(fileId)
  }, error => {
    if (error.type === 'NotFoundError') {
      return {
        message: 'File record not found, probably because it doesn\'t exist, or hasn\'t been created in the first place!'
      }
    }
    return Promise.reject(error) as any
  })
}
