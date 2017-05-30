import _ from 'lodash'
import epubParser from '@gxl/epub-parser'
import dataProvider from '../../models/data-provider'
import { saveFileIfNotExsit } from '../file'
import { getAuthorId, getBookMetaByTitle } from './helpers'

// todo: should file be in object?
export default async function addBook(options) {
  async function doSave({ title, authorName, fileId }) {
    const bookMeta = await getBookMetaByTitle(title)
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
    const epub = await epubParser(buffer)
    const { info } = epub
    const authorName = info.author
    const title = info.title

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
