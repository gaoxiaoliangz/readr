import React from 'react'
import Html from './Html'
import _ from 'lodash'
import print from '../../server/utils/print'

const DEFAULT_TITLE = 'Readr'
const SCRIPT_CONTENT_ID = 'script-data'

const ASSET_PATH = '/built'
const ASSET_PATH_PROD = '/built_prod'

const SCRIPTS_PROD = ['react_kit.js', 'utils.js', 'app.js']
const SCRIPTS_DEV = ['react_kit.dll.js', 'utils.dll.js', 'app.js']

const GLOBAL_STYLES = ['base.global.css', 'vendor.global.css', 'modifiers.global.css']
const LOCAL_STYLES = ['app.css']

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
  manifest?: any
  includeLocalStylesheets?: boolean
  bodyClass?: string
  appMarkup?: string
  scriptData?: {
    [globalName: string]: any
  }
}

function Page(props: TProps) {
  const { title, store, manifest, includeLocalStylesheets, bodyClass, appMarkup, scriptData, isProd } = props

  const scripts = isProd
    ? SCRIPTS_PROD.map(getHashedFilename(manifest))
    : SCRIPTS_DEV

  const styles = isProd
    ? GLOBAL_STYLES.concat(LOCAL_STYLES).map(getHashedFilename(manifest))
    : (
      includeLocalStylesheets
        ? GLOBAL_STYLES.concat(LOCAL_STYLES)
        : GLOBAL_STYLES
    )

  const scriptContent = _.map(scriptData, (val, key) => {
    return `var ${key} = ${val};`
  }).join('')

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
