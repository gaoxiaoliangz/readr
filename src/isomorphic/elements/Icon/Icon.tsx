import React, { Component } from 'react'
import classnames from 'classnames'
import svgIcons from './svg-icons'
import CSSModules from 'react-css-modules'
const styles = require('./Icon.css')

interface IProps {
  name: string
  onClick?: any
  size?: number
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
    const { name, onClick, size } = this.props
    let className = classnames('icon', `icon-${name}`, this.props.className)

    if (typeof svgIcons[name] === 'undefined') {
      console.error('Icon name (%s) not found! ', name)
    }

    return (
      <span styleName="icon" className={className} onClick={onClick}>
        <svg {...svgIcons[name].viewBox && {viewBox: svgIcons[name].viewBox}} width={size} height={size} styleName="svg-shape">
          <path d={svgIcons[name].path}/>
        </svg>
      </span>
    )
  }
}

export default Icon
