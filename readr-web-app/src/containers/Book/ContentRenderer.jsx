import React, { Component } from 'react'
import PT from 'prop-types'

const OMIT_TAGS = ['meta', 'title', 'html', 'body', 'link', 'script']

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
        return React.createElement(type, props, ...Array.from(node.childNodes).map(createReactElement).filter(ele => ele !== null))
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
      <div className="renderer-wrap">
        <Element className="inner" />
      </div>
    )
  }
}

export default ContentRenderer
