import _ from 'lodash'
import dataProvider from '../../models/data-provider'
import parsers from '../../../parsers'
import renderPages from './renderPages'

type FindBookOptions = {
  id: string
  includeToc?: boolean
  includePages?: boolean
  includeRaw?: boolean
  renderConfig?: {
    pageHeight: number
    width: number
    fontSize: number
    lineHeight: number
  }
}
export default async function findBook(options: FindBookOptions) {
  const { id, includePages, includeRaw, includeToc, renderConfig } = options

  return dataProvider.Book
    .findById(id)
    .populate('file authors')
    .then(async result => {
      const _result = result.toObject()
      const file = _result['file'] || {}
      let filetype
      let toc
      let pages
      let rawContent

      if (file.mimetype === 'application/epub+zip') {
        filetype = 'epub'
      } else if (file.mimetype === 'text/plain') {
        filetype = 'txt'
      }

      if (includeToc || includeRaw || includePages) {
        let _rawContent

        if (filetype === 'epub') {
          _rawContent = await parsers.epub(file.content)
        } else if (filetype === 'txt') {
          _rawContent = await parsers.txt(file.content)
        }

        if (_rawContent) {
          if (includeRaw) {
            rawContent = _rawContent
          }

          if (includeToc) {
            toc = _rawContent.toc
          }

          if (includePages) {
            pages = renderPages(id, renderConfig)
          }
        }
      }

      return {
        ..._result,
        filetype,
        toc,
        pages
      }
    })
}
