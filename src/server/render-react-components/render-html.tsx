import React from 'react'
import Html from './components/Html'
import Root from './components/Root'
import { renderToString } from 'react-dom/server'
import getStore from './get-store'
import matchRoute from './match-route'

function renderHtml(reqUrl, routes) {
  return matchRoute(routes, reqUrl).then(result => {
    return getStore(result.renderProps).then(store => {
      const html = (
        <Html
          title="Readr"
        >
          <Root
            store={store}
            renderProps={result.renderProps}
          />
        </Html>
      )
      return renderToString(html)
    }, err => err.message)
  // todo: 错误页面组件
  }, err => err.message)
}

export default renderHtml
