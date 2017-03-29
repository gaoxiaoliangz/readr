import fs from 'fs'
import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/data-provider'
import * as helpers from '../helpers'
const basicBookAPI = makeBasicAPIMethods(dataProvider.Book)
import _ from 'lodash'
// import utils from '../utils'
// import { notFoundError } from '../helpers'
import parsers from '../parsers'
import request from '../../utils/network/request'

/**
 * helpers
 */
async function getAuthorId(authorName, description) {
  return dataProvider.Author.findOne({ name: authorName }).exec().then(async doc => {
    if (doc) {
      return doc._id
    } else {
      const result = await dataProvider.Author.utils.save({
        name: authorName,
        description
      })
      return result._id
    }
  })
}

/**
 * @param file: multer file boject
 */
const saveFileIfNotExsit = async (file) => {
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

/**
 * 3rd party API
 */
async function fetchBookByTitle(title: string) {
  const keyword = title

  const { json: bookJson } = await request(`https://api.douban.com/v2/book/search?q=${encodeURI(keyword)}&count=1`)
  return _.get(bookJson, ['books', 0], {})
}

async function fetchBookMetaByTitle(title: string) {
  const book = await fetchBookByTitle(title)
  return {
    title: _.get(book, 'title', ''),
    cover: _.get(book, ['images', 'large'], ''),
    description: _.get(book, 'summary', ''),
    authorInfo: _.get(book, 'author_intro', ''),
  }
}

/**
 * book api
 */
export function findBook(options) {
  const { id } = options
  return dataProvider.Book
    .findById(id)
    .populate('file authors')
    .then(result => {
      const data = _.omit(result.toObject(), ['file'])
      let contentType = 'txt'

      if (!result['file']) {
        contentType = ''
      } else if (result['file']['mimetype'] === 'application/epub+zip') {
        contentType = 'epub'
      }

      return _.assign({}, data, {
        content_type: contentType
      })
    })
}

// todo: should file be in object?
export async function addBook(options) {
  async function doSave({ title, authorName, fileId }) {
    const bookMeta = await fetchBookMetaByTitle(title)
    const authorId = await getAuthorId(authorName, bookMeta.authorInfo)
    const bookData = {
      ...bookMeta,
      ...{
        file: fileId,
        authors: [authorId]
      }
    }

    return dataProvider.Book.utils.save(bookData)
  }

  const { file } = options

  if (_.isEmpty(file)) {
    // todo
    return Promise.reject(new Error('No file provided!'))
  }

  const { fileId, buffer } = await saveFileIfNotExsit(file)

  // resolve file to get book meta
  if (file.mimetype === 'application/epub+zip') {
    const content = await parsers.epub(buffer)
    const authorName = content.meta.author
    const title = content.meta.title

    return doSave({ title, authorName, fileId })
  } else if (file.mimetype === 'text/plain') { // 处理 txt
    const fileContentArray = buffer.toString('utf-8').split('\n')
    const title = fileContentArray[0]
    const authorName = fileContentArray[1]

    return doSave({ title, authorName, fileId })
  } else {
    return Promise.reject(new Error('Unsupported file type!'))
  }
}

// interface BookMeta {
//   authors: string
//   cover: string
//   description: string
//   title: string
// }
// export async function editBookMeta(bookId, meta: BookMeta) {
//   await bookModel.findOne(bookId, true)
//   // todo: 多个作者情况
//   const { authorInfo } = await fetchBookMetaByTitle(meta.authors)
//   const authorId = await getAuthorId(meta.authors, authorInfo)
//   const bookMeta = {
//     ...meta,
//     ...{
//       authors: [authorId]
//     }
//   }

//   return bookModel.update(bookId, bookMeta, {
//     upsert: false
//   })
// }

// export async function resolveBookContent(bookId) {
//   const bookEntity = await bookModel.findOne(bookId)
//   const fileId = bookEntity.file._id
//   let bookContent

//   if (!fileId) {
//     // 从这边报出的 404 和下面的提示会不一样
//     // 下面报的 404 可能是文件被删了
//     // 这边报 404 则是一开始数据库里就没存 file
//     return Promise.reject(notFoundError('book'))
//   }

//   if (bookEntity.file.mimetype === 'application/epub+zip') {
//     const fileResult = await readFile(fileId, parsers.epub)
//     bookContent = _.omit(fileResult.content, ['meta'])
//   } else if (bookEntity.file.mimetype === 'text/plain') {
//     const fileResult = await readFile(fileId, parsers.txtContent)
//     bookContent = fileResult.content
//   } else {
//     return Promise.reject(new Error('Unsupported file type!'))
//   }

//   return _.assign({}, bookContent, { _id: bookId, content_id: fileId })
// }

// export function listBooks(page?) {
//   return bookModel.list({
//     page,
//     disablePagination: _.isNil(page),
//     mapping: entity => _.omit(entity, ['content', 'file'])
//   })
// }

// export async function removeBook(bookId: string) {
//   const book = await bookModel.findOne(bookId, true)
//   const fileId = book.file
//   await bookModel.remove(bookId)
//   return delFile(fileId)
// }

export default {
  ...basicBookAPI,
  ...{
    add: addBook,
    find: findBook
  }
}
