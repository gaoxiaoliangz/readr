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
  elements: string[]
  meta: any
}
export type TPageList = TPage[]
type GroupNodesByPageConfig = {
   nodeHeights: number[]
   pageHeight: number
   pageStartFrom: number
   meta?: object
}
export function groupNodesByPage(elements: any, config: GroupNodesByPageConfig): TPageList {
  const { nodeHeights, pageHeight, pageStartFrom, meta } = config
  let pages = []
  let pageHeightSum = nodeHeights.reduce((a, b) => (a + b), 0)
  let pageSum = Math.ceil(pageHeightSum / pageHeight)

  if (nodeHeights.length === 0) {
    return [{
      elements,
      meta: {
        pageNo: 1 + pageStartFrom,
        offset: 0,
        ...meta
      }
    }]
  }

  // finally
  for (let i = 0; i < pageSum; i++) {
    const { pageNodes, offset } = getNodesOfPage({ pageIndex: i, nodes: elements, nodeHeights, pageHeight })
    pages.push({
      elements: pageNodes,
      meta: {
        pageNo: pageStartFrom + i + 1,
        offset,
        ...meta
      },
    })
  }

  return pages
}

// export function groupPageFromChapters(contentOfChapters: TBookFlesh, nodeHeightsOfChapters: {
//   id: string
//   nodeHeights: number[]
// }[], pageHeight: number) {
//   let pageStartFrom = 0
//   let allPages = []

//   contentOfChapters.forEach((chapter, index) => {
//     const pages = groupNodesByPage(chapter.markdown.split('\n\n'), nodeHeightsOfChapters[index].nodeHeights, pageHeight, pageStartFrom, chapter.id)
//     allPages = allPages.concat(pages)
//     pageStartFrom = pageStartFrom + pages.length
//   })

//   return allPages
// }
