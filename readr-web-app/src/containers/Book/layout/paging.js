// 暂不支持包含图片的计算
// 计算没有等待图片加载完成，所以结果是不正确的
export function getNodeHeights(nodes) {
  const heights = Array.from(nodes).map(node => {
    if (node.nodeType !== 1) {
      console.warn('Unsupported content found!', node)
    }
    return node.clientHeight
  })
  return heights
}

/**
 * long paragraph situation doesn't seem to affect this function
 * offset distance is always negative or zero
 * the index will be of the paragraph with this offset at the end
 * @param {{pageIndex: number, pageHeight: number, nodeHeights: number[]}} config 
 */
function getPageOffset(config) {
  const { pageIndex, pageHeight, nodeHeights } = config
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

/**
 * @param {{pageIndex: number, nodes, pageHeight: number, nodeHeights: number[]}} config 
 */
function getNodesOfPage(config) {
  const { pageIndex, nodes, pageHeight, nodeHeights } = config
  const { offset, nodeStartIndex } = getPageOffset({ pageIndex, pageHeight, nodeHeights })
  const pageNodes = []
  let nodeIndex = nodeStartIndex
  let nodeEndIndex

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


// export type TPage = {
//   nodes: string[]
//   meta: any
// }
// export type TPageList = TPage[]
/**
 * 
 * @param {*} nodes 
 * @param {number[]} nodeHeights 
 * @param {number} pageHeight 
 * @param {number} pageStartFrom 
 * @param {*?} chapterId
 * @returns {TPageList}
 */
export function groupNodesByPage(nodes, nodeHeights, pageHeight, pageStartFrom = 0, chapterId) {
  const pages = []
  const pageHeightSum = nodeHeights.reduce((a, b) => (a + b), 0)
  const pageSum = Math.ceil(pageHeightSum / pageHeight)

  if (nodeHeights.length === 0) {
    return [{
      nodes,
      meta: {
        pageNo: 1 + pageStartFrom,
        offset: 0,
        chapterId
      }
    }]
  }

  // finally
  for (let i = 0; i < pageSum; i++) {
    const { pageNodes, offset } = getNodesOfPage({ pageIndex: i, nodes, nodeHeights, pageHeight })

    /**
     * @param {string} mdNode 
     */
    const findIdOfHTags = mdNode => {
      const pattern = /<h\d id="(.*)">(.*)<\/h\d>/
      const result = mdNode.match(pattern)

      if (result) {
        return result[1]
      }

      return null
    }

    const hash = pageNodes
      .map(node => {
        return findIdOfHTags(node)
      })
      .filter(id => Boolean(id))

    pages.push({
      nodes: pageNodes,
      meta: {
        pageNo: pageStartFrom + i + 1,
        offset,
        chapterId,
        hash
      },
    })
  }

  return pages
}

/**
 * 
 * @param {TBookFlesh} contentOfChapters 
 * @param {{id: string, nodeHeights: number[]}[]} nodeHeightsOfChapters 
 * @param {number} pageHeight 
 */
export function groupPageFromChapters(contentOfChapters, nodeHeightsOfChapters, pageHeight) {
  let pageStartFrom = 0
  let allPages = []
  const t0 = new Date().valueOf()

  contentOfChapters.forEach((chapter, index) => {
    const pages = groupNodesByPage(chapter.markdown.split('\n\n'), nodeHeightsOfChapters[index].nodeHeights, pageHeight, pageStartFrom, chapter.id)
    allPages = allPages.concat(pages)
    pageStartFrom += pages.length
  })

  const t1 = new Date().valueOf()
  // todo
  console.log(`Grouping nodes takes ${t1 - t0}ms`)

  return allPages
}
