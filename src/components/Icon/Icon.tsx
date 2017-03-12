import React, { Component } from 'react'
import classnames from 'classnames'
import svgIcons from './svg-icons'
import CSSModules from 'react-css-modules'
import styles from './Icon.scss'

interface IProps {
  name: string
  onClick?: any
  size?: number
  className?: string
  styleName?: string
  style?: React.CSSProperties
}

@CSSModules(styles, {
  allowMultiple: true
})
class Icon extends Component<IProps, {}> {
  constructor(props) {
    super(props)
  }

  render() {
    let { name, onClick, size, style } = this.props
    let className = classnames('icon', `icon-${name}`, this.props.className)

    if (typeof svgIcons[name] === 'undefined') {
      console.error('Icon name (%s) not found! ', name)
    }

    size = size || 30

    const svgWrapStyle = {
      // position: 'absolute',
      // top: '50%',
      // marginTop: - size / 2
    }

    const iconStyle = {
      ...{
        minWidth: size,
        minHeight: size
      },
      ...style
    }

    return (
      <span
        styleName="icon"
        style={iconStyle}
        className={className}
        onClick={onClick}
      >
        <div style={svgWrapStyle}>
          <svg
            {...svgIcons[name].viewBox && { viewBox: svgIcons[name].viewBox }}
            width={size}
            height={size}
            styleName="svg-shape"
          >
            <path d={svgIcons[name].path} />
          </svg>
        </div>
      </span>
    )
  }
}

export default Icon
