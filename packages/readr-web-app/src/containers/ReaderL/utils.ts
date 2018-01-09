export function resolveBookLocation(href, computedPages: TBookPage[]) {
  const chapterId = href.split('$')[0]
  const hash = href.split('$')[1]

  let i = 0
  let foundChapterPage

  while (i < computedPages.length) {
    const page = computedPages[i]
    if (`#${page.meta.chapterId}` === chapterId) {
      foundChapterPage = page.meta.pageNo

      if (hash) {
        if (page.meta.hash && page.meta.hash.indexOf(hash) !== -1) {
          // helpers.print('with hash', page.meta.pageNo)
          return page.meta.pageNo
        }
      } else {
        // helpers.print('without hash', page.meta.pageNo)
        return page.meta.pageNo
      }
    }
    i++
  }

  if (!foundChapterPage) {
    throw new Error('未找到位置！')
  }
  console.warn('所在章节未找到位置，已跳转至章节！')

  // helpers.print('foundChapterPage', foundChapterPage)
  return foundChapterPage
}
