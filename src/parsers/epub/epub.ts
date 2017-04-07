import fs from 'fs'
import xml2js from 'xml2js'
import _ from 'lodash'
import nodeZip from 'node-zip'
// import parseHref from '../href'

const xmlParser = new xml2js.Parser()

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

const resolveRoot = opfPath => {
  let root = ''
  // set the opsRoot for resolving paths
  if (opfPath.match(/\//)) { // not at top level
    root = opfPath.replace(/\/([^\/]+)\.opf/i, '')
    if (!root.match(/\/$/)) { // 以 '/' 结尾，下面的 zip 路径写法会简单很多
      root += '/'
    }
    if (root.match(/^\//)) {
      root = root.replace(/^\//, '')
    }
  }
  return root
}

class Epub {
  zip: any // nodeZip instance
  opfPath: string
  root: string
  content: GeneralObject
  manifest: any[]
  spine: any[]
  toc: GeneralObject
  metadata: GeneralObject

  constructor(buffer) {
    this.zip = new nodeZip(buffer, { binary: true, base64: false, checkCRC32: true })
  }

  resolveAsText(path) {
    const file = this.zip.file(path)
    if (file) {
      return file.asText()
    } else {
      throw new Error(`${path} not found!`)
    }
  }

  async _resolveXmlAsJSON(path) {
    const xml = this.resolveAsText(path)
    return xmlToJs(xml)
  }

  async _resolveOpfPath() {
    const container = await this._resolveXmlAsJSON('META-INF/container.xml')
    const opfPath = container.container.rootfiles[0].rootfile[0]['$']['full-path']
    return opfPath
  }

  _resolveManifest() {
    return _.get(this.content, ['package', 'manifest', 0, 'item'], [])
      .map(item => item.$) as any[]
  }

  _resolveSpine() {
    return _.get(this.content, ['package', 'spine', 0, 'itemref'], [])
      .map(item => {
        return item.$.idref
      })
  }

  async parse() {
    this.opfPath = await this._resolveOpfPath()
    this.root = resolveRoot(this.opfPath)
    this.content = await this._resolveXmlAsJSON(this.opfPath)
    this.manifest = this._resolveManifest()
    this.spine = this._resolveSpine()

    const tocID = _.get(this.content, ['package', 'spine', 0, '$', 'toc']) as string
    const tocPath = _.find(this.manifest, { id: tocID }).href
    this.toc = this._resolveXmlAsJSON(`${this.root}${tocPath}`)
    this.metadata = _.get(this.content, ['package', 'metadata'], [])
  }
}

interface ParserOptions {
  type?: 'binaryString' | 'path' | 'buffer'
}
export default function parserWrapper(target: string | Buffer, options: ParserOptions = {}) {
  // seems 260 is the length limit of old windows standard
  // so path length is not used to determine whether it's path or binary string
  // the downside here is that if the filepath is incorrect, it will be treated as binary string by default
  // but it can use options to define the target type
  let _target = target
  if (options.type === 'path' || (typeof target === 'string' && fs.existsSync(target))) {
    _target = fs.readFileSync(target as string, 'binary')
  }
  return new Epub(_target).parse()
}
