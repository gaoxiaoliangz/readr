import React from 'react'
import path from 'path'
import _ from 'lodash'
import { renderToStringWithData } from 'react-apollo'
import { renderToStaticMarkup } from 'react-dom/server'
import DocContainer from '../../../app/components/DocContainer'
import AppProvider from '../../../app/containers/AppProvider'
import AppDoc, { DOCTYPE } from '../../../app/components/AppDoc'
import manifest from '../../../../build/assets/assets.manifest.json'
import { PUBLIC_URL } from '../../constants'

const debug = require('debug')('readr:renderView')

const resolveDevAssets = (assetName) => {
  return path.join(PUBLIC_URL, assetName)
}

export const getCSSUri = (isProduction = false) => {
  if (isProduction) {
    return [
      path.join(PUBLIC_URL, manifest['frameworks.global.css']),
      path.join(PUBLIC_URL, manifest['app.css'])
    ]
  }
  return [
    resolveDevAssets('css/frameworks.global.css'),
    resolveDevAssets('css/app.css')
  ]
}

export function getJSUri(isProduction = false) {
  let jsAssets

  if (isProduction) {
    jsAssets = [
      path.join(PUBLIC_URL, manifest['manifest.js']),
      path.join(PUBLIC_URL, manifest['vendor.js']),
      path.join(PUBLIC_URL, manifest['app.js'])
    ]
  } else {
    jsAssets = [
      resolveDevAssets('js/dll.js'),
      resolveDevAssets('js/app.js')
    ]
  }
  return jsAssets
}

export function renderView() {
  const isProduction = process.env.NODE_ENV === 'production'
  const cssAssets = getCSSUri(isProduction)
  const jsAssets = getJSUri(isProduction)
  const headScript = isProduction && [
    // 百度统计
    {
      innerHTML: `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?d16c533053b2d1229b591554207de4c7";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    },
    // Google Analytics
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-106141307-3',
      async: true,
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());
        gtag('config', 'UA-106141307-3');
      `
    }
  ]

  return async (req, res) => {
    const { renderProps, statusCode } = req.locals.matchedResults
    const useServerRendering = process.env.ENABLE_SSR === '1'
    const appMarkup = (
      <AppProvider
        renderPageContent={useServerRendering}
        renderProps={renderProps}
        store={req.locals.store}
      />
    )
    let appMarkupString
    try {
      if (useServerRendering) {
        appMarkupString = await renderToStringWithData(appMarkup)
          .catch(err => {
            // todo: better way to handle error
            console.error(err)
          })
      } else {
        appMarkupString = renderToStaticMarkup(appMarkup)
      }
    } catch (error) {
      throw error
    }

    // 需要在 render 之后调用
    // 不调用 rewind 会造成内存泄漏
    const { bodyClass, head } = DocContainer.rewind()
    const initialState = process.env.ENABLE_INITIAL_STATE === '1'
      ? req.locals.store.getState()
      : {}

    const html = renderToStaticMarkup(
      <AppDoc
        appMarkup={appMarkupString}
        helmetHeadObject={head}
        bodyClass={bodyClass}
        initialState={initialState}
        link={cssAssets}
        script={jsAssets}
        headScript={headScript}
      />
    )
    if (process.env.NODE_ENV !== 'production') {
      debug('view rendered')
    }
    res.status(statusCode).send(DOCTYPE + html)
  }
}

export default renderView
