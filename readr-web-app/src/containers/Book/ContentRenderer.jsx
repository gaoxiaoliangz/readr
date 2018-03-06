import React, { Component } from 'react'
import PT from 'prop-types'
import './ContentRenderer.scss?global' // eslint-disable-line
import { nodesToReactElement } from './utils'

class ContentRenderer extends Component {
  static propTypes = {
    nodes: PT.array.isRequired
  }

  render() {
    const { nodes, ...rest } = this.props
    const Element = nodesToReactElement(nodes)

    return (
      <Element className="renderer-wrap" {...rest} />
    )
  }
}

export default ContentRenderer
