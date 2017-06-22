import React from 'react'
import _ from 'lodash'
import Loading from '../Loading/Loading'
import AppError from '../AppError/AppError'

type Props = {
  data: State.Apollo<object>
  render: any
  children?: any
  renderError?: boolean
}

const defaultProps = {
  renderError: true
}

const DataRenderer = (props: Props) => {
  const _props = {
    ...defaultProps,
    ..._.pickBy(props, (val) => !_.isUndefined(val))
  }

  const { renderError } = _props

  if (props.data.error) {
    console.error(props.data.error)
  }

  if (props.data.error && renderError) {
    return (
      <AppError
        title="发生错误！"
        message={(
          <div>
            <p>{props.data.error.message.replace(/GraphQL error: /, '')}</p>
            <p><small>你可以尝试刷新页面重试</small></p>
          </div>
        )}
      />
    )
  }

  if (props.data.loading) {
    return <Loading useNProgress />
  }

  return props.render()
}

export default DataRenderer
