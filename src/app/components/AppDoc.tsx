import React from 'react'

export const INITIAL_STATE_VAR_NAME = '__INITIAL_STATE__'
export const DOCTYPE = '<!DOCTYPE html>'

type Script = ({
  async?: boolean
  src?: string
  type?: string
  innerHTML?: string
} | string)[]

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

  headScript?: Script
  script?: Script

  link?: ({
    rel?: string
    href: string
  } | string)[]

  children?: Object
}

const renderScript = (_script: Script) => {
  return _script.map((script, index) => {
    if (typeof script === 'string') {
      return (
        <script key={index} src={script} />
      )
    }

    const { src, type, innerHTML, async } = script

    return (
      <script
        {...async && { async }}
        key={index}
        src={src}
        type={type || 'text/javascript'}
        dangerouslySetInnerHTML={{ __html: innerHTML }}
      />
    )
  })
}

const AppDoc = (props: Props) => {
  const {
    script: bodyScript,
    headScript,
    link: otherLink,
    bodyClass, appMarkup, initialState, style,
    helmetHeadObject: {
      title, meta, link: helmetLink, script: helmetHeadScript
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
        {helmetHeadScript && helmetHeadScript.toComponent()}
        {headScript && renderScript(headScript)}
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
              dangerouslySetInnerHTML={{ __html: `var ${INITIAL_STATE_VAR_NAME} = ${JSON.stringify(initialState || {})};` }}
            />
          )
        }
        {bodyScript && renderScript(bodyScript)}
      </body>
    </html>
  )
}

AppDoc['defaultProps'] = {
  helmetHeadObject: {}
}

export default AppDoc
