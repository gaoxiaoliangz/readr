import React, { Component } from 'react'
import { Link } from 'react-router'
import Immutable from 'immutable'
import { connect } from 'react-redux'

import BookPageList from 'components/book-page-list'
import { mountBook, loadPages } from 'actions'
import { genPageList } from 'utils/filters'

import { convertPercentageToPage } from 'utils/book'

import $ from 'jquery'

let config = {
  view: "HD"
}


function lazyScroll(callback, delay) {
  return function() {
    clearTimeout(this.__scrollTimer__)
    this.__scrollTimer__ = setTimeout(callback.bind(this), delay)
  }
}

class BookViewer extends Component {

  scrollToLoadPages() {
    console.log(this);
    let timer,
        lastScrollTop = 0,
        bookId = this.props.bookId,
        pageSum = this.props.book.pageSum,
        scrollTop = $("body").scrollTop(),
        page,
        // todo: 900
        percentage = (scrollTop/(900*pageSum)).toFixed(4)

    page = convertPercentageToPage(percentage, pageSum)
    this.props.loadPages(this.bookId, page)
  }


  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  addEventListeners() {
    window.addEventListener("scroll", lazyScroll(this.scrollToLoadPages).bind(this))
  }

  componentDidMount() {
    this.props.mountBook(this.bookId, config, function(){
      this.props.loadPages(this.bookId, 1)
      this.addEventListeners.bind(this)()
    }.bind(this))
  }

  render() {
    let book = this.props.book
    let pages = []
    let quantity = 5
    let startPage = 1
    let offset = 2
    let height = "100%"

    if(book.content.nodes.length) {
      if(book.isPagesLoaded) {
        pages = genPageList(book.currentPage, quantity, offset, book.content.nodes, {pageHeight: 900})

        // todo: reduce
        // height = book.content.nodes.reduce((a,b)=>a.props.style.height+b.props.style.height)
        // height = book.content.nodes.reduce((a,b)=>{
        //   console.log(a.props);
        //   console.log(b.props.style.height);
        //   return a.props.style.height+b.props.style.height
        // })

        height = 0
        for (var i = 0; i < book.content.nodes.length; i++) {
          height += book.content.nodes[i].props.style.height
        }
      }else{
        pages = [
          {
            props: {
              children: book.content.nodes,
              pageNo: "NA"
            },
            type: "page",
          }
        ]
      }
    }

    return (
      <div className="page-book-viewer">
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span className="home">
              <Link to="/bookstore"></Link>
            </span>
            <span className="title"></span>
            <span className="loc">{book.currentPage}</span>
          </div>
        </div>
        {
          (()=>{
            if(book.content.nodes.length) {
              return (
                <BookPageList height={height} config={config} bookId={this.bookId} pages={pages} />
              )
            }
          })()
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

export default connect(
  mapStateToProps,
  { mountBook, loadPages }
)(BookViewer)
