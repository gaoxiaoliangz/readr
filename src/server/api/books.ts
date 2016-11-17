import Model from '../models/model'
import paginate from '../models/paginate'
import * as schemas from '../data/schemas'
import _ from 'lodash'
import utils from '../utils'
import { notFoundError } from '../helpers'
import { readFile } from './file'
import parsers from '../parsers'

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

export async function addBook(meta, fileId) {
  async function getAuthorId(authorName) {
    try {
      const authorEntity = await authorModel.findOne({ name: authorName })
      return authorEntity._id
    } catch (error) {
      const result = await authorModel.add({
        name: authorName
      })
      return result.ops[0]._id
    }
  }

  const mergeMeta = (title, authorId) => {
    return _.assign({}, {
      title,
      authors: [authorId],
      file: fileId
    }, meta)
  }

  async function doSave(title, authorName) {
    const authorId = await getAuthorId(authorName)
    return bookModel.add(mergeMeta(title, authorId))
  }

  if (fileId) { // resolve file to get book meta
    const fileResult = await readFile(fileId)

    if (fileResult.mimetype === 'application/epub+zip') {
      const file = await readFile(fileId, parsers.epubBinary)
      const parsedContent = file.content
      const authorName = parsedContent.meta.author

      return doSave(parsedContent.meta.title, authorName)
    } else if (fileResult.mimetype === 'text/plain') { // 处理 txt
      const file = await readFile(fileId)
      const title = file.content.split('\n')[0]
      const authorName = file.content.split('\n')[1]

      return doSave(title, authorName)
    } else {
      return Promise.reject(new Error('Unsupported file type!'))
    }
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
      return readFile(fileId, parsers.epubBinary).then(fileResult => {
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
