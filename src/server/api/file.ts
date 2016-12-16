import Model from '../models/model'
import fs from 'fs'
import * as schemas from '../data/schemas'
import _ from 'lodash'

const UPLOADS_DIR = '__uploads__'
const BASE_DIR = process.cwd()

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
    // return _.assign({}, fileResult, {
    //   // TODO: 验证可用性
    //   content: fileResult.content.buffer.toString('utf-8')
    // })
  })
}

// TODO
export function delFile(fileId) {
  return fileModel.findOne(fileId).then(resultFile => {
    return fileModel.remove(fileId).then(result => {
      const filename = resultFile.name
      const filepath = `${BASE_DIR}/${UPLOADS_DIR}/${filename}`

      // 这边用 Sync，出错会抛出异常，如果用异步方法还要写一个 Promise 实例，做 error 判断，很麻烦
      // 不过那样的话能获取更多的控制权
      // 不过话说回来 Sync 用 try catch 也能实现同样的效果
      fs.unlinkSync(filepath)
      return result
    })
  }, error => {
    if (error.type === 'NotFoundError') {
      return {
        message: 'File record not found, probably because it doesn\'t exist, or hasn\'t been created in the first place!'
      }
    }
    return Promise.reject(error) as any
  })
}
