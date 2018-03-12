import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import classNames from 'classnames'
import styles from './ContentRenderer.scss'
import { nodesToReactElement } from './layout/nodes'

class ContentRenderer extends Component {
  static propTypes = {
    nodes: PT.array.isRequired,
    config: PT.object.isRequired,
    onLinkClick: PT.func,
  }

  render() {
    const { nodes, config: { theme, contentWidth, fontSize, lineHeight }, onLinkClick, ...rest } = this.props
    const Element = nodesToReactElement(nodes, classNames({
      [styles['node']]: true,
      [styles['node--white']]: theme === 'white',
      [styles['node--night']]: theme === 'night',
    }), (e, href) => {
      e.preventDefault()
      if (onLinkClick) {
        onLinkClick(href)
      }
      return false
    })

    return (
      <Element
        styleName="renderer"
        {..._.omit(rest, ['style'])}
        style={{
          maxWidth: contentWidth || 'auto',
          fontSize,
          lineHeight: lineHeight + 'px'
        }}
      />
    )
  }
}

export default ContentRenderer
