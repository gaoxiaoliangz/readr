import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import { syncHistoryWithStore } from 'react-router-redux'
import { createMemoryHistory } from 'react-router'
import _ from 'lodash'
import fs from 'fs'
import print from '../utils/print'
import getStore from './get-store'
import matchRoute from './match-route'
import NotFoundErrorPage from '../../isomorphic/containers/NotFoundErrorPage'
import InternalServerErrorPage from '../../isomorphic/containers/InternalServerErrorPage'
import Page from '../../isomorphic/containers/Page'
import DocContainer from '../../isomorphic/containers/DocContainer'
import ServerSideAppRoot from '../../isomorphic/containers/ServerSideAppRoot'
import configureStore from '../../isomorphic/store/configureStore'

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
function renderHtml(config?: RenderConfig) {
  if (!config) {
    return Promise.resolve(renderToStaticMarkup(
      <Page
        title="Readr"
        appMarkup=""
        includeLocalStylesheets
        />
    )) as any
  }

  const { reqUrl, routes, isProd, fetchData, isHot, userSession } = config
  const memoryHistory = createMemoryHistory(reqUrl)
  const store = configureStore()
  const history = syncHistoryWithStore(memoryHistory, store)

  return matchRoute(routes, reqUrl, history).then(result => {
    const { renderProps, redirectLocation } = result

    if (redirectLocation) {
      return Promise.resolve({ redirectLocation }) as any
    }

    return getStore(renderProps, fetchData, userSession, store).then(storeWithFetchedData => {
      const genPageComp = (bodyClass, title, appMarkup) => (
        <Page
          title={title}
          store={storeWithFetchedData}
          isProd={isProd}
          manifest={isProd && getManifest() }
          bodyClass={bodyClass}
          appMarkup={appMarkup}
          includeLocalStylesheets
          />
      )

      const appRoot = (
        <ServerSideAppRoot
          renderPageContent={fetchData}
          renderProps={result.renderProps}
          store={storeWithFetchedData}
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

      const html = renderToStaticMarkup(genPageComp(data.bodyClass, data.title, appRootMarkup))

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
