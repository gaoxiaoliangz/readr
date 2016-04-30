
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

export function convertPercentageToPage(p, pageSum) {
  if(p>1) {
    console.error("Wrong parameter!")
    return null
  } else {
    return parseInt(p*pageSum) + 1
  }
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


export function getNodeHeights(nodes) {
  let nodesHeight = []

  Array.prototype.forEach.call(nodes, (node, index) => {
   if(node.tagName.toLowerCase() !== "p") {
     console.error("Unsupported content found!")
   }
   nodesHeight.push(node.clientHeight)
  })

  return nodesHeight
}

function groupNodesByPage(nodes, nodeHeights, pageHeight) {
  let pages = []
  let pageHeightSum = nodeHeights.reduce((a, b) => (a+b), 0)
  let pageSum = Math.ceil(pageHeightSum/pageHeight)

  nodes = nodes.map((node, index) => {
    node.props.index = index
    return node
  })

  // long paragraph situation doesn't seem to affect this function
  // offset distance is always negtive or zero
  // the index will be of the paragraph with this offset at the end
  let getPageOffset = function(pageIndex) {
    let offset = 0
    let i = 0
    let index

    if(pageIndex !== 0) {
      let nodeHeightSum = 0
      while(nodeHeightSum <= pageHeight * pageIndex) {
        nodeHeightSum += nodeHeights[i]
        i++
      }
      offset = nodeHeightSum - nodeHeights[i-1] - pageIndex * pageHeight
      index = i - 1
    } else {
      index = 0
    }

    return {
      offset,
      index
    }
  }

  let getNodesOfPage = function(pageIndex) {
    let offsetObject = getPageOffset(pageIndex)
    let nodeStartIndex = offsetObject.index
    let offset = offsetObject.offset


    let i = nodeStartIndex
    let nodeEndIndex
    let pageNodes = []

    let nodeHeightSum = offset + nodeHeights[nodeStartIndex]
    i++

    if(nodeHeightSum < pageHeight) {
      while (nodeHeightSum <= pageHeight && i !== nodes.length) {
        nodeHeightSum += nodeHeights[i]
        i++
      }
      nodeEndIndex = i - 1
    }else{
      nodeEndIndex = nodeStartIndex
    }

    for(let i = nodeStartIndex; i <= nodeEndIndex && i <= nodes.length - 1; i++) {
      pageNodes.push(nodes[i])
    }

    return [pageNodes, offset]
  }

  // finally
  for(let i = 0; i < pageSum; i++) {
    let array = getNodesOfPage(i)
    let nodes = array[0]
    let offset = array[1]

    pages.push({
      props: {
        children: nodes,
        style: {
          top: i*pageHeight,
          position: 'absolute',
          height: pageHeight
        },
        pageNo: i+1,
        offset
      },
      type: "page"
    })
  }

  return pages
}


function parseHTML(htmlString) {
  let nodes = []
  let $html = document.createElement("div")

  $html.innerHTML = htmlString
  $html = $html.childNodes

  for (var i = 0; i < $html.length; i++) {
    if($html[i].nodeType != 1) {
      continue
    }else{
      nodes.push({
        type: $html[i].tagName.toLowerCase(),
        props: {
          children: $html[i].innerHTML
        }
      })
    }
  }
  return nodes
}
