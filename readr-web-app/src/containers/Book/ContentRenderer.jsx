import React, { Component } from 'react'
import PT from 'prop-types'
import './ContentRenderer.scss'
import { nodesToReactElement, htmlStringToNodes } from './utils'

class ContentRenderer extends Component {
  static propTypes = {
    htmlString: PT.string.isRequired
  }

  render() {
    const { htmlString } = this.props
    const nodes = htmlStringToNodes(htmlString)
    const Element = nodesToReactElement(nodes)

    return (
      <div styleName="renderer-wrap">
        <Element />
      </div>
    )
  }
}

export default ContentRenderer
