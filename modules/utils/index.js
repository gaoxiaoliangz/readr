import $ from 'jquery'

export function formatHTMLStringToArray(HTMLString) {
  let contentArray = []
  let $HTMLString = $(HTMLString)

  for (var i = 0; i < $HTMLString.length; i++) {
    contentArray.push({
      tagName: $HTMLString[i].tagName,
      innerHTML: $HTMLString[i].innerHTML
    })
  }
  return contentArray
}

export function parseHTML(htmlString) {
  let nodes = []
  let $html = $(htmlString)

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

// todo: when multiple functins are called?
export function delayStuff(callback, delay) {
  return function() {
    clearTimeout(this.__delayStuffTimer__)
    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay)
  }
}
