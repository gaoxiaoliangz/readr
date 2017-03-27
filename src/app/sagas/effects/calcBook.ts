import { getNodeHeights, groupPageFromChapters } from './paging'

function calcBook(wrap: HTMLElement, flesh: TBookFlesh) {
  const startCalcHtmlTime = new Date().valueOf()
  const computedChapters = Array.prototype
    .map.call(wrap.childNodes, child => {
      const childDiv = child as HTMLDivElement
      const id = childDiv.getAttribute('id')
      const nodeHeights = getNodeHeights(childDiv.querySelector('.lines').childNodes)

      return {
        id,
        nodeHeights
      }
    })
  const endCalcHtmlTime = new Date().valueOf()
  // helpers.print(`Calculating html takes ${endCalcHtmlTime - startCalcHtmlTime}ms`)

  const computedPages = groupPageFromChapters(flesh, computedChapters, 900)

  return computedPages
}

export default calcBook
