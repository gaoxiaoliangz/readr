import jsdom from 'jsdom'
import _ from 'lodash'
import { parseNestedObject } from './utils'

const debug = require('debug')('readr:html')

const OMITTED_TAGS = ['head', 'input', 'textarea', 'script', 'style']
const UNWRAP_TAGS = ['div', 'span', 'body', 'html']

interface ParsedNode {
  tag?: string
  children?: ParsedNode[]
}

/**
 * recursivelyReadParent
 * @param node 
 * @param callback runs the matching logic return the new node if true, if not return false, and the loop continues
 * @param final callback when reaching the root
 */
const recursivelyReadParent = (node, callback, final?) => {
  const _read = (_node) => {
    const parent = _node.parentNode
    if (parent) {
      const newNode = callback(parent)
      if (!newNode) {
        return _read(parent)
      }
      return newNode
    } else {
      if (final) {
        return final()
      }
      return node
    }
  }
  return _read(node)
}

const parseRawHTML = HTMLString => {
  return jsdom
    .jsdom(HTMLString, {
      features: {
        FetchExternalResources: [],
        ProcessExternalResources: false
      }
    })
    .documentElement
}

const parseHTMLObject = (HTMLString) => {
  const rootNode = parseRawHTML(HTMLString)
  debug(rootNode.innerHTML)

  // initial parse
  const parsed: ParsedNode = parseNestedObject(rootNode, {
    childrenKey: 'childNodes',
    preFilter(node) {
      return node.nodeType === 1 || node.nodeType === 3
    },
    parser(node, children) {
      if (node.nodeType === 1) {
        const tag = node.tagName.toLowerCase()

        if (OMITTED_TAGS.indexOf(tag) !== -1) {
          return null
        }

        if (UNWRAP_TAGS.indexOf(tag) !== -1) {
          const flatten = _.flattenDeep(children)
          return flatten.length === 1 ? flatten[0] : flatten
        }

        const flatChildren = _.flattenDeep(children)
        const childrenAllString = flatChildren.every(child => typeof child === 'string')
        const joinedString = flatChildren.join(' ')

        if (childrenAllString) {
          return {
            tag,
            children: joinedString ? [joinedString] : undefined
          }
        }

        return { tag, children: flatChildren }
      } else {
        const text = node.textContent.trim()
        if (!text) {
          return null
        }

        // find the cloest parent which is not in UNWRAP_TAGS
        // if failed then wrap with p tag
        return recursivelyReadParent(node, parent => {
          const tag = parent.tagName && parent.tagName.toLowerCase()
          if (!tag || (UNWRAP_TAGS.indexOf(tag) !== -1)) {
            return false
          }
          return text
        }, () => {
          return {
            tag: 'p',
            children: [text]
          }
        })
      }
    },
    postFilter(node) {
      return !_.isEmpty(node)
    }
  })

  // post parse
  return parseNestedObject(parsed[0], {
    childrenKey: 'children',
    parser(object, children) {
      if (object.children) {
        return {
          ...object,
          ...{
            children: !_.isEmpty(children) ? children : undefined
          }
        }
      }
      return object
    }
  })
}

export default parseHTMLObject
