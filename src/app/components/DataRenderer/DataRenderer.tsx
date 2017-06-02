import React from 'react'
import Loading from '../Loading/Loading'
import AppError from '../AppError/AppError'

type Props = {
  data: State.Apollo<object>
  render: any
  children?: any
}

const DataRenderer = (props: Props) => {
  if (props.data.error) {
    return (
      <AppError
        title="发生错误！"
        message={(
          <div>
            <p>{props.data.error.message}</p>
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
