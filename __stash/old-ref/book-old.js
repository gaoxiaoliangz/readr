import $ from 'jquery'
import { saveToLocal, readFromLocal } from './local'

const CONTENT_SELECTOR = ".pages li .content"


function loadBookContent(url, config) {
  let book = {}

  return new Promise(function(resolve){
    if(!readFromLocal.bind(this)("content")){
      fetch(url).then(function(res){
        return res.json()
      }).then(function(json){
        console.log("Book content received, now rerendering ...")
        book.content = json.data[0].html
        book.map = _genMapAndSaveToLocal.bind(this)(json.data[0].html, config)
        saveToLocal.bind(this)("content", book.content)
        resolve(book)
      }.bind(this)).catch((err) => {
        console.error(err)
      })
    }else{
      console.log("Getting book content from local storage ...")
      book.content = readFromLocal.bind(this)("content")
      if(readFromLocal.bind(this)("map")){
        console.log("Getting map from local storage ...");
        book.map = JSON.parse(readFromLocal.bind(this)("map"))

        resolve(book)
      }else{
        console.log("Rerendering ...")
        book.map = _genMapAndSaveToLocal.bind(this)(book.content, config)
        resolve(book)
      }
    }
  }.bind(this))
}


function filterBookContentByPage(bookContent, map, page) {
  var elements = $(bookContent),
      pageObj,
      h = 0, h2 = 0, i = 0, s = true, para = 0, para2 = 0, para_margin = 0, top = 0, para_qt = 0,
      p_qt = map.elements.length,
      page_content = [],
      view = map.view

  while (i < p_qt && h < view.pageHeight * page) {
    h = parseInt(map.elements[i].height) + h;
    h2 = h - parseInt(map.elements[i].height);
    if ((h > view.pageHeight * (page - 1)) && (s == true)) {
      para = i;
      para_margin = h2 - view.pageHeight * (page - 1);
      s = false;
    }
    para2 = i;
    i++;
  }
  para_qt = para2 - para + 1;
  top = (page - 1) * view.pageHeight;

  for(i = para; i <= para2; i++){
    switch (map.elements[i].type) {
      case "P":
        page_content.push(elements.eq(i).html())
        break
      default:
        console.error("Unsupported content found!");
    }
  }

  pageObj = {
    style: {
      marginTop: para_margin,
      height: view.pageHeight
    },
    content: page_content,
    index: page-1
  }

  return pageObj
}

function _genMapAndSaveToLocal(bookContent, config) {
  let map,
      contentArray = [],
      $bookContent = $(bookContent)

  try {
    for (var i = 0; i < $bookContent.length; i++) {
      contentArray.push($bookContent[i].innerHTML)
    }
    this.setState({
      pages: [
        {
          content: contentArray
        }
      ]
    })
    map = _genMapJSON(CONTENT_SELECTOR, config)
    saveToLocal.bind(this)("map", JSON.stringify(map))
  } catch (e) {
    console.error(e);
  }

  return map
}

function _genMapJSON(selector, config) {
  let elements = [],
      map = {}

  map.view = {
    bookHeight: $(selector).height(),
    pageSum: Math.ceil($(selector).height()/config.pageHeight),
    windowWidth: $(window).width(),
    pageHeight: config.pageHeight,
    pageWidth: $(selector).width(),
    fontSize: $(selector).find("p").css("font-size"),
    lineHeight: $(selector).find("p").css("line-height")
  }

  $(selector).children().each(function(index){
    var h = $(this).height(),
        type = $(this).prop("tagName"),
        renderingStr

    if(type !== "P") {
      console.error("Unsupported content found!");
    }

    elements.push({
      type: type,
      height: h
    })
  })

  map.elements = elements

  return map
}



export { convertPercentageToPage, loadBookContent, filterBookContentByPage }
