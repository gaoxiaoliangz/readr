import React, { Component } from 'react'
import classnames from 'classnames'
import svgIcons from './svg-icons'
import CSSModules from 'react-css-modules'
const styles = require('./icon.scss')

interface IProps {
  name: string
  onClick?: any
  size?: string
  className?: string
  styleName?: string
}

@CSSModules(styles, {
  allowMultiple: true
})
class Icon extends Component<IProps, {}> {
  constructor(props) {
    super(props)
  }

  render() {
    let name = this.props.name
    let method = this.props.onClick
    let size = this.props.size
    let className = classnames('icon', `icon-${name}`, size, this.props.className)

    if (typeof svgIcons[name] === 'undefined') {
      console.error('Icon name not found! ')
    }

    return (
      <span styleName="icon" className={className} onClick={method}>
        <svg styleName="svg-shape">
          <path d={svgIcons[name]}/>
        </svg>
      </span>
    )
  }
}

export default Icon
