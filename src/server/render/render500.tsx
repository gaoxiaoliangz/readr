import React from 'react'
import ErrorPage from '../../isomorphic/containers/ErrorPage'
import { renderToStaticMarkup } from 'react-dom/server'

const ERROR_DOC_TITLE = '服务器错误'
const ERROR_PAGE_TITLE = '额，似乎出了点状况'

export default function render500(message: string, isProd: boolean) {
  return renderToStaticMarkup(
    <ErrorPage
      isProd={isProd}
      message={message}
      title={ERROR_PAGE_TITLE}
      docTitle={ERROR_DOC_TITLE}
      />
  )
}
