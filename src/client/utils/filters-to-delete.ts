import _ from 'lodash'

export function filterContentNodesByPage(contentNodes, config, page) {
  var elements = _.cloneDeep(contentNodes), pageWrap = {},
      h = 0, h2 = 0, i = 0, flag = true, startIndex = 0, endIndex = 0, eleOffset = 0, top = 0,
      pageContent = [], style = {}

  while (i < elements.length && h < config.pageHeight * page) {
    h = parseInt(elements[i].props.style.height) + h
    h2 = h - parseInt(elements[i].props.style.height)
    if ((h > config.pageHeight * (page - 1)) && (flag == true)) {
      startIndex = i
      eleOffset = h2 - config.pageHeight * (page - 1)
      flag = false
    }
    endIndex = i
    i++
  }
  top = (page - 1) * config.pageHeight;

  for(i = startIndex; i <= endIndex; i++){
    switch (elements[i].type) {
      case "p":
        pageContent.push(elements[i])
        break
      default:
        console.error("Unsupported content found!");
    }
  }

  if (config.mode === "VERTICAL") {
    style = {
      top: top,
      position: "absolute"
    }
  }else{
    style = {
      top: top,
      position: "absolute"
    }
  }

  pageContent[0].props.style.marginTop = eleOffset
  pageWrap = {
    props: {
      children: pageContent,
      style: style,
      pageNo: page
    },
    type: "page"
  }

  return pageWrap
}
