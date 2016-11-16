import Model from '../models/model'
import paginate from '../models/paginate'
import * as schemas from '../data/schemas'
import _ from 'lodash'
import utils from '../utils'
import { notFoundError } from '../helpers'
import { readLoggedEpub, readFile } from './file'
import { epubBinaryParser } from '../epub/parser'

const bookModel = new Model(schemas.book)
const progressModel = new Model(schemas.progress)
const authorModel = new Model(schemas.author)

export function findBook(id) {
  return bookModel.findOne(id).then(result => {
    const data = _.omit(result, ['file'])
    let contentType = 'txt'

    if (!result.file) {
      contentType = ''
    } else if (result.file.mimetype === 'application/epub+zip') {
      contentType = 'epub'
    }

    return _.assign({}, data, {
      content_type: contentType
    })
  })
}

export function addBook(meta, fileId /* use md5 to resolve */, binaryFile?) {
  // resolve file to get book meta
  if (binaryFile) {
    return epubBinaryParser(binaryFile).then(parsedContent => {
      const author = parsedContent.meta.author
      const mergeMeta = authorId => {
        return _.assign({}, {
          title: parsedContent.meta.title,
          authors: [authorId],
          file: fileId
        }, meta)
      }

      return authorModel.findOne({ name: author }).then(authorEntity => {
        const authorId = authorEntity._id
        return bookModel.add(mergeMeta(authorId))
      }, err => {
        return authorModel
          .add({
            name: author
          })
          .then(result => {
            const authorId = result.ops[0]._id
            return bookModel.add(mergeMeta(authorId))
          })
      })
    })
  }

  return bookModel.add(meta)
}

export function resolveBookContent(id) {
  return bookModel.findOne(id).then(result => {
    const fileId = result.file._id

    if (!fileId) {
      // 从这边报出的 404 和下面的提示会不一样
      // 下面报的 404 可能是文件被删了
      // 这边报 404 则是一开始数据库里就没存 file
      return Promise.reject(notFoundError('book'))
    }

    if (result.file.mimetype === 'application/epub+zip') {
      return readLoggedEpub(fileId).then(fileResult => {
        return fileResult
      })
    }

    return readFile(fileId).then(fileResult => {
      const fileContent = fileResult.content

      return _(result)
        .omit(['file'])
        .assign({
          content: {
            raw: fileContent
          }
        })
        .value()
    })
  })
}

export function listBooks(page?) {
  return bookModel.list({
    page,
    disablePagination: _.isNil(page),
    mapping: entity => _.omit(entity, 'content')
  })
}

export function listShelfBooks(userId, page?) {
  return progressModel.listRaw({ query: { user_id: userId } }).then(results => {
    if (results.length === 0) {
      return results
    }

    return Promise
      .all(results
        .sort(utils.sortByDate())
        .map(result => {
          return bookModel.findOne(result.book_id).then(res => {
            return res
          }, error => {
            // 如果错误不是 404 也输出空的 entity
            return bookModel.outputEmpty(result.book_id)
          })
        })
      )
      .then(res => {
        return paginate(res.map(entity => _.omit(entity, ['content'])), {
          page
        }) as Object
      })
  })
}
