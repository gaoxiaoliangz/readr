import React from 'react'
import Html from './Html'
import _ from 'lodash'
import print from '../../server/utils/print'

type TProps = {
  children?: any
  title?: string
  store?: any
  isProd?: boolean
  manifest?: any
  includeLocalStylesheets?: boolean
  bodyClass?: string
  appMarkup: string
}

const scriptsProd = ['react_kit.js', 'utils.js', 'app.js']
const scriptsDev = ['react_kit.dll.js', 'utils.dll.js', 'app.js']

const globalStyleSheets = ['base.global.css', 'vendor.global.css', 'modifiers.global.css']
const localStyleSheets = ['app.css']

function getHashedFilename(manifest) {
  return filename => {
    if (manifest[filename]) {
      return manifest[filename]
    }

    print.error(`File (${filename}) not included in manifest, will use original filename instead!`)
    return filename
  }
}

function Page(props: TProps) {
  const { title, store, manifest, includeLocalStylesheets, bodyClass, appMarkup } = props
  const scripts = props.isProd
    ? scriptsProd.map(getHashedFilename(manifest))
    : scriptsDev

  const styles = props.isProd
    ? globalStyleSheets.concat(localStyleSheets).map(getHashedFilename(manifest))
    : (
      includeLocalStylesheets
        ? globalStyleSheets.concat(localStyleSheets)
        : globalStyleSheets
    )

  return (
    <Html
      title={title}
      styles={styles}
      scripts={scripts}
      initialState={store && store.getState()}
      bodyClass={bodyClass || null}
      appMarkup={appMarkup}
      />
  )
}

export default Page
