import { getNodeHeights, groupPageFromChapters } from './paging'

/**
 * 
 * @param {HTMLElement} wrap 
 * @param {TBookFlesh} flesh 
 */
function calcBook(estimatorNode, flesh) {
  // const startCalcHtmlTime = new Date().valueOf()
  const layoutInfo = Array.prototype
    .map.call(estimatorNode.childNodes, child => {
      const childDiv = child
      const id = childDiv.getAttribute('id')
      const nodeHeights = getNodeHeights(childDiv.childNodes)

      return {
        id,
        nodeHeights
      }
    })
  // const endCalcHtmlTime = new Date().valueOf()
  // console.log(`Calculating html takes ${endCalcHtmlTime - startCalcHtmlTime}ms`)

  // const computedPages = groupPageFromChapters(flesh, computedChapters, 900)

  // return computedPages
  return layoutInfo
}

export default calcBook
