import React, { Component } from 'react'
import AppDoc from './AppDoc'
import AppError from './AppError'
import path from 'path'

import manifest from '../../build/static/assets.manifest.json'

const resolveDevAssets = (assetName) => {
  const assetUrl = `http://localhost:${process.env.WEBPACK_PORT}/static/`

  return assetUrl + assetName
}

let cssAssets
// let jsAssets

if (process.env.NODE_ENV === 'production') {
  const prefix = '/static'
  cssAssets = [
    path.join(prefix, manifest['base.global.css']),
    path.join(prefix, manifest['vendor.global.css']),
    path.join(prefix, manifest['modifiers.global.css']),
    path.join(prefix, manifest['app.css'])
  ]
  // jsAssets = [
  //   path.join(prefix, manifest['vendor.js']),
  //   path.join(prefix, manifest['app.js'])
  // ]
} else {
  cssAssets = [
    resolveDevAssets('css/base.global.css'),
    resolveDevAssets('css/vendor.global.css'),
    resolveDevAssets('css/modifiers.global.css'),
    resolveDevAssets('css/app.css')
  ]
  // jsAssets = [
  //   resolveDevAssets('js/vendor.dll.js'),
  //   resolveDevAssets('js/app.js')
  // ]
}

interface Props {
  error: Error
}

// todo: print error stack in dev mode
export default class Page500 extends Component<Props, void> {
  render() {
    const { error } = this.props
    return (
      <AppDoc
        title="500 Server Error"
        appMarkup={(
          <AppError
            title="500"
            message={error.message}
            stack={error.stack}
          />
        )}
        link={cssAssets}
      />
    )
  }
}
