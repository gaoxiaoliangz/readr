import fs from 'fs'
import _ from 'lodash'
import { makeBasicAPIMethods } from './utils'
import dataProvider from '../models/data-provider'
import * as helpers from '../helpers'
import { notFoundError } from '../helpers'
import parsers from '../../parsers'
import request from '../../utils/network/request'
import pinyin from 'pinyin'
import validator from 'validator'

const basicBookAPI = makeBasicAPIMethods(dataProvider.Book)

/**
 * helpers
 */
async function getAuthorId(authorName, description) {
  return dataProvider.Author.findOne({ name: authorName }).exec().then(async doc => {
    if (doc) {
      return doc._id
    } else {
      const slug = pinyin(
        authorName, {
          style: pinyin.STYLE_NORMAL
        })
        .map(seg => seg[0])
        // isAlphanumeric checks args lenght to determine locale
        // if more than one there will be a problem, and an error
        // will be thrown
        .filter(str => validator.isAlphanumeric(str))
        .join('')

      const result = await dataProvider.Author.utils.save({
        name: authorName,
        slug,
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

const parseBookResult = (result) => {
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
}

/**
 * book api
 */
export function findBook(options) {
  const { id } = options
  return dataProvider.Book
    .findById(id)
    .populate('file authors')
    .then(parseBookResult)
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
    const epub = await parsers.epub(buffer)
    const { metadata } = epub
    const authorName = metadata.author
    const title = metadata.title

    return doSave({ title, authorName, fileId })
  } else if (file.mimetype === 'text/plain') {
    const fileContentArray = buffer.toString('utf-8').split('\n')
    const title = fileContentArray[0]
    const authorName = fileContentArray[1]

    return doSave({ title, authorName, fileId })
  } else {
    return Promise.reject(new Error('Unsupported file type!'))
  }
}

export async function resolveContent(options) {
  const { id: bookId } = options
  const bookEntity = await dataProvider.Book.utils.findById(bookId) as any
  const fileId = bookEntity.file
  const file = await dataProvider.File.utils.findById(fileId) as any
  let bookContent

  if (!fileId) {
    return Promise.reject(notFoundError('book'))
  }

  if (file.mimetype === 'application/epub+zip') {
    bookContent = await parsers.epub(file.content)
  } else if (bookEntity.file.mimetype === 'text/plain') {
    bookContent = await parsers.txt(file.content)
  } else {
    return Promise.reject(new Error('Unsupported file type!'))
  }

  return {
    _id: bookEntity._id,
    file_id: fileId,
    content: bookContent
  }
}

export function listBooks(options) {
  return dataProvider.Book.utils
    .listWithOptions({
      page: options.page,
      populate: 'file authors',
      parser: parseBookResult
    })
}

export default {
  ...basicBookAPI,
  ...{
    add: addBook,
    find: findBook,
    list: listBooks,
    resolveContent
  }
}
