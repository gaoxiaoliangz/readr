import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import getStore from './getStore'
import matchRoute from './matchRoute'
import NotFoundErrorPage from '../../isomorphic/containers/NotFoundErrorPage'
import InternalServerErrorPage from '../../isomorphic/containers/InternalServerErrorPage'
import Page from '../../isomorphic/containers/Page'
import print from '../utils/print'
import _ from 'lodash'
const fs: any = require('fs')

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

type RenderConfig = {
  reqUrl: string
  routes: Object
  isProd: boolean
  fetchData: boolean
}
function renderHtml(config: RenderConfig) {
  const { reqUrl, routes, isProd, fetchData } = config

  return matchRoute(routes, reqUrl).then(result => {
    // if (renderPageContent) {
      return getStore(result.renderProps, fetchData).then(store => {
        return renderToStaticMarkup(
          <Page
            title="Readr"
            store={store}
            renderProps={result.renderProps}
            isProd={isProd}
            manifest={isProd && getManifest() }
            renderPageContent={fetchData}
            />
        )
      }, err => {
        return Promise.reject({
          htmlString: renderToStaticMarkup(<InternalServerErrorPage message={err.message} />),
          statusCode: 500
        })
      })
    // }

    // 直接输出不获取 api 数据
    // return renderToStaticMarkup(
    //   <Page
    //     title="Readr"
    //     store={{}}
    //     renderProps={result.renderProps}
    //     isProd={isProd}
    //     manifest={isProd && getManifest() }
    //     />
    // )
  }, err => {
    return Promise.reject({
      htmlString: renderToStaticMarkup(<NotFoundErrorPage message={err.message} />),
      statusCode: 404
    })
  })
}

export default renderHtml
