import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import _ from 'lodash'
import helpers from '../../helpers'
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
  bordered?: boolean
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
    let { onClick, className, color, size, isFluid, width, to, bordered } = this.props
    let style = {}

    const styleName = classnames({
      'btn': true,
      'btn--hover': this.state.isMouseOver,
      'btn--fluid': isFluid,
      'btn-bordered': bordered,
      [`btn--${color}`]: Boolean(color) && !bordered,
      [`btn--${size}`]: Boolean(size)
    })
    if (this.props.to) {
      onClick = e => {
        e.preventDefault()
        helpers.redirect(to)
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

    let props = _.omit(this.props, ['to', 'color', 'size', 'isFluid', 'width', 'styles', 'bordered'])
    props = _.assign({}, props, {
      className: className || '',
      onClick,
      style
    })

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
