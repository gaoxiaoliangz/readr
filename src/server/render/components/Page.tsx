import React from 'react'
import Html from './Html'
import _ from 'lodash'
import print from '../../utils/print'
import fs from 'fs'

const DEFAULT_TITLE = 'Readr'
const SCRIPT_CONTENT_ID = 'script-data'

const ASSET_PATH = '/built'
const ASSET_PATH_PROD = '/built_prod'

const SCRIPTS_PROD = ['react_kit.js', 'utils.js', 'app.js']
const SCRIPTS_DEV = ['react_kit.dll.js', 'utils.dll.js', 'app.js']

const GLOBAL_STYLES = ['base.global.css', 'vendor.global.css', 'modifiers.global.css']
const LOCAL_STYLES = ['app.css']

const CSS_MANIFEST_PATH = `${process.cwd()}/public/built_prod/css.manifest.json`
const CHUNKS_MANIFEST_PATH = `${process.cwd()}/public/built_prod/chunks.manifest.json`

const getManifest = () => {
  let chunkManifest = {}
  let cssManifest = {}

  try {
    cssManifest = JSON.parse(fs.readFileSync(CSS_MANIFEST_PATH, 'utf8'))
    chunkManifest = JSON.parse(fs.readFileSync(CHUNKS_MANIFEST_PATH, 'utf8'))
  } catch (error) {
    print.error(error.message)
  }

  return _.assign({}, chunkManifest, cssManifest)
}

const getHashedFilename = manifest => {
  return filename => {
    if (manifest[filename]) {
      return manifest[filename]
    }

    print.error(`File (${filename}) not included in manifest, will use original filename instead!`)
    return filename
  }
}

type TProps = {
  children?: any
  title?: string
  store?: any
  isProd?: boolean
  includeLocalStylesheets?: boolean
  bodyClass?: string
  appMarkup?: string
  scriptData?: {
    [globalName: string]: any
  }
  noScript?: boolean
}

function Page(props: TProps) {
  const {
    title, store, includeLocalStylesheets,
    bodyClass, appMarkup, scriptData, isProd,
    noScript
  } = props

  let manifest

  if (isProd) {
    manifest = getManifest()
  }

  let scripts = isProd
    ? SCRIPTS_PROD.map(getHashedFilename(manifest))
    : SCRIPTS_DEV

  const styles = isProd
    ? GLOBAL_STYLES.concat(LOCAL_STYLES).map(getHashedFilename(manifest))
    : (
      includeLocalStylesheets
        ? GLOBAL_STYLES.concat(LOCAL_STYLES)
        : GLOBAL_STYLES
    )

  let scriptContent = _.map(scriptData, (val, key) => {
    return `var ${key} = ${val};`
  }).join('')

  if (noScript) {
    scripts = []
    scriptContent = ''
  }

  const assetPath = isProd ? ASSET_PATH_PROD : ASSET_PATH

  return (
    <Html
      title={title}
      styles={styles}
      scripts={scripts}
      initialState={store && store.getState()}
      bodyClass={bodyClass || null}
      appMarkup={appMarkup}
      scriptContentId={SCRIPT_CONTENT_ID}
      scriptContent={scriptContent}
      assetPath={assetPath}
      />
  )
}

Page['defaultProps'] = {
  title: DEFAULT_TITLE,
  includeLocalStylesheets: true
}

export default Page
