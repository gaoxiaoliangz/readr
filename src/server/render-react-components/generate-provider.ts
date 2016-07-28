import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import getStore from './get-store'
import { RouterContext } from 'react-router'

function generateProvider(renderProps) {
  return getStore(renderProps).then(store => {
    let html: any = React.createElement(
      Provider,
      { store },
      React.createElement(RouterContext, renderProps)
    )
    try {
      html = renderToString(html)
      return html
    } catch (e) {
      return e.message
    }
  }, err => {
    return new Error('Error generating html!')
  })
}

export default generateProvider
