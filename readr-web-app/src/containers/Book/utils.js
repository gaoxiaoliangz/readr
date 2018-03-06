import React from 'react'
import _ from 'lodash'

const OMIT_TAGS = ['meta', 'title', 'html', 'body', 'link', 'script']
const UNWRAP_TAGS = ['div', 'span']

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
        const children = Array
          .from(node.childNodes)
          .map(createNode)
          .filter(ele => ele !== null)
        if (UNWRAP_TAGS.includes(type)) {
          return children
        }
        return createNodeObject(type, props, ..._.flatMapDeep(children))
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
 */
export const nodesToReactElement = nodes => {
  const createReactElement = node => {
    try {
      if (typeof node === 'string') {
        return node
      }
      const children = node.children.map(createReactElement)
      return React.createElement(node.type, {
        ...node.props,
        className: 'page__line'
      }, ..._.flatMapDeep(children))
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
