import marked from 'marked'
import $ from 'jquery'

// 暂不支持包含图片的计算
// 计算没有等待图片加载完成，所以结果是不正确的
export function getNodeHeights(nodes) {
  console.log('dom ready, getNodeHeights')
  let nodesHeight = []

  Array.prototype.forEach.call(nodes, (node, index) => {
    if (node.className !== 'gb-line') {
      console.error('Unsupported content found!')
    }
    nodesHeight.push(node.clientHeight)
  })

  return nodesHeight
}


export function markdownToNodeStringList(markdown: string): string[] {
  console.log('start md')
  let html = marked(markdown, {
    gfm: true,
    breaks: true
  })
  console.log('done marked')
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
  // console.log(nodes)
  console.log('end md')
  return nodes
}
