import React from 'react'
import { INITIAL_STATE } from '../../isomorphic/constants'

type TProps = {
  title?: string
  children?: any
  styles?: string[]
  scripts?: string[]
  initialState?: any
  bodyClass?: string
  appMarkup?: string
  useFavicon?: boolean
  scriptContent?: string
  scriptContentId?: string
}

const assetPrefix = '/built'

type TStyleLinkProps = {
  filename: string
}
function StyleLink(props: TStyleLinkProps) {
  return (
    <link rel="stylesheet" href={`${assetPrefix}/${props.filename}`} />
  )
}

type TScriptProps = {
  filename: string
}
function Script(props: TScriptProps) {
  return (
    <script src={`${assetPrefix}/${props.filename}`}></script>
  )
}

export default function Html(props: TProps) {
  const { title, styles, scripts, initialState, bodyClass, appMarkup, useFavicon, scriptContent, scriptContentId } = props

  return (
    <html>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="description" content="The next generation online reading app." />
        <link rel="shortcut icon" type="image/png" href="/static/apple-touch-icon-60x60-1.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-touch-icon-60x60-1.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon-180x180.png" />
        <title>{title || ''}</title>
        {
          styles && styles.map((stylesheetName, index) => {
            return <StyleLink filename={stylesheetName} key={index} />
          })
        }
      </head>
      <body {...bodyClass && { className: bodyClass }}>
        <div id="root" dangerouslySetInnerHTML={{ __html: appMarkup || '' }} />
        {
          scriptContent && (
            <script id={scriptContentId} dangerouslySetInnerHTML={{ __html: scriptContent }} />
          )
        }
        {
          initialState && (
            <script dangerouslySetInnerHTML={{ __html: `var ${INITIAL_STATE} = ${JSON.stringify(initialState)}` }} />
          )
        }
        {
          scripts && scripts.map((scriptName, index) => {
            return <Script filename={scriptName} key={index} />
          })
        }
      </body>
    </html>
  )
}
