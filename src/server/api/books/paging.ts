import _ from 'lodash'

// long paragraph situation doesn't seem to affect this function
// offset distance is always negtive or zero
// the index will be of the paragraph with this offset at the end
function getPageOffset({ pageIndex, pageHeight, nodeHeights }: {
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

function getNodesOfPage({ pageIndex, pageHeight, nodeHeights }: {
  pageIndex: number
  pageHeight: number
  nodeHeights: number[]
}) {
  const { offset, nodeStartIndex } = getPageOffset({ pageIndex, pageHeight, nodeHeights })
  const nodes: number[] = []
  let nodeIndex = nodeStartIndex
  let nodeEndIndex
  let nodeHeightSum = offset + nodeHeights[nodeStartIndex]

  nodeIndex++
  if (nodeHeightSum < pageHeight) {
    while (nodeHeightSum <= pageHeight && nodeIndex !== nodeHeights.length) {
      nodeHeightSum += nodeHeights[nodeIndex]
      nodeIndex++
    }
    nodeEndIndex = nodeIndex - 1
  } else {
    nodeEndIndex = nodeStartIndex
  }

  for (let i = nodeStartIndex; i <= nodeEndIndex && i <= nodeHeights.length - 1; i++) {
    nodes.push(i)
  }

  return { nodes, offset }
}

export type Page = {
  offset: number
  nodes: number[]
}
type GroupNodesByPageConfig = {
  nodeHeights: number[]
  pageHeight: number
}
export function groupNodesIntoPages(config: GroupNodesByPageConfig): Page[] {
  const { nodeHeights, pageHeight } = config
  const pageHeightSum = nodeHeights.reduce((a, b) => (a + b), 0)
  const pageSum = Math.ceil(pageHeightSum / pageHeight)

  if (nodeHeights.length === 0) {
    return [{
      nodes: [],
      offset: 0
    }]
  }

  return _.times(pageSum, i => {
    return getNodesOfPage({ pageIndex: i, nodeHeights, pageHeight })
  })
}

type SectionsToPagesConfig = {
  sections: Section[]
  sectionsOfNodeHeights: number[][]
  newPageAfterSection: boolean
  pageHeight: number
}

export function sectionsToPages(config: SectionsToPagesConfig) {
  const { sections, sectionsOfNodeHeights, newPageAfterSection, pageHeight } = config

  if (newPageAfterSection) {
    return sections
      .map((section, sectionIndex) => {
        const nodeHeights = sectionsOfNodeHeights[sectionIndex]
        const pages = groupNodesIntoPages({
          nodeHeights,
          pageHeight
        })
        return {
          ...section,
          pages: pages.map(page => {
            return {
              ...page,
              nodes: page.nodes.map(nodeIndex => {
                return section.htmlObjects[nodeIndex]
              }),
              sectionId: section.id,
              sectionIds: [section.id]
            }
          })
        }
      })
      .reduce((result, section, index) => {
        return result.concat(section.pages)
      }, [])
      .map((page, index) => {
        return {
          ...page,
          pageNo: index + 1
        }
      })
  }

  // scroll mode paging
  const nodeHeights = sectionsOfNodeHeights.reduce((allHeights, sectionHeights) => {
    return allHeights.concat(sectionHeights)
  }, [])

  const sectionNodeCounts = sections.map(section => {
    return section.htmlObjects.length
  })

  const resolveNode = (globalNodeIndex) => {
    let pointer = 0
    let sum = sectionNodeCounts[pointer]
    while (globalNodeIndex + 1 > sum) {
      pointer++
      sum += sectionNodeCounts[pointer]
    }

    // from here pointer is the current section index
    const localNodeIndex = globalNodeIndex - sectionNodeCounts.slice(0, pointer).reduce((total, current) => {
      return total + current
    }, 0)

    return {
      node: sections[pointer].htmlObjects[localNodeIndex],
      sectionId: sections[pointer].id
    }
  }

  return groupNodesIntoPages({
    nodeHeights,
    pageHeight
  })
    .map((page, index) => {
      let sectionIds = []
      const nodes = page.nodes.map((nodeIndex) => {
        const { sectionId, node } = resolveNode(nodeIndex)
        sectionIds.push(sectionId)
        return node
      })
      sectionIds = _.union(sectionIds)

      return {
        pageNo: index + 1,
        offset: page.offset,
        nodes,
        sectionId: _.first(sectionIds),
        sectionIds
      }
    })
}
