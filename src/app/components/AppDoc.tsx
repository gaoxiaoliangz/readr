import React from 'react'
import { INITIAL_STATE } from '../../constants'

export const DOCTYPE = '<!DOCTYPE html>'

interface Props {
  bodyClass?: string
  appMarkup: string | JSX.Element
  initialState?: Object
  style?: any
  helmetHeadObject?: {
    htmlAttributes?
    title?
    base?
    meta?
    link?
    script?
    noscript?
    style?
  }

  // override title in helmetHeadObject
  title?: string

  script?: ({
    src?: string
    type?: string
    innerHTML?: string
  } | string)[]

  link?: ({
    rel?: string
    href: string
  } | string)[]

  children?: Object
}

const AppDoc = (props: Props) => {
  const {
    script: bodyScript,
    link: otherLink,
    bodyClass, appMarkup, initialState, style,
    helmetHeadObject: {
      title, meta, link: helmetLink, script: headScript
    },
    title: masterTitle
  } = props

  return (
    <html lang="zh-CN">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="description" content="" />
        {
          masterTitle
            ? <title>{masterTitle || (title && title.toString())}</title>
            : (title && title.toComponent())
        }
        {
          style && (
            <style
              dangerouslySetInnerHTML={{
                __html: style
              }}
            />
          )
        }
        {meta && meta.toComponent()}
        {helmetLink && helmetLink.toComponent()}
        {
          otherLink && (
            otherLink.map((link, index) => {
              let href
              let rel = 'stylesheet'

              if (typeof link === 'string') {
                href = link
              } else {
                href = link.href
                if (link.rel) {
                  rel = link.rel
                }
              }

              return (
                <link key={index} href={href} rel={rel} />
              )
            })
          )
        }
        {headScript && headScript.toComponent()}
      </head>
      <body {...bodyClass && { className: bodyClass }}>
        {props.children}
        {
          typeof appMarkup === 'string'
            ? <div id="root" dangerouslySetInnerHTML={{ __html: appMarkup || '' }} />
            : <div id="root">{appMarkup}</div>
        }
        {
          initialState && (
            <script
              dangerouslySetInnerHTML={{ __html: `var ${INITIAL_STATE} = ${JSON.stringify(initialState || {})};` }}
            />
          )
        }
        {
          bodyScript && (
            bodyScript.map((script, index) => {
              if (typeof script === 'string') {
                return (
                  <script key={index} src={script} />
                )
              }

              const { src, type, innerHTML } = script

              return (
                <script
                  key={index}
                  src={src}
                  type={type || 'text/javascript'}
                  dangerouslySetInnerHTML={{ __html: innerHTML }}
                />
              )
            })
          )
        }
      </body>
    </html>
  )
}

AppDoc['defaultProps'] = {
  helmetHeadObject: {}
}

export default AppDoc
