import React from 'react'
import DataRenderer from '../components/DataRenderer/DataRenderer'

type Config = {
  renderError?: boolean
}

const withIndicator = (config: Config = {}) => {
  const { renderError } = config

  return (WrappedComponent) => {
    const ComponentWithIndicator = (props) => (
      <DataRenderer
        data={props.data}
        render={() => {
          return <WrappedComponent {...props} />
        }}
        renderError={renderError}
      />
    )

    return ComponentWithIndicator
  }
}

export default withIndicator
