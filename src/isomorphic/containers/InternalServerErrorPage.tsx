import NoMatch from '../routes/NoMatch/NoMatch'
import Html from './Html'
import React from 'react'

type TProps = {
  children?: any
  message?: string
}

function InternalServerErrorPage(props: TProps) {
  return (
    <Html
      title="服务器内部错误"
    >
      <NoMatch
        title="服务器内部错误"
        message={props.message}
      />
    </Html>
  )
}

export default InternalServerErrorPage
