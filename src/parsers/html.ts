import jsdom from 'jsdom'
import _ from 'lodash'
import { parseNestedObject } from './utils'

const OMITTED_TAGS = ['head', 'input', 'textarea', 'script', 'style']
const EXPANDED_TAGS = ['div', 'span', 'body', 'html']

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

const textParser = node => {
  return {
    text: node.textContent
  }
}

const tagsToExpand = ['head', 'body', 'span', 'div']
const elementParser = (node, children) => {
  const tag = node.tagName.toLowerCase()

  // expand tags
  if (tagsToExpand.indexOf(tag) !== -1) {
    return children.length === 1 ? children[0] : children
  }

  return {
    tag,
    children: children
  }
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
  return parseNestedObject(rootNode, {
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

        // if (EXPANDED_TAGS.indexOf(tag) !== -1) {
        //   console.log(tag)
        //   console.log(children.length)

        //   if (tag === 'html') {
        //     return {
        //       tag,
        //       x: children[0]
        //     }
        //   }
          
        //   return children.length === 1 ? children[0] : children
        // }

        return {
          tag,
          children
        }
      } else {
        return node.textContent.trim()
      }
    },
    postFilter(node) {
      return !_.isEmpty(node)
    }
  })
}

export default parseHTMLObject
