import React, { Component } from 'react'
import { Link } from 'react-router'
import 'whatwg-fetch'
import $ from 'jquery'
import Immutable from 'immutable'

import { convertPercentageToPage, loadBookContent, filterBookContentByPage } from 'utils/book'
import { saveToLocal, readFromLocal } from 'utils/local'

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
      bookName: "Loading ...",
      currentPage: "NA",
      config: config
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

      page = convertPercentageToPage(percentage, this.state.view.pageSum);

      this.renderPages(page, 5)
      // this.setProgress(percentage);

      this.setState({
        currentPage: page
      })
    }
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(load.bind(this), 100)
  }

  renderPages(startPage, quantity) {
    let pages = []

    if(this.state.content) {
      for (var i = 0; i < quantity; i++) {
        pages.push(filterBookContentByPage(this.state.content, this.state.map, startPage+i))
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

  componentWillUnmount () {
    clearTimeout(scrollTimer)
  }

  componentDidMount() {
    let bookId = this.props.params.id
    let url = "/api/v0.1/books/" + bookId + '/content/'
    let url2 = "/api/v0.1/books/" + bookId
    let urlProgress = "/api/v0.1/books/" + bookId + '/progress/'

    let config = this.state.config

    loadBookContent.bind(this)(url, config).then(function(data) {
      this.setState({
        content: data.content,
        map: data.map,
        view: data.map.view
      })

      // todo: wtf!!! 500 error with fetch
      $.ajax({
        url: urlProgress,
        type: 'GET'
      }).done(function(json){
        let progress = json.data[0].reading_progress
        this.setState({
          progress: progress
        })
        let startPage = convertPercentageToPage(progress, data.map.view.pageSum)
        this.renderPages(startPage, 5)
        $("body").scrollTop(2000)
      }.bind(this))


    }.bind(this)).catch((err) => {
      console.error(err)
    })

    // fetch(urlProgress).then(function(res){
    //   console.log(res);
    //   // return res.json()
    // }).then(function(json){
    //   // let progress = json.data[0].reading_progress
    //   // this.setState({
    //   //   progress: progress
    //   // })
    //   // let startPage = convertPercentageToPage(progress, data.map.view.pageSum)
    //   // this.renderPages(startPage, 5)
    //   // $("body").scrollTop(2000)
    // }.bind(this))

    // get book info
    fetch(url2).then(function(res){
      return res.json()
    }).then(function(json){
      this.setState({
        bookName: json.data[0].book_name
      })
    }.bind(this)).catch((err) => {
      console.log(err)
    })

    window.addEventListener("scroll", this.handleScroll.bind(this))

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
    let loc = this.state.view?this.state.currentPage+"/"+this.state.view.pageSum:"NA/NA"

    return (
      <div className="page-book-viewer">
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span className="home">
              <Link to="/bookstore"></Link>
            </span>
            <span className="title">{this.state.bookName}</span>
            <span className="loc">{loc}</span>
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
        pStyle,
        currentPage

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
      currentPage = page.index + 1
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
        <div className="pg_num">{currentPage}</div>
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
