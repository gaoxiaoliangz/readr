import marked from 'marked'
import $ from 'jquery'

// 暂不支持包含图片的计算
// 计算没有等待图片加载完成，所以结果是不正确的
export function getNodeHeights(nodes) {
  let nodesHeight = []
  const startCalcHtmlTime = new Date().valueOf()

  Array.prototype.forEach.call(nodes, (node, index) => {
    if (node.className !== 'gb-line') {
      console.error('Unsupported content found!')
    }
    nodesHeight.push(node.clientHeight)
  })
  const endCalcHtmlTime = new Date().valueOf()

  if (process.env.NODE_ENV !== 'production') {
    console.info(`Calculating html takes ${endCalcHtmlTime - startCalcHtmlTime}ms`)
  }

  return nodesHeight
}

export function markdownToNodeStringList(markdown: string): string[] {
  const startTime = new Date().valueOf()
  let html = marked(markdown, {
    gfm: true,
    breaks: true
  })
  const endMarkedTime = new Date().valueOf()
  if (process.env.NODE_ENV !== 'production') {
    console.info(`Marked takes ${endMarkedTime - startTime}ms`)
  }
  const nodes = Array.prototype
    .map.call($(html), (ele, index) => {
      if (ele.nodeType === 3 && ele.nodeValue === '\n') {
        // 移除 html 里的回车
        return null
      }

      if (ele.tagName === 'P') {
        return `<p class="gb-line">${ele.innerHTML}</p>`
      } else {
        return `<div class="gb-line">${ele.outerHTML}</div>`
      }
    })
    .filter(node => node)

  const endModHtmlTime = new Date().valueOf()

  if (process.env.NODE_ENV !== 'production') {
    console.info(`Modifying html takes ${endModHtmlTime - endMarkedTime}ms`)
  }

  return nodes
}
