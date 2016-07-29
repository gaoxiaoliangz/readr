import React from 'react'

type TProps = {
  title: string
  children?: any
  styles?: string[]
  scripts?: string[]
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
  const { title, styles, scripts } = props

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
          scripts && scripts.map((scriptName, index) => {
            return <Script filename={scriptName} key={index} />
          })
        }
      </body>
    </html>
  )
}

export default Html
