import fs from 'fs'
import xml2js from 'xml2js'
import _ from 'lodash'
const nodeZip = require('node-zip')
const toMarkdown = require('to-markdown')

const xmlParser = new xml2js.Parser()

const hTagConverter = {
  filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

  replacement: function (innerHTML, node) {
    let hLevel = node.tagName.charAt(1)
    let hPrefix = ''
    const hEnd = ' TODO'

    for (let i = 0; i < hLevel; i++) {
      hPrefix += '#'
    }

    return '\n' + hPrefix + ' ' + innerHTML + hEnd + '\n\n'
  }
}

const parseToc = tocObj => {
  const rootNavPoints = _.get(tocObj, ['ncx', 'navMap', '0', 'navPoint'], [])

  function parseNavPoint(navPoint) {
    const url = _.get(navPoint, ['content', '0', '$', 'src'], '')
    const hash = url.split('#')[1]
    const fileSrc = url.split('#')[0]
    const src = fileSrc.split('/')[1].split('.')[0]

    const label = _.get(navPoint, ['navLabel', '0', 'text', '0'])
    const id = _.get(navPoint, ['$', 'id'])
    const order = _.get(navPoint, ['$', 'playOrder'])

    let children = navPoint.navPoint

    if (children) {
      children = parseNavPoints(children)
    }

    return {
      src,
      fileSrc,
      hash,
      label,
      id,
      order,
      children
    }
  }

  function parseNavPoints(navPoints) {
    return navPoints.map(point => {
      return parseNavPoint(point)
    })
  }

  return parseNavPoints(rootNavPoints)
}

const resolveContent = zipPath => zipInstance => {
  const content = zipInstance.file(zipPath)

  if (content) {
    return toMarkdown(content.asText(), {
      converters: [hTagConverter]
    })
  }

  return ''
}

const flattenToc = parsedToc => {
  const list = []

  const push = infoList => {
    infoList.forEach(item => {
      list.push(_.omit(item, 'children'))
      if (item.children) {
        push(item.children)
      }
    })
  }

  push(parsedToc)
  return list
}

const extractZipContent = filepath => zip => {
  const file = zip.file(filepath)
  if (file) {
    return file.asText()
  } else {
    throw `${filepath} not found!`
  }
}

const getOpsRoot = opfPath => {
  let opsRoot = ''
  // set the opsRoot for resolving paths
  if (opfPath.match(/\//)) { // not at top level
    opsRoot = opfPath.replace(/\/([^\/]+)\.opf/i, '')
    if (!opsRoot.match(/\/$/)) { // does not end in slash, but we want it to
      opsRoot += '/'
    }
    if (opsRoot.match(/^\//)) {
      opsRoot = opsRoot.replace(/^\//, '')
    }
    // 去掉 '/'
    opsRoot = opsRoot.substr(0, opsRoot.length - 1)
  }
  return opsRoot
}

const xmlToJs = xml => {
  return new Promise<any>((resolve, reject) => {
    xmlParser.parseString(xml, (err, object) => {
      if (err) {
        reject(err)
      } else {
        resolve(object)
      }
    })
  })
}

export function epubBinaryParser(binaryFile) {
  const zip = new nodeZip(binaryFile, { binary: true, base64: false, checkCRC32: true })
  const containerXml = extractZipContent('META-INF/container.xml')(zip)

  return xmlToJs(containerXml).then(containerJSON => {
    const opfPath = containerJSON.container.rootfiles[0].rootfile[0]['$']['full-path']
    const root = getOpsRoot(opfPath)
    const contentXml = extractZipContent(`${root}/content.opf`)(zip)
    const tocXml = extractZipContent(`${root}/toc.ncx`)(zip)

    return xmlToJs(tocXml).then(tocJSON => {
      const parsedToc = parseToc(tocJSON)
      const flatToc = flattenToc(parsedToc)

      const content = _(flatToc)
        .map(item => _.pick(item, ['src', 'fileSrc']))
        .union()
        .map(item => ({
          src: item['src'],
          markdown: resolveContent(item['fileSrc'])(zip)
        }))
        .value()

      return xmlToJs(contentXml).then(contentJSON => {
        const metadata = _.get(contentJSON, ['package', 'metadata'], [])
        const title = _.get(metadata[0], ['dc:title', 0])
        let author = _.get(metadata[0], ['dc:creator', 0])

        if (typeof author === 'object') {
          author = _.get(author, ['_'])
        }

        const publisher = _.get(metadata[0], ['dc:publisher', 0])
        const meta = {
          title,
          author,
          publisher
        }

        return ({
          meta,
          toc: parsedToc.map(item => _.omit(item, ['fileSrc'])),
          flatToc: flatToc.map(item => _.omit(item, ['fileSrc'])),
          content
        })
      })
    })
  })
}

export default function parser(fullPath) {
  const binaryFile = fs.readFileSync(fullPath, 'binary')
  return epubBinaryParser(binaryFile)
}
