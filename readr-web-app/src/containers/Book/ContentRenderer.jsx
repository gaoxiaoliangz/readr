import React, { Component } from 'react'
import PT from 'prop-types'
import './ContentRenderer.scss'
import { nodesToReactElement } from './utils'

class ContentRenderer extends Component {
  static propTypes = {
    nodes: PT.array.isRequired
  }

  render() {
    const { nodes, ...rest } = this.props
    const Element = nodesToReactElement(nodes)

    return (
      <Element {...rest} />
    )
  }
}

export default ContentRenderer
