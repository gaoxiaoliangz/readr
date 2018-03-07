export const progressToPage = (progress, totalPages) => Math.round(progress * totalPages)

export const pageToProgress = (page, totalPages) => page / totalPages

/**
 * progress = f(scrollTop)
 * y = kx + b
 * (0, screenHeight / totalHeight), ((totalHeight - screenHeight), 1)
 * @param {number} scrollTop 
 * @param {number} pageHeight 
 * @param {number} totalPages 
 */
export const scrollTopToProgress = (scrollTop, screenHeight, totalHeight) => {
  const b = screenHeight / totalHeight
  const k = (1 - b) / (totalHeight - screenHeight)
  return k * scrollTop + b
}

export const progressToScrollTop = (progress, screenHeight, totalHeight) => {
  const b = screenHeight / totalHeight
  const k = (1 - b) / (totalHeight - screenHeight)
  return (progress - b) / k
}

export const scrollTopToPage = (scrollTop, screenHeight, totalHeight, pageHeight = screenHeight) =>
  progressToPage(scrollTopToProgress(scrollTop, screenHeight, totalHeight), totalHeight / pageHeight)
