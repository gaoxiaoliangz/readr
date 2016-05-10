import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'

class Button extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    let className = this.props.className?`btn ${this.props.className}`:'btn'
    let size = this.props.size?this.props.size:'medium'
    let isFluid = this.props.isFluid?this.props.isFluid:false
    let color = this.props.color?this.props.color:null

    if(size === 'small') {
      className += ' btn-small'
    } else if (size === 'large') {
      className += ' btn-large'
    } else if (size === 'medium') {
      className += ' btn-medium'
    } else {
      console.error('Unsupport size!');
    }

    if(color) {
      className += ` btn-${color}`
    }

    if(isFluid) {
      className =+ ' btn-fluid'
    }

    let to = this.props.to?this.props.to:null
    let onClick = this.props.onClick?this.props.onClick:null

    if(to) {
      onClick = () => {
        browserHistory.push(to)
      }
    }

    let props = Object.assign({}, this.props, {className}, {onClick})
    delete props.to
    delete props.color
    delete props.size
    delete props.isFluid

    return (
      React.createElement(
        'button',
        props,
        this.props.children
      )
    )
  }
}

export default Button
