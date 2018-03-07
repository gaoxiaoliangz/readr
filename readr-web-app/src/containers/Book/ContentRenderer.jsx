import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import classNames from 'classnames'
import styles from './ContentRenderer.scss'
import { nodesToReactElement } from './utils'

class ContentRenderer extends Component {
  static propTypes = {
    nodes: PT.array.isRequired,
    config: PT.object.isRequired,
  }

  render() {
    const { nodes, config: { theme, contentWidth, fontSize }, ...rest } = this.props
    const Element = nodesToReactElement(nodes, classNames({
      [styles['node']]: true,
      [styles['node--white']]: theme === 'white',
      [styles['node--night']]: theme === 'night',
    }))

    return (
      <Element
        styleName="renderer"
        {..._.omit(rest, ['style'])}
        style={{
          maxWidth: contentWidth || 'auto',
          fontSize,
        }}
      />
    )
  }
}

export default ContentRenderer
