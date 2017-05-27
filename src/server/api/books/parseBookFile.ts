import parseEpub from '@gxl/epub-parser'

type Config = {
  buffer: any
  fileType: 'epub' | 'txt'
}
const parseBookFile = (bookId, config: Config) => {
  const { buffer, fileType } = config
  switch (fileType) {
    case 'epub':
      return parseEpub(buffer)

    default:
      throw new Error(`Unsupport file type ${fileType}`)
  }
}

export default parseBookFile
