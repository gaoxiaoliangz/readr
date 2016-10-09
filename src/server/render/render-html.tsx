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
import { ENABLE_SERVER_ROUTING } from '../../isomorphic/constants'

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
function renderHtml(config?: RenderConfig): any {
  if (!config) {
    return Promise.resolve(renderToStaticMarkup(<Page/>))
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
          scriptData={{
            [ENABLE_SERVER_ROUTING]: true
          }}
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
    console.log(err)
    return Promise.reject({
      htmlString: renderToStaticMarkup(<NotFoundErrorPage message={err.message} />),
      statusCode: 404
    })
  })
}

export default renderHtml
