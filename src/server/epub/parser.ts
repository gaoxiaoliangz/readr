import fs from 'fs'
import xml2js from 'xml2js'
import _ from 'lodash'
const nodeZip = require('node-zip')
const toMarkdown = require('to-markdown')


function parseToc(tocObj) {
  const navMap = tocObj.ncx.navMap
  const rootNavPoint = navMap[0].navPoint

  console.log('navMap length', navMap.length);

  const toc = []

  const parseNavPoint = (navPoints) => {
    console.log(navPoints);
    
    const link = navPoints[0].content[0].$.src
    // const link = _.get(navPoints)

    if (navPoints.length > 1) {
      navPoints.slice(1).forEach(navPoint => {
        parseNavPoint(navPoint)
      })
    }

    toc.push(link)
  }

  parseNavPoint(rootNavPoint)

  return toc
}

export default function parser(fullPath) {
  return new Promise((resolve, reject) => {
    const file = fs.readFileSync(fullPath, 'binary')
    const zip = new nodeZip(file, { binary: true, base64: false, checkCRC32: true })

    // const content = zip.file('META-INF/container.xml')
    // const content = zip.file('content.opf').asText()
    // console.log(_.keys(zip.files))

    // const content = zip.file('text/part0002.html').asText()
    const content = zip.file('toc.ncx').asText()

    // resolve(toMarkdown(content))

    // resolve(content)
    xml2js.parseString(content, (err, result) => {
      // resolve(parseToc(result))
      resolve(result)
    })
  })
}
