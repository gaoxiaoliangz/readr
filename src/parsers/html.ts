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
          // let _children = []
          // children.forEach(child => {
          //   if (Array.isArray(child)) {
          //     child.forEach(_child => {

          //       // if (Array.isArray(_child)) {
          //       //   _child.forEach(__child => {


          //       //     _children.push(__child)
          //       //   })
          //       // } else {
          //       //   _children.push(_child)
          //       // }
          //       _children.push(_child)
          //     })
          //   } else {
          //     _children.push(child)
          //   }
          // })
          // const parsedChildren = _children.length === 1 ? _children[0] : _children
          // return parsedChildren
        }

        const flatChildren = _.flattenDeep(children)
        const childrenAllString = flatChildren.every(child => typeof child === 'string')

        if (childrenAllString) {
          return {
            tag,
            children: [flatChildren.join(' ')]
          }
        }

        return { tag, children: flatChildren }
      } else {
        const text = node.textContent.trim()
        if (!text) {
          return null
        }
        // TODO: wrap isolated text nodes with p tag
        // if (node.parentNode.tagName === 'DIV') {
        //   return { tag: 'p', children: [text] }
        // }
        // return {
        //   // text,
        //   // parent: node.parentNode.tagName
        //   children: [text]
        // }
        return text
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
