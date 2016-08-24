import NoMatch from '../routes/NoMatch/NoMatch'
import Html from './Html'
import React from 'react'

type TProps = {
  children?: any
  message?: string
}

function NotFoundErrorPage(props: TProps) {
  return (
    <Html
      title="页面未找到"
    >
      <NoMatch
        title="页面未找到"
        message={props.message}
      />
    </Html>
  )
}

export default NotFoundErrorPage
