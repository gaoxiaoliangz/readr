import React, { Component } from 'react'
import { Link } from 'react-router'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookPageList from 'components/book-page-list'
import Loading from 'components/loading'
import { delayStuff } from 'utils'
import { mountBookContent, parseHTML, convertPercentageToPage, genPageList } from 'utils/book'
import * as actions from 'actions'

import $ from 'jquery'

function getNodesHeight(nodes) {
  if(typeof nodes !== 'object') {
    console.error('Nodes should be used instead of selector!');
  }

  let nodesHeight = []

  Array.prototype.forEach.call(nodes, (node, index) => {
    if(node.tagName.toLowerCase() !== "p") {
      console.error("Unsupported content found!")
    }
    nodesHeight.push(node.clientHeight)
  })

  return nodesHeight
}


function getUserReadingProgress(userId) {
  return {
    localProgress: '',
    cloudProgress: ''
  }
}

function getUserPreference(userId) {

}


class BookViewer extends Component {

  constructor(props) {
    super(props)
    this.bookId = props.params.id
    this.state = {

    }
  }

  // scrollToLoadPages() {
  //   let pageSum = this.props.book.content.pageSum
  //   let percentage = (document.body.scrollTop/(this.props.book.view.style.height*pageSum)).toFixed(4)
  //
  //   this.props.actions.loadPages(convertPercentageToPage(percentage, pageSum))
  // }

  scrollToLoadPages() {
    let pages = this.props.book.pages
    let pageSum = this.props.book.pages.length
    let percentage = (document.body.scrollTop/(900*pageSum)).toFixed(4)

    this.props.actions.loadPages(convertPercentageToPage(percentage, pageSum), pages)
  }

  // todo
  toggleBookPanel(e) {
    var y = e.pageY - $("body").scrollTop();
    var x = e.pageX;

    if(y < 90){
      $(".page-book-viewer .functions").slideDown();
    }else if($(".dia-wrap").length == 0){
      $(".page-book-viewer .functions").slideUp();
    }
  }

  addEventListeners() {
    window.addEventListener("scroll", delayStuff(this.scrollToLoadPages, 100).bind(this))
    window.addEventListener("mousemove", this.toggleBookPanel.bind(this))
  }

  componentDidMount() {

    function groupNodesByPage(nodes, nodesHeight, pageHeight) {
      let pages = []
      let page = []
      let thisPageHeight = 0
      let pageIndex = 0

      for (var i = 0; i < nodes.length; i++) {
        thisPageHeight += nodesHeight[i]
        page.push(nodes[i])
        if(thisPageHeight > pageHeight) {

          pages.push({
            props: {
              children: page,
              style: {
                top: pageIndex*pageHeight,
                position: 'absolute'
              },
              pageNo: pageIndex
            },
            type: "page"
          })

          pageIndex++
          thisPageHeight = 0
          page = []
        }
      }

      return pages
    }



    let mode = "VERTICAL"
    let screen = "HD"

    var book = this.props.book
    let actions = this.props.actions
    let bookId = this.bookId

    // book content is kept in this very variable
    let nodes
    // nodes are formated to be pages, defined here 'cause componentDidMount only trigger once
    // this could avoid performance issues
    let pages


    // temp
    let nodesHeight
    let pageHeight = 900

    // todo
    actions.fetchBookInfo(bookId, `books/${bookId}`)

    // todo: bug in mobile mode
    if($(window).width() < 768) {
      screen = "MOBILE"
    }


    mountBookContent(bookId, actions).then(getState => {
      nodes = parseHTML(getState().book.html)
      this.setState({
        isReadyToCalculate: true
      })
      nodesHeight = getNodesHeight(document.querySelector('.pages ul>li>.content').childNodes)
      this.setState({
        isReadyToCalculate: false
      })

      pages = groupNodesByPage(nodes, nodesHeight, pageHeight)
      actions.loadPages(1, pages)

      this.setState({
        isReadyToRead: true
      })
      // localStorage.setItem(`book${bookId}_nodes`)
    })

    this.addEventListeners()
  }

  render() {
    let book = this.props.book
    let pages = book.pages
    let pagesToRender = []
    let height = book.pages?book.pages.length * 900:'100%'

    if(book.isPagesLoaded) {
      let currentPage = book.currentPage
      pagesToRender = genPageList({
        startPage: currentPage,
        pages,
        offset: 2,
        quantity: 5
      })
    }

    return (
      <div className="page-book-viewer">
        {
          !this.state.isReadyToRead?(
            <Loading />
          ):null
        }
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span className="home">
              <Link to="/bookstore"></Link>
            </span>
            <span className="title">{this.state.bookName}</span>
            {
              this.state.isReadyToRead?(
                <span className="loc">{book.currentPage+"/"+book.pages.length}</span>
              ):null
            }
          </div>
        </div>
        {
          this.state.isReadyToCalculate?(
            <div className="pages">
              <div className="container">
                <ul>
                  <li>
                    <div className="content" dangerouslySetInnerHTML={{__html: book.html}} />
                  </li>
                </ul>
              </div>
            </div>
          ):null
        }
        {
          this.state.isReadyToRead?(
            <BookPageList height={height} view={book.view} bookId={this.bookId} pages={pagesToRender} />
          ):null
        }
      </div>
    )
  }
}

BookViewer.propTypes = {
  book: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookViewer)
