import React, { Component } from 'react'
import { browserHistory } from 'react-router'

interface Props {
  className?: string
  size?: string
  isFluid?: boolean
  color?: string
  type?: string
  to?: string
  onClick?: any
  styleName?: any
}

class Button extends Component<Props, any> {
  constructor(props) {
    super(props)
  }

  render() {
    let className: string = this.props.className ? `btn ${this.props.className}` : 'btn'
    let size = this.props.size ? this.props.size : 'medium'
    let isFluid = this.props.isFluid ? this.props.isFluid : false
    let color = this.props.color ? this.props.color : null
    let onClick

    if (size === 'small') {
      className += ' btn-small'
    } else if (size === 'large') {
      className += ' btn-large'
    } else if (size === 'medium') {
      className += ' btn-medium'
    } else {
      console.error('Unsupport size!');
    }

    if (color) {
      className += ` btn-${color}`
    }

    if (isFluid) {
      className = `${className} btn-fluid`
    }

    if (this.props.to) {
      onClick = e => {
        e.preventDefault()
        browserHistory.push(this.props.to)
      }
    } else {
      onClick = e => {
        e.preventDefault()
        if (this.props.onClick) {
          this.props.onClick(e)
        }
      }
    }

    let props = Object.assign({}, this.props, { className }, { onClick })
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
