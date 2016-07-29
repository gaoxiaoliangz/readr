import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import getStore from './getStore'
import matchRoute from './matchRoute'
import NotFoundErrorPage from './components/NotFoundErrorPage'
import InternalServerErrorPage from './components/InternalServerErrorPage'
import Page from './components/Page'
const fs: any = require('fs')
import print from '../utils/print'
import _ from 'lodash'

function getManifest() {
  try {
    const chunkManifest = JSON.parse(fs.readFileSync(`${process.cwd()}/assets/built/chunks.manifest.json`, 'utf8'))
    const cssManifest = JSON.parse(fs.readFileSync(`${process.cwd()}/assets/built/css.manifest.json`, 'utf8'))

    return _.assign({}, chunkManifest, cssManifest)
  } catch (error) {
    print.error('Manifest file not found! ')
    return {}
  }
}

function renderHtml(reqUrl, routes, isProd) {
  return matchRoute(routes, reqUrl).then(result => {
    return getStore(result.renderProps).then(store => {
      return renderToStaticMarkup(
        <Page
          title="Readr"
          store={store}
          renderProps={result.renderProps}
          isProd={isProd}
          manifest={getManifest()}
          />
      )
    }, err => {
      return Promise.reject({
        htmlString: renderToStaticMarkup(<InternalServerErrorPage message={err.message} />),
        statusCode: 500
      })
    })
  }, err => {
    return Promise.reject({
      htmlString: renderToStaticMarkup(<NotFoundErrorPage message={err.message} />),
      statusCode: 404
    })
  })
}

export default renderHtml
