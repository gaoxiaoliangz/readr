import React from 'react'
import _ from 'lodash'

const OMIT_TAGS = ['meta', 'title', 'html', 'body', 'link', 'script', 'svg', 'img']
const UNWRAP_TAGS = ['div', 'span']
const OMIT_ATTRS = ['style']

const getNodeAttributes = node => {
  return Array.from(node.attributes)
    .reduce((obj, attr) => {
      return {
        ...obj,
        [attr.nodeName]: attr.nodeValue
      }
    }, {})
}

const toReactProps = attrs => {
  const keyMap = {
    class: 'className',
    'xlink:href': 'xlinkHref',
    'xmlns:xlink': 'xmlnsXlink'
  }
  return _.mapKeys(attrs, (v, k) => {
    return keyMap[k] || k
  })
}

export const htmlStringToNodes = htmlString => {
  const content = document.createElement('div')
  content.innerHTML = htmlString

  const createNodeObject = (type, props, ...children) => {
    return {
      type,
      props,
      children
    }
  }

  const createNode = (node, props = {}) => {
    try {
      if (node.nodeType === 3) {
        const text = node.textContent.trim()
        return text !== '' ? text : null
      }
      if (node.nodeType === 1) {
        const type = node.tagName.toLowerCase().trim()
        if (OMIT_TAGS.includes(type)) {
          return null
        }
        const attrs = _.omit(toReactProps(getNodeAttributes(node)), OMIT_ATTRS)
        const children = Array
          .from(node.childNodes)
          .map(createNode)
          .filter(ele => ele !== null)
        if (UNWRAP_TAGS.includes(type)) {
          return children
        }
        return createNodeObject(type, { ...props, ...attrs }, ..._.flatMapDeep(children))
      }
      return null
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return _.flattenDeep(createNode(content))
}

/**
 * convert nodeObject to ReactElement
 * @param {{type, props, children}[]} nodes 
 * @param {string} nodeClassName
 */
export const nodesToReactElement = (nodes, nodeClassName, onLinkClick) => {
  const createReactElement = node => {
    try {
      if (typeof node === 'string') {
        return node
      }
      const children = node.children.map(createReactElement)
      let nodeProps = {
        ...node.props,
        className: nodeClassName
      }
      if (node.type === 'a' && node.props.href) {
        nodeProps = {
          ...nodeProps,
          onClick: e => {
            return onLinkClick(e, node.props.href)
          }
        }
      }
      return React.createElement(node.type, nodeProps, ..._.flatMapDeep(children))
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return props => React.createElement('div', props, ...nodes.map(createReactElement))
}

export const htmlStringToReactElement = htmlString => {
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
        return React.createElement(type, props, ..._.flatMapDeep(children))
      }
      return null
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return props => createReactElement(content, props)
}
