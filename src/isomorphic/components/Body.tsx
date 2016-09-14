import React, { Component } from 'react'
import withSideEffect from 'react-side-effect'

interface Props {
  className?: string
  styleName?: string
  bodyClass: string
}

class Body extends Component<Props, {}> {
  render() {
    const { className } = this.props

    return (
      className
        ? (
          <div className={className}>
            {this.props.children}
          </div>
        )
        : <div>{this.props.children}</div>
    )
  }
}

function reducePropsToState(propsList) {
  let bodyClass

  propsList.forEach(function (props) {
    bodyClass = props.bodyClass
  })

  return bodyClass
}

function handleStateChangeOnClient(className) {
  if (typeof className !== 'undefined') {
    document.body.className = className
  } else {
    document.body.removeAttribute('class')
  }
}

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(Body)
