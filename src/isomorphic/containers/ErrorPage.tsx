import Page from './Page'
import React from 'react'
import { renderToString } from 'react-dom/server'
import AppError from './AppError'

type TProps = {
  isProd?: boolean
  message: string
  title: string
  docTitle: string
}

function ErrorPage(props: TProps) {
  const { isProd, message, docTitle, title } = props

  return (
    <Page
      isProd={isProd}
      title={docTitle}
      noScript
      appMarkup={renderToString(
        <AppError
          title={title}
          message={message}
        />
      )}
      />
  )
}

export default ErrorPage
