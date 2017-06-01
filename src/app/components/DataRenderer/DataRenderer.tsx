import React from 'react'
import Loading from '../Loading/Loading'

type Props = {
  data: State.Apollo<object>
  render: any
  children?: any
}

const DataRenderer = (props: Props) => {
  if (props.data.loading) {
    return <Loading useNProgress />
  }

  if (props.data.error) {
    // todo
    return (
      <div>{props.data.error.message}</div>
    )
  }

  return props.render()
}

export default DataRenderer
