import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import _ from 'lodash'
const styles = require('./_button.scss')

interface IProps {
  className?: string
  styleName?: any
  size?: 'small' | 'medium' | 'large'
  isFluid?: boolean
  color?: 'red' | 'blue' | 'green' | 'orange' | 'white'
  to?: string
  onClick?: any
  width?: number | string
}

interface IState {
  isMouseOver?: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
class Button extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      isMouseOver: false,
    }
  }

  render() {
    let { onClick, className, color, size, isFluid, width } = this.props
    let style = {}

    const styleName = classnames({
      'btn': true,
      'btn--hover': this.state.isMouseOver,
      'btn--fluid': isFluid,
      [`btn--${color}`]: Boolean(color),
      [`btn--${size}`]: Boolean(size),
    })
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

    if (typeof width !== 'undefined') {
      style = {
        width
      }
    }

    const props = _(this.props)
      .omit(['to', 'color', 'size', 'isFluid', 'width', 'styles'])
      .assign({}, {
        className: className || '',
        onClick,
        style
      })
      .value()

    return (
      <button
        {...props}
        styleName={styleName}
        onMouseOver={() => {
          this.setState({
            isMouseOver: true
          })
        }}
        onMouseOut={() => {
          this.setState({
            isMouseOver: false
          })
        }}
      >
        {this.props.children}
      </button>
    )
  }
}

(Button as any).defaultProps = {
  color: 'blue'
}

export default Button
