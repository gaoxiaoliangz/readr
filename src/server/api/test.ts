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
              text: child.textContent,
              tag
            }
          }
          return {
            children: readNode(child),
            tag
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

const test = async (options) => {
  const obj = html(htmlstring).documentElement
  const nodeObj = readNode(obj)

  return { nodes: nodeObj }
}

export default test
