import NoMatch from '../routes/NoMatch/NoMatch'
import Html from './Html'
import React from 'react'
import { renderToString } from 'react-dom/server'

type TProps = {
  children?: any
  message?: string
}

function InternalServerErrorPage(props: TProps) {
  return (
    <Html
      title="服务器内部错误"
      appMarkup={renderToString(
        <NoMatch
          title="服务器内部错误"
          message={props.message}
          />
      ) }
      />
  )
}

export default InternalServerErrorPage
