import React from 'react'

type TProps = {
  title: string
  children?: any
}

function Html(props: TProps) {
  const { title } = props

  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  )
}

export default Html
