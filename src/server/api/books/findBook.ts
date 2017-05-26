import _ from 'lodash'
import dataProvider from '../../models/data-provider'
import genPages from './genPages'
import parseBookFile from './parseBookFile'
import { queryBoolean, validateNonNullOptions } from '../utils'
import md5 from 'md5'

const mapMimetypeToFileType = (mimetype) => {
  if (mimetype === 'application/epub+zip') {
    return 'epub'
  } else if (mimetype === 'text/plain') {
    return 'txt'
  }
  return
}

type FindBookOptions = {
  id: string
  includeToc?: boolean
  includePages?: boolean
  includeRaw?: boolean

  // render config
  pageHeight?: number
  width?: number
  fontSize?: number
  lineHeight?: number
}

type Book = {
  [key: string]: any
  fileType
  rawContent?
  toc?
  pages?
}

const parseBookFileMemoized = _.memoize(parseBookFile, (bookId) => bookId)
const genPagesMemoized = _.memoize(genPages, (config) => md5(JSON.stringify(_.omit(config, ['sections']))))

export default async function findBook(options: FindBookOptions): Promise<Book> {
  if (process.env.NODE_ENV !== 'production') {
    console.time('api:findBooks')
  }
  const nonNullFieldList = ['pageHeight', 'width', 'fontSize', 'lineHeight']
  const { id, includePages: _includePages, includeRaw: _includeRaw, includeToc: _includeToc } = options
  const includePages = queryBoolean(_includePages)
  const includeRaw = queryBoolean(_includeRaw)
  const includeToc = queryBoolean(_includeToc)
  const validateErr = validateNonNullOptions(options, nonNullFieldList)
  const renderConfig = {
    pageHeight: Number(options.pageHeight),
    fontSize: Number(options.fontSize),
    lineHeight: Number(options.lineHeight),
    width: Number(options.width)
  }

  if (validateErr) {
    return Promise.reject(validateErr)
  }

  return dataProvider.Book
    .findById(id)
    .populate('file authors')
    .then(async result => {
      // todo: notfound
      if (!result) {
        return Promise.reject(new Error('Book not found!'))
      }

      const _result = result.toObject()
      const file = _result['file'] || {}
      const fileType = mapMimetypeToFileType(file.mimetype)

      if (includeToc || includeRaw || includePages) {
        // parse book file
        const parsedFile = await parseBookFileMemoized(id, {
          buffer: file.content.buffer,
          fileType
        })

        const rawContent = includeRaw && parsedFile || undefined
        const toc = includeToc && parsedFile.structure || undefined

        // generate pages
        const pages = includePages && await genPagesMemoized({
          ...renderConfig,
          bookId: id,
          sections: parsedFile.sections
        })
        if (process.env.NODE_ENV !== 'production') {
          console.timeEnd('api:findBooks')
        }
        return {
          ..._.omit(_result, 'file'),
          fileType,
          rawContent,
          toc,
          pages
        } as Book
      }

      if (process.env.NODE_ENV !== 'production') {
        console.timeEnd('api:findBooks')
      }
      return {
        ..._.omit(_result, 'file'),
        fileType
      }
    })
}
