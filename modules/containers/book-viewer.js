import React, { Component } from 'react'
import { Link } from 'react-router'
import 'whatwg-fetch'
import $ from 'jquery'
import Immutable from 'immutable'

const CONTENT_SELECTOR = ".pages li .content"

const MODE = {
  default: "VERTICAL",
  vertical: "VERTICAL",
  horizontal: "HORIZONTAL"
}

const defaultConfig = {
  pageHeight: 910,
  mode: MODE.default
}

let scrollTimer
let scrollTimeArray = []
scrollTimeArray.push((new Date()).valueOf())


class BookViewer extends Component {

  constructor(props) {
    super(props)

    let bookId = props.params.id
    let config = {
      pageHeight: 800,
      mode: MODE.vertical
    }
    config = Object.assign({}, defaultConfig, config)

    this.state = {
      pages: [
        {
          content: ["Loading ..."]
        }
      ],
      bookId: bookId,
      config: config
    }
  }

  genMapJSON(selector, config) {
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

  genMapAndSaveToLocal(bookContent, config) {
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
      map = this.genMapJSON(CONTENT_SELECTOR, config)
      this.saveToLocal("map", JSON.stringify(map))
    } catch (e) {
      console.error(e);
    }

    return map
  }

  loadBookContent(url, config) {
    let book = {}

    return new Promise(function(resolve){
      if(!this.readFromLocal("content")){
        fetch(url).then(function(res){
          return res.json()
        }).then(function(json){
          console.log("Book content received, now rerendering ...")
          book.content = json.data[0].html
          book.map = this.genMapAndSaveToLocal(json.data[0].html, config)
          this.saveToLocal("content", book.content)
          resolve(book)
        }.bind(this)).catch((err) => {
          console.error(err)
        })
      }else{
        console.log("Getting book content from local storage ...")
        book.content = this.readFromLocal("content")
        if(this.readFromLocal("map")){
          console.log("Getting map from local storage ...");
          book.map = JSON.parse(this.readFromLocal("map"))

          resolve(book)
        }else{
          console.log("Rerendering ...")
          book.map = this.genMapAndSaveToLocal(book.content, config)
          resolve(book)
        }
      }
    }.bind(this))
  }

  saveToLocal(key, value, type) {
    if(typeof value !== "string") {
      console.error("saveToLocal: Use string instead!")
    }else{
      if(typeof type === "undefined") {
        type = "BOOK"
      }
      switch (type) {
        case "BOOK":
          localStorage.setItem(`book${this.state.bookId}_${key}`, value)
          break;
        default:
      }
    }
  }

  readFromLocal(key, value, type) {
    if(typeof type === "undefined") {
      type = "BOOK"
    }
    switch (type) {
      case "BOOK":
        return localStorage.getItem(`book${this.state.bookId}_${key}`);
        break;
      default:
    }
  }

  filterBookContentByPage(bookContent, map, page) {
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

  convertPercentageToPage(p) {
    if(p>1) {
      console.error("Wrong parameter!")
      return null
    } else {
      return parseInt(p*this.state.view.pageSum) + 1
    }
  }

  handleScroll(e) {
    var timer,
        lastScrollTop = 0,
        view = this.state.view,
        bookId = this.state.bookId,
        pageSum = view.pageSum,
        scrollTop = $("body").scrollTop();

    function load(){
      var page,
          percentage = (scrollTop/view.bookHeight).toFixed(4);

      page = this.convertPercentageToPage(percentage);

      this.renderPages(page, 5)
      // this.setProgress(percentage);

      // set loc display
      // $(".functions .loc").html(page+"/"+pageSum);
    }
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(load.bind(this), 100);
  }

  renderPages(startPage, quantity) {
    let pages = []

    if(this.state.content) {
      for (var i = 0; i < quantity; i++) {
        pages.push(this.filterBookContentByPage(this.state.content, this.state.map, startPage+i))
      }

      if(this.state.config.mode === "VERTICAL") {
        pages = pages.map((page) => {
          page.style.position = "absolute"
          page.style.top = this.state.view.pageHeight * page.index

          return page
        })
      }

      this.setState({
        pages: pages
      })
    }
  }

  componentDidMount() {
    let bookId = this.props.params.id
    let url = "/api/v0.1/books/" + bookId + '/content/'
    let config = this.state.config

    this.loadBookContent(url, config).then(function(data) {
      this.setState({
        content: data.content,
        map: data.map,
        view: data.map.view
      })
    }.bind(this)).catch((err) => {
      console.error(err)
    })

    this.renderPages(1,5)

    window.addEventListener("scroll", this.handleScroll.bind(this))


    // todo
    $("body").on('mousemove', function(e){
      var y = e.pageY - $("body").scrollTop();
      var x = e.pageX;

      if(y < 90){
        $(".page-book-viewer .functions").slideDown();
      }else if($(".dia-wrap").length == 0){
        $(".page-book-viewer .functions").slideUp();
      }
    })
  }

  render() {
    return (
      <div className="page-book-viewer">
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span>
              <Link className="home" to="/bookstore"></Link>
            </span>
            <span className="title">奥德赛</span>
            <span className="loc">35/504</span>
          </div>
        </div>
        <Pages config={this.state.config} pages={this.state.pages} view={this.state.view} />
      </div>
    )
  }
}

class Pages extends Component {

  render() {
    let style = {}

    if(this.props.view) {
      if(this.props.config.mode === "VERTICAL") {
        style = {
          height: this.props.view.bookHeight
        }
      }
    }

    return (
      <div className="pages">
        <div className="container">
          <ul style={style}>
            {
              this.props.pages.map((page, index) => {
                return (
                  <Page key={index} page={page} config={this.props.config} />
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

class Page extends Component {
  render() {
    let page = this.props.page,
        liStyle,
        pStyle

    if(page.style){
      if(this.props.config.mode === "VERTICAL") {
        liStyle = {
          top: page.style.top,
          position: page.style.position,
          height: page.style.height
        }
        pStyle = {
          marginTop: page.style.marginTop
        }
      }
    }

    return (
      <li style={liStyle}>
        <div className="content">
          {
            page.content.map((ele, index) => {
              return (
                <p key={index} style={(index===0)?pStyle:{}}>{ele}</p>
              )
            })
          }
        </div>
      </li>
    )
  }
}

class Loading extends Component {
  render() {
    return (
      <div className="loading-wrap">
        <span className="icon icon-loading"></span>
      </div>
    )
  }
}

export default BookViewer
