import React from 'react'
import Html from './Html'
import BodyContent from './BodyContent'
import _ from 'lodash'
import print from '../../server/utils/print'

type TProps = {
  children?: any
  title?: string
  store?: any
  renderProps?: any
  isProd?: boolean
  manifest?: any
  renderPageContent?: boolean
}

const scriptsProd = ['react_kit.js', 'utils.js', 'app.js']
const scriptsDev = ['react_kit.dll.js', 'utils.dll.js', 'app.js']

const styleSheetsProd = ['base.global.css', 'vendor.global.css', 'app.css', 'modifiers.global.css']
const styleSheetsDev = ['base.global.css', 'vendor.global.css', 'app.css', 'modifiers.global.css']

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
  const { title, store, renderProps, manifest, renderPageContent } = props
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
      initialState={store.getState()}
    >
      <BodyContent
        store={store}
        renderProps={renderProps}
        renderPageContent={renderPageContent}
      />
    </Html>
  )
}

export default Page
