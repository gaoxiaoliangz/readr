import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import getStore from './get-store'
import matchRoute from './match-route'
import NotFoundErrorPage from '../../isomorphic/containers/NotFoundErrorPage'
import InternalServerErrorPage from '../../isomorphic/containers/InternalServerErrorPage'
import Page from '../../isomorphic/containers/Page'
import print from '../utils/print'
import _ from 'lodash'
import DocContainer from '../../isomorphic/containers/DocContainer'
import ServerSideAppRoot from '../../isomorphic/containers/ServerSideAppRoot'
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
  isHot: boolean
  userSession: {
    role: string
  }
}
function renderHtml(config: RenderConfig) {
  const { reqUrl, routes, isProd, fetchData, isHot, userSession } = config

  return matchRoute(routes, reqUrl).then(result => {
    const { renderProps, redirectLocation } = result

    if (redirectLocation) {
      return Promise.resolve({ redirectLocation }) as any
    }

    return getStore(renderProps, fetchData, userSession).then(store => {
      const page = (bodyClass, title, appMarkup) => (
        <Page
          title={title}
          store={store}
          isProd={isProd}
          manifest={isProd && getManifest() }
          includeLocalStylesheets={!isHot}
          bodyClass={bodyClass}
          appMarkup={appMarkup}
          />
      )

      const appRoot = (
        <ServerSideAppRoot
          renderPageContent={fetchData}
          renderProps={result.renderProps}
          store={store}
          />
      )

      // rewind 必须在 render 之后调用，所以只能调用两次 render
      // 没有更好的方法之前先这样
      renderToStaticMarkup(appRoot)
      const data = DocContainer.rewind() || {}

      let appRootMarkup
      if (fetchData) {
        appRootMarkup = renderToString(appRoot)
      } else {
        appRootMarkup = renderToStaticMarkup(appRoot)
      }

      const html = renderToStaticMarkup(page(data.bodyClass, data.title, appRootMarkup))

      return { html }
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
