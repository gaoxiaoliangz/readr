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
  color?: 'red' | 'blue' | 'green' | 'orange' | 'white' | 'transparent'
  to?: string
  onClick?: any
  width?: number | string
  // when bordered is set color is ignored
  bordered?: boolean
  darkBordered?: boolean
  type?: string
  preventDefault?: boolean
  style?: React.CSSProperties
}

interface IState {
  isMouseOver?: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
class Button extends Component<IProps, IState> {

  static defaultProps = {
    preventDefault: false,
    color: 'blue'
  }

  constructor(props) {
    super(props)
    this.state = {
      isMouseOver: false,
    }
  }

  render() {
    let { onClick, color, size, isFluid, width, to, bordered, darkBordered, preventDefault, style, ...rest } = this.props

    const styleName = classnames({
      'btn': true,
      'btn--hover': this.state.isMouseOver,
      'btn--fluid': isFluid,
      'btn--bordered': bordered,
      'btn--dark-bordered': darkBordered,
      [`btn--${color}`]: Boolean(color) && !bordered && !darkBordered,
      [`btn--${size}`]: Boolean(size)
    })

    if (this.props.to) {
      onClick = e => {
        e.preventDefault()
        helpers.redirect(to)
      }
    } else {
      onClick = e => {
        if (preventDefault) {
          e.preventDefault()
        }
        if (this.props.onClick) {
          e.preventDefault()
          this.props.onClick(e)
        }
      }
    }

    return (
      <button
        {...rest}
        style={{
          ...style,
          width
        }}
        onClick={onClick}
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

export default Button
