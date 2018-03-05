import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import './ContentRenderer.scss'

const OMIT_TAGS = ['meta', 'title', 'html', 'body', 'link', 'script']
const UNWRAP_TAGS = ['div', 'span']

const htmlStringToReactElement = (htmlString) => {
  const content = document.createElement('div')
  content.innerHTML = htmlString

  const createReactElement = (node, props = {}) => {
    try {
      if (node.nodeType === 3) {
        return node.textContent.trim()
      }
      if (node.nodeType === 1) {
        const type = node.tagName.toLowerCase().trim()
        if (OMIT_TAGS.includes(type)) {
          return null
        }
        const children = Array
          .from(node.childNodes)
          .map((child, index) => createReactElement(child, { key: index }))
          .filter(ele => ele !== null)
        if (UNWRAP_TAGS.includes(type)) {
          return children
        }
        return React.createElement(type, props, _.flatMapDeep(children))
      }
      return null
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return props => createReactElement(content, props)
}

class ContentRenderer extends Component {
  static propTypes = {
    htmlString: PT.string.isRequired
  }

  render() {
    const { htmlString } = this.props
    const Element = htmlStringToReactElement(htmlString)

    return (
      <div styleName="renderer-wrap">
        <Element />
      </div>
    )
  }
}

export default ContentRenderer
