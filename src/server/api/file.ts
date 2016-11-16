import Model from '../models/model'
import fs from 'fs'
import * as schemas from '../data/schemas'
import _ from 'lodash'
import epubParser from '../epub/parser'

const UPLOADS_DIR = '__uploads__'
const BASE_DIR = process.cwd()

const fileModel = new Model(schemas.file)

// todo
// 拆分 parser
export function readFile(fileId) {
  return fileModel.findOne(fileId).then(result => {
    const filename = result.name
    const filepath = `${BASE_DIR}/${UPLOADS_DIR}/${filename}`
    const file = fs.readFileSync(filepath, 'utf8')

    return _.assign({}, result, {
      content: file
    }) as any
  })
}

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

export function readLoggedEpub(fileId) {
  return fileModel.findOne(fileId).then(result => {
    const filename = result.name
    const filepath = `${BASE_DIR}/${UPLOADS_DIR}/${filename}`

    return readEpub(filepath)
  })
}

export function readEpub(fullPathOrBinaryFile) {
  return epubParser(fullPathOrBinaryFile)
}
