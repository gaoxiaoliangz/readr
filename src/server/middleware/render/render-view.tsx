import React from 'react'
import path from 'path'
import _ from 'lodash'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import DocContainer from '../../../components/DocContainer'
import ServerSideAppRoot from '../../../components/ServerSideAppRoot'
import AppDoc, { DOCTYPE } from '../../../components/AppDoc'
import manifest from '../../../../build/static/assets.manifest.json'

const CLIENT_ENV_VARS = ['PORT']

const resolveDevAssets = (assetName) => {
  const assetUrl = `http://localhost:${process.env.WEBPACK_PORT}/static/`

  return assetUrl + assetName
}

function renderView(isProduction) {
  let cssAssets
  let jsAssets

  if (isProduction) {
    const prefix = '/static'
    cssAssets = [
      path.join(prefix, manifest['base.global.css']),
      path.join(prefix, manifest['vendor.global.css']),
      path.join(prefix, manifest['modifiers.global.css']),
      path.join(prefix, manifest['app.css'])
    ]
    jsAssets = [
      path.join(prefix, manifest['vendor.js']),
      path.join(prefix, manifest['app.js'])
    ]
  } else {
    cssAssets = [
      resolveDevAssets('css/base.global.css'),
      resolveDevAssets('css/vendor.global.css'),
      resolveDevAssets('css/modifiers.global.css'),
      resolveDevAssets('css/app.css')
    ]
    jsAssets = [
      resolveDevAssets('js/vendor.dll.js'),
      resolveDevAssets('js/app.js')
    ]
  }

  const clientEnv = _.pick(process.env, CLIENT_ENV_VARS)

  return (req, res) => {
    // test 500 page
    // if (req) {
    //   throw new Error('Server fucked up!')
    // }

    const { renderProps, statusCode } = req.locals.matchedResults
    const appRootMarkup = renderToString(<ServerSideAppRoot
      renderPageContent
      renderProps={renderProps}
      store={req.locals.store}
    />)

    // 需要在 render 之后调用
    // 不调用 rewind 会造成内存泄漏
    const { bodyClass, head } = DocContainer.rewind()

    const sss = req.locals.store.getState()

    // todo: global var name
    const html = renderToStaticMarkup(
      <AppDoc
        appMarkup={appRootMarkup}
        helmetHeadObject={head}
        bodyClass={bodyClass}
        initialState={req.locals.store.getState()}
        link={cssAssets}
        script={[
          { innerHTML: 'var __ENABLE_SERVER_ROUTING__ = true;' },
          { innerHTML: `var __ENV__ = ${JSON.stringify(clientEnv)}` }
        ].concat(jsAssets)}
      />
    )
    res.status(statusCode).send(DOCTYPE + html)
  }
}

export default renderView
