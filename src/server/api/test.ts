import html from '../../parsers/html'
import _ from 'lodash'

// const dropTags = (nodes, tagsToDrop) => {
//   const dropTag = (node) => {
//     if (tagsToDrop.indexOf(node.tag) !== -1) {
//       if (node.children) {
//         return dropTags(node.children, tagsToDrop)
//       }
//       return node.text
//     }

//     if (node.children) {
//       return {
//         ...node,
//         ...{
//           children: dropTags(node.children, tagsToDrop)
//         }
//       }
//     }

//     return node
//   }

//   if (Array.isArray(nodes)) {
//     return nodes
//       .map(node => {
//         return dropTag(node)
//       })
//       .filter(n => n)
//   } else {
//     return dropTag(nodes)
//   }
// }

const htmlstring = `
  <div>
    <p>line1</p>
    <p>line2</p>
    <div>
      <p>line1<span>in span</span>out span</p>
      <p>line2</p>
    </div>
    <p>line3</p>
    <p>line4</p>
  </div>
`

// const hasOnlyTextContent = (node) => {
//   return node.childNodes.length === 1 && node.childNodes[0].nodeType === 3
// }

/**
 * expand nodes to javascript object recursively
 */
// const readNode = (node, parsers: Parsers = {}): ParsedNode[] => {
//   return Array.prototype
//     .filter.call(node.childNodes, child => {
//       return child.nodeType === 1 || child.nodeType === 3
//     })
//     .map(child => {
//       // node is element
//       if (child.nodeType === 1) {
//         if (parsers.element) {
//           return parsers.element(child, readNode(child, parsers))
//           // return {
//           //   ...parsers.element(child),
//           //   ...{
//           //     children: readNode(child, parsers)
//           //   }
//           // }
//         }
//         return child
//       }

//       // node is text
//       if (parsers.text) {
//         return parsers.text(child)
//       }
//       return child
//     })
//     .filter(child => {
//       // clear empty arrays created by elementParser
//       if (_.isEmpty(child)) {
//         return false
//       }
//       if (parsers.filter) {
//         return parsers.filter(child)
//       }
//       return true
//     })
// }




const test = async (options) => {
  return html(htmlstring)
  // let nodeObj = readNode(obj, {
  //   text: textParser,
  //   element: elementParser,
  //   filter: node => {
  //     if (!Array.isArray(node) && !node.tag && node.text.trim() === '') {
  //       return false
  //     }
  //     return true
  //   }
  // })



  // nodeObj = dropTags(nodeObj, ['head', 'body', 'span', 'div'])
}

export default test
