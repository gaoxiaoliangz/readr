import _ from 'lodash'
import dataProvider from '../../models/data-provider'
import genPages from './genPages'
import parseBookFile from './parseBookFile'

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
      const fileType = mapMimetypeToFileType(file.mimetype)

      if (includeToc || includeRaw || includePages) {
        const parsedFile = await parseBookFile(id, {
          buffer: file.content,
          fileType
        })

        const rawContent = includeRaw && parsedFile
        const toc = includeToc && parsedFile.structure
        const pages = includePages && genPages(id, {
          ...renderConfig,
          sections: parsedFile.sections
        })

        return {
          ..._result,
          fileType,
          rawContent,
          toc,
          pages
        }
      }

      return {
        ..._result,
        fileType
      }
    })
}
