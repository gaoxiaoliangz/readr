export function filterPages(config) {
  let {startPage, quantity, offset, pages} = config
  let newPages = []

  while (startPage - offset < 0) {
    offset--
  }
  startPage = startPage - offset

  for (let i = startPage; i < quantity + startPage && i < pages.length; i++) {
    let page = pages[i]
    newPages.push(page)
  }

  return newPages
}


export function htmlToPages(html, nodeHeights, view) {
  let pageHeight = view.pageHeight
  let nodes = parseHTML(html)
  let pages = groupNodesByPage(nodes, nodeHeights, pageHeight)

  return {
    type: 'pages',
    props: {
      children: pages,
      view
    }
  }
}

export function pagesToHtml(pages) {
  let nodes = pages.props.children.reduce((a, b) => (a.concat(b.props.children)), [])
  let uniqueNodes = []
  let realIndex = 0

  // remove duplicate nodes
  for (let i = 0; i < nodes.length; i++) {
    nodes[i]
    if (nodes[i].props.index === realIndex) {
      uniqueNodes.push(nodes[i])
      realIndex++
    }
  }

  let html = parseNodes(uniqueNodes)

  return html
}



export function percentageToPage(p: number, pageSum: number) {
  if (p > 1) {
    console.error('Wrong parameter!')
    return null
  } else {
    return parseInt((p * pageSum) as any) + 1
  }
}

// funcs used internally

function parseHTML(htmlString: string) {
  let nodes = []
  let $html = document.createElement('div')
  let $htmlNodes

  $html.innerHTML = htmlString
  $htmlNodes = $html.childNodes

  for (let i = 0; i < $htmlNodes.length; i++) {
    if ($htmlNodes[i].nodeType != 1) {
      continue
    } else {
      nodes.push({
        type: $htmlNodes[i].tagName.toLowerCase(),
        props: {
          children: $htmlNodes[i].innerHTML
        }
      })
    }
  }
  return nodes
}

function parseNodes(nodes) {
  let html = ''

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].type !== 'p') {
      console.error('Unsupported node found!')
      continue
    } else {
      html += `<p>${nodes[i].props.children}</p>`
    }
  }

  return html
}





// original
function groupNodesByPage(nodes, nodeHeights, pageHeight) {
  let pages = []
  let pageHeightSum = nodeHeights.reduce((a, b) => (a + b), 0)
  let pageSum = Math.ceil(pageHeightSum / pageHeight)

  nodes = nodes.map((node, index) => {
    node.props.index = index
    return node
  })

  // long paragraph situation doesn't seem to affect this function
  // offset distance is always negtive or zero
  // the index will be of the paragraph with this offset at the end
  const getPageOffset = function (pageIndex) {
    let offset = 0
    let i = 0
    let index

    if (pageIndex !== 0) {
      let nodeHeightSum = 0
      while (nodeHeightSum <= pageHeight * pageIndex) {
        nodeHeightSum += nodeHeights[i]
        i++
      }
      offset = nodeHeightSum - nodeHeights[i - 1] - pageIndex * pageHeight
      index = i - 1
    } else {
      index = 0
    }

    return {
      offset,
      index
    }
  }

  const getNodesOfPage = function (pageIndex) {
    let offsetObject = getPageOffset(pageIndex)
    let nodeStartIndex = offsetObject.index
    let offset = offsetObject.offset


    let i = nodeStartIndex
    let nodeEndIndex
    let pageNodes = []

    let nodeHeightSum = offset + nodeHeights[nodeStartIndex]
    i++

    if (nodeHeightSum < pageHeight) {
      while (nodeHeightSum <= pageHeight && i !== nodes.length) {
        nodeHeightSum += nodeHeights[i]
        i++
      }
      nodeEndIndex = i - 1
    } else {
      nodeEndIndex = nodeStartIndex
    }

    for (let i = nodeStartIndex; i <= nodeEndIndex && i <= nodes.length - 1; i++) {
      pageNodes.push(nodes[i])
    }

    return [pageNodes, offset]
  }

  // finally
  for (let i = 0; i < pageSum; i++) {
    let array = getNodesOfPage(i)
    let nodes = array[0]
    let offset = array[1]

    pages.push({
      props: {
        children: nodes,
        style: {
          top: i * pageHeight,
          position: 'absolute',
          height: pageHeight
        },
        pageNo: i + 1,
        offset
      },
      type: 'page'
    })
  }

  return pages
}
