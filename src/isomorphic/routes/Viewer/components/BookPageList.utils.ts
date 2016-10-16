import _ from 'lodash'

// long paragraph situation doesn't seem to affect this function
// offset distance is always negtive or zero
// the index will be of the paragraph with this offset at the end
function getPageOffset({pageIndex, pageHeight, nodeHeights}: {
  pageIndex: number
  pageHeight: number
  nodeHeights: number[]
}) {
  let offset = 0
  let nodeIndex = 0
  let nodeStartIndex

  if (pageIndex !== 0) {
    let nodeHeightSum = 0
    while (nodeHeightSum <= pageHeight * pageIndex) {
      nodeHeightSum += nodeHeights[nodeIndex]
      nodeIndex++
    }
    offset = nodeHeightSum - nodeHeights[nodeIndex - 1] - pageIndex * pageHeight
    nodeStartIndex = nodeIndex - 1
  } else {
    nodeStartIndex = 0
  }

  return { offset, nodeStartIndex }
}


function getNodesOfPage({pageIndex, nodes, pageHeight, nodeHeights}: {
  pageIndex: number
  nodes: any
  pageHeight: number
  nodeHeights: number[]
}) {
  let { offset, nodeStartIndex } = getPageOffset({ pageIndex, pageHeight, nodeHeights })
  let nodeIndex = nodeStartIndex
  let nodeEndIndex
  let pageNodes = []

  let nodeHeightSum = offset + nodeHeights[nodeStartIndex]

  nodeIndex++
  if (nodeHeightSum < pageHeight) {
    while (nodeHeightSum <= pageHeight && nodeIndex !== nodes.length) {
      nodeHeightSum += nodeHeights[nodeIndex]
      nodeIndex++
    }
    nodeEndIndex = nodeIndex - 1
  } else {
    nodeEndIndex = nodeStartIndex
  }

  for (let i = nodeStartIndex; i <= nodeEndIndex && i <= nodes.length - 1; i++) {
    pageNodes.push(nodes[i])
  }

  return { pageNodes, offset }
}


export type TPage = {
  nodes: string[]
  meta: any
}
export type TPageList = TPage[]
export function groupNodesByPage(nodes: any, nodeHeights: number[], pageHeight: number): TPageList {
  let pages = []
  let pageHeightSum = nodeHeights.reduce((a, b) => (a + b), 0)
  let pageSum = Math.ceil(pageHeightSum / pageHeight)

  console.log('todo: group nodes')
  // nodes = nodes.map((node, index) => {
  //   node.props.index = index
  //   return node
  // })

  if (nodeHeights.length === 0) {
    return [{
      nodes,
      meta: {
        pageNo: 1,
        offset: 0
      }
    }]
  }

  // finally
  for (let i = 0; i < pageSum; i++) {
    const { pageNodes, offset } = getNodesOfPage({ pageIndex: i, nodes, nodeHeights, pageHeight })

    pages.push({
      nodes: pageNodes,
      meta: {
        pageNo: i + 1,
        offset
      },
    })
  }

  return pages
}

export function percentageToPage(p: number, pageSum: number) {
  if (p > 1) {
    console.error('Wrong parameter!')
    return null
  } else {
    return parseInt((p * pageSum) as any) + 1
  }
}
