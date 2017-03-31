import jsdom from 'jsdom'
import _ from 'lodash'
import { parseNestedObject } from './utils'

const OMITTED_TAGS = ['head', 'input', 'textarea', 'script', 'style']
const UNWRAP_TAGS = ['div', 'span', 'body', 'html']

interface ParsedNode {
  tag?: string
  text?: string
  children?: ParsedNode[]
}

interface Parsers {
  text?: (node) => any
  element?: (node, children) => any
  // will be called after any other parsers
  filter?: (node) => boolean
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

// const hasOnlyTextContent = (node) => {
//   return node.childNodes.length === 1 && node.childNodes[0].nodeType === 3
// }

const parseHTMLObject = (HTMLString) => {
  const rootNode = parseRawHTML(HTMLString)

  // initial parse
  const parsed = parseNestedObject(rootNode, {
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
          let _children = []
          children.forEach(child => {
            if (Array.isArray(child)) {
              child.forEach(_child => {
                _children.push(_child)
              })
            } else {
              _children.push(child)
            }
          })
          return _children.length === 1 ? _children[0] : _children
        }

        return { tag, children }
      } else {
        return node.textContent.trim()
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
      if (object.tag === 'p' && Array.isArray(children)) {
        return _.omit({
          ...object,
          ...{
            text: children.join(' ')
          }
        }, 'children')
      }

      if (typeof object === 'string') {
        return {
          tag: 'p',
          text: object
        }
      }

      return {
        ...object,
        ...{
          children
        }
      }
    }
  })
  // return parsed
}

export default parseHTMLObject
