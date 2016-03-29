import $ from 'jquery'

export function formatHTMLStringToArray(HTMLString) {
  let contentArray = []
  let $HTMLString = $(HTMLString)

  for (var i = 0; i < $HTMLString.length; i++) {
    contentArray.push($HTMLString[i].innerHTML)
  }
  return contentArray
}
