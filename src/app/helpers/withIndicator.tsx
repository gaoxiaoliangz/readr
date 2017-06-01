import React from 'react'
import DataRenderer from '../components/DataRenderer/DataRenderer'

const withIndicator = () => {
  return (WrappedComponent) => {
    const ComponentWithIndicator = (props) => (
      <DataRenderer
        data={props.data}
        render={() => {
          return <WrappedComponent {...props} />
        }}
      />
    )

    return ComponentWithIndicator
  }
}

export default withIndicator
