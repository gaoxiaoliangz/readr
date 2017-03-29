import fs from 'fs'
import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/data-provider'
import * as helpers from '../helpers'
const basicBookAPI = makeBasicAPIMethods(dataProvider.Book)

// import Model from '../models/model'
// import paginate from '../models/paginate'
// import * as schemas from '../data/schemas'
import _ from 'lodash'
// import utils from '../utils'
// import { notFoundError } from '../helpers'
// import { readFile, delFile } from './file'
import parsers from '../parsers'
import request from '../../utils/network/request'

// const bookModel = new Model(schemas.book)
// const fileModel = new Model(schemas.file)
// const progressModel = new Model(schemas.progress)
// const authorModel = new Model(schemas.author)

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
    cover: _.get(book, ['images', 'large']),
    description: _.get(book, 'summary'),
    authorInfo: _.get(book, 'author_intro'),
  }
}


// /**
//  * apis
//  */
// export function findBook(id) {
//   return bookModel.findOne(id).then(result => {
//     const data = _.omit(result, ['file'])
//     let contentType = 'txt'

//     if (!result.file) {
//       contentType = ''
//     } else if (result.file.mimetype === 'application/epub+zip') {
//       contentType = 'epub'
//     }

//     return _.assign({}, data, {
//       content_type: contentType
//     })
//   })
// }

export async function addBook(object, options) {

  // const mergeBookMeta = (title, authorId, extMeta) => {
  //   return _.assign({}, {
  //     title,
  //     authors: [authorId],
  //     file: fileId
  //   }, meta, extMeta)
  // }

  // async function doSave(title, authorName) {
  //   const bookMeta = await fetchBookMetaByTitle(title)
  //   const authorId = await getAuthorId(authorName, bookMeta.authorInfo)
  //   const bookData = mergeBookMeta(title, authorId, _.omit(bookMeta, 'authorInfo'))

  //   return dataProvider.Book.utils.save(bookData)
  // }
  const { file: { path } } = options
  // return { file }

  const buffer = fs.readFileSync(path)

  const content = parsers.epub(buffer)

  const hash = helpers.computeHash(buffer.toString())

  return content.then(data => {
    return data
  })


  // if (fileId) { // resolve file to get book meta
  //   const fileResult = await readFile(fileId)

  //   if (fileResult.mimetype === 'application/epub+zip') {
  //     try {
  //       const file = await readFile(fileId, parsers.epub)
  //       const parsedContent = file.content
  //       const authorName = parsedContent.meta.author

  //       return doSave(parsedContent.meta.title, authorName)
  //     } catch (error) {
  //       await fileModel.remove(fileId)
  //       throw error
  //     }
  //   } else if (fileResult.mimetype === 'text/plain') { // 处理 txt
  //     const file = await readFile(fileId)
  //     const fileContentArray = file.content.buffer.toString('utf-8').split('\n')
  //     const title = fileContentArray[0]
  //     const authorName = fileContentArray[1]

  //     return doSave(title, authorName)
  //   } else {
  //     return Promise.reject(new Error('Unsupported file type!'))
  //   }
  // }

  // todo
  // return Promise.reject(new Error('No file provided!'))
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
    add: addBook
  }
}
