import React from 'react'
import Html from './Html'
import Root from './Root'
import _ from 'lodash'
import print from '../../utils/print'

type TProps = {
  children?: any
  title?: string
  store?: any
  renderProps?: any
  isProd?: boolean
  manifest?: any
}

const scriptsProd = ['react_kit.js', 'utils.js', 'app.js']
const scriptsDev = ['react_kit.dll.js', 'utils.dll.js', 'app.js']

const styleSheetsProd = ['base.global.css', 'vendor.global.css', 'app.css']
const styleSheetsDev = ['base.global.css', 'vendor.global.css']

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
  const { title, store, renderProps, manifest } = props
  const scripts = props.isProd
    ? scriptsProd.map(getHashedFilename(manifest))
    : scriptsDev

  const styles = props.isProd
    ? styleSheetsProd.map(getHashedFilename(manifest))
    : styleSheetsDev

  return (
    <Html
      title={title}
      styles={styles}
      scripts={scripts}
      initialState={store ? store.getState() : {}}
    >
      <Root
        store={store}
        renderProps={renderProps}
      />
    </Html>
  )
}

export default Page
