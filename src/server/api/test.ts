import html from '../../parsers/html'

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

const hasOnlyTextContent = (node) => {
  return node.childNodes.length === 1 && node.childNodes[0].nodeType === 3
}

/**
 * expand nodes to javascript object recursively
 * @param node 
 * @return nestedNodes {
 *  {
 *    tag: tagName,
 *    children: [
 *      {
 *        tag: 'p',
 *        text: String
 *      }
 *    ]
 *  }
 */
const readNode = (node) => {
  if (node.childNodes && node.childNodes.length !== 0) {
    const nodes = Array.prototype
      .filter.call(node.childNodes, child => {
        return child !== '' || child !== '\n'
      })
      .map(child => {
        if (child.tagName) {
          const tag = child.tagName.toLowerCase()
          if (hasOnlyTextContent(child)) {
            return {
              tag,
              text: child.textContent
            }
          }
          return {
            tag,
            children: readNode(child)
          }
        }
        return readNode(child)
      })
      .filter(i => i !== '')

    if (nodes.length === 1) {
      return nodes[0]
    }
    return nodes
  } else {
    return node.textContent && node.textContent.trim()
  }
}

const dropTags = (nodes, tagsToDrop) => {
  const dropTag = (node) => {
    if (tagsToDrop.indexOf(node.tag) !== -1) {
      if (node.children) {
        return dropTags(node.children, tagsToDrop)
      }
      return node.text
    }

    if (node.children) {
      return {
        ...node,
        ...{
          children: dropTags(node.children, tagsToDrop)
        }
      }
    }

    return node
  }

  if (Array.isArray(nodes)) {
    return nodes
      .map(node => {
        return dropTag(node)
      })
      .filter(n => n)
  } else {
    return dropTag(nodes)
  }
}

const test = async (options) => {
  const obj = html(htmlstring).documentElement
  let nodeObj = readNode(obj)

  nodeObj = dropTags(nodeObj, ['head', 'body', 'span', 'div'])

  return { nodes: nodeObj }
}

export default test
