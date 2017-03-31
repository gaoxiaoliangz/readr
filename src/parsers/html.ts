import jsdom from 'jsdom'
import { parseNestedObject } from './utils'




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
    parser(object, children) {
      if (object.nodeType === 1) {
        return {
          tag: object.tagName,
          _n: children
        }
      } else {
        return 'other stuff..'
      }
    }
  })
}

export default parseHTMLObject
