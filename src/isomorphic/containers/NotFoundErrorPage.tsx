import NoMatch from '../routes/NoMatch/NoMatch'
import Html from './Html'
import React from 'react'
import { renderToString } from 'react-dom/server'

type TProps = {
  children?: any
  message?: string
}

function NotFoundErrorPage(props: TProps) {
  return (
    <Html
      title="页面未找到"
      appMarkup={renderToString(
        <NoMatch
          title="页面未找到 :("
          message={props.message}
          />
      ) }
      />
  )
}

export default NotFoundErrorPage
