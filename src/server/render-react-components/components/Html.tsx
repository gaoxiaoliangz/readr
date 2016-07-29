import React from 'react'

type TProps = {
  title: string
  children?: any
  styles?: string[]
  scripts?: string[]
  initialState?: any
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
  const { title, styles, scripts, initialState } = props

  return (
    <html>
      <head>
        <title>{title}</title>
        {
          styles && styles.map((stylesheetName, index) => {
            return <StyleLink filename={stylesheetName} key={index} />
          })
        }
      </head>
      <body>
        <div id="root">
          {props.children}
        </div>
        {
          initialState && (
            <script dangerouslySetInnerHTML={{__html: `var __INITIAL_STATE__ = ${JSON.stringify(initialState)}`}} />
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
