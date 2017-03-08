import React from 'react'
import path from 'path'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import DocContainer from '../../../isomorphic/containers/DocContainer'
import ServerSideAppRoot from '../../../isomorphic/containers/ServerSideAppRoot'
import AppDoc from '../../../isomorphic/containers/AppDoc'
import manifest from '../../../../build/static/assets.manifest.json'

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
      'http://localhost:4000/static/css/base.global.css',
      'http://localhost:4000/static/css/vendor.global.css',
      'http://localhost:4000/static/css/modifiers.global.css',
      'http://localhost:4000/static/css/app.css'
    ]
    jsAssets = [
      'http://localhost:4002/static/js/vendor.dll.js',
      'http://localhost:4000/static/js/app.js'
    ]
  }

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

    const html = renderToStaticMarkup(
      <AppDoc
        appMarkup={appRootMarkup}
        helmetHeadObject={head}
        bodyClass={bodyClass}
        initialState={req.locals.store.getState()}
        link={cssAssets}
        script={[
          { innerHTML: 'var __ENABLE_SERVER_ROUTING__ = true;' }
        ].concat(jsAssets)}
      />
    )
    res.status(statusCode).send('<!DOCTYPE html>\n' + html)
  }
}

export default renderView
