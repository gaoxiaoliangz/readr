import React from 'react'

type TProps = {
  title: string
  children?: any
  styles?: string[]
  scripts?: string[]
  initialState?: any
  bodyClass?: string
  appMarkup: string
  useFavicon?: boolean
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

function Html(props: TProps) {
  const { title, styles, scripts, initialState, bodyClass, appMarkup, useFavicon } = props

  return (
    <html>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="description" content="The next generation online reading app." />
        <link rel="shortcut icon" type="image/png" href="/pictures/apple-touch-icon-60x60-1.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/pictures/apple-touch-icon-60x60-1.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <title>{title}</title>
        {
          styles && styles.map((stylesheetName, index) => {
            return <StyleLink filename={stylesheetName} key={index} />
          })
        }
      </head>
      <body {...bodyClass && { className: bodyClass }}>
        <div id="root" dangerouslySetInnerHTML={{ __html: appMarkup }} />
        {
          initialState && (
            <script dangerouslySetInnerHTML={{ __html: `var __INITIAL_STATE__ = ${JSON.stringify(initialState)}` }} />
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

export default Html
