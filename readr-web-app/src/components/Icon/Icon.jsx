import React, { Component } from 'react'
import classnames from 'classnames'
import PT from 'prop-types'
import svgIcons from './svg-icons'
import './Icon.scss'

class Icon extends Component {
  static propTypes = {
    name: PT.string.isRequired,
    onClick: PT.func,
    size: PT.number,
    className: PT.string,
    styleName: PT.string,
    style: PT.object,
    svgPathProps: PT.object,
  }

  render() {
    const { name, onClick, style, svgPathProps } = this.props
    let { size } = this.props
    const className = classnames('icon', `icon-${name}`, this.props.className)

    if (typeof svgIcons[name] === 'undefined') {
      console.error('Icon name (%s) not found! ', name)
    }

    const pathAttrs = svgIcons[name].pathAttrs

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
          {
            svgIcons[name]
              ? (
                <svg
                  {...svgIcons[name].viewBox && { viewBox: svgIcons[name].viewBox }}
                  width={size}
                  height={size}
                  xmlns="http://www.w3.org/2000/svg"
                  styleName="svg-shape"
                >
                  <path
                    {...{ ...pathAttrs, ...svgPathProps }}
                    d={svgIcons[name].path}
                  />
                </svg>
              )
              : `Icon ${name} not found!`
          }
        </div>
      </span>
    )
  }
}

export default Icon
