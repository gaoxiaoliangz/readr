import React, { Component, Children, PropTypes } from 'react'
import withSideEffect from 'react-side-effect'
// const withSideEffect = require('react-side-effect')

interface BodyProps {
  className: string
}

class Body extends Component<BodyProps, any> {
  render() {
    return <div className="react-body-class hidden"></div>
  }
}

function reducePropsToState(propsList) {
  let className

  propsList.forEach(function (props) {
    className = props.className
  })

  return className
}

function handleStateChangeOnClient(className) {
  if(typeof className !== 'undefined') {
    document.body.className = className
  }else{
    document.body.removeAttribute('class')
  }
}

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(Body);
