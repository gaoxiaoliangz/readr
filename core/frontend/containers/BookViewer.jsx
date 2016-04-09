import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'

import { initBook, convertPercentageToPage, filterPages, readCache, saveCache, delayStuff } from 'utils'
import * as actions from 'actions'
// import { fetchBookInfo, fetchUserAuthInfo, jumpTo, loadPages, setBookMode, fetchBookContent } from 'actions'
// const actions = { fetchBookInfo, fetchUserAuthInfo, jumpTo, loadPages, setBookMode, fetchBookContent }

import BookPageList from 'components/BookPageList'
import Loading from 'components/Loading'

// todo: remove this
import $ from 'jquery'


// todo
function getUserReadingProgress(userId) {
  return {
    localProgress: '',
    cloudProgress: ''
  }
}

// todo
function getUserPreference(userId) {

}

class BookViewer extends Component {
  constructor(props) {
    super(props)
    this.bookId = props.params.id
    this.state = {
      showPanel: false
    }
  }

  scrollToLoadPages() {
    let pageSum = this.props.book.pages.length
    let percentage = (document.body.scrollTop/(900*pageSum)).toFixed(4)

    this.props.actions.jumpTo(convertPercentageToPage(percentage, pageSum))
  }

  // todos:
  // unmounting bug
  // add animation
  toggleBookPanel(event) {
    var y = event.pageY - document.body.scrollTop

    if(y < 90){
      this.setState({
        showPanel: true
      })
    }else{
      this.setState({
        showPanel: false
      })
    }
  }

  addEventListeners() {
    window.addEventListener("scroll", delayStuff(this.scrollToLoadPages, 100).bind(this))
    window.addEventListener("mousemove", this.toggleBookPanel.bind(this))
  }

  componentDidMount() {
    const actions = this.props.actions
    // todo
    let defaultMode = "vertical"
    let screen = "hd"

    // todo: add mobile support
    if($(window).width() < 768) {
      screen = "mobile"
    }

    // todo
    let pageHeight = 900

    actions.fetchUserAuthInfo()
    actions.fetchBookInfo(this.bookId, `books/${this.bookId}`)

    initBook(this.bookId, actions, pageHeight).then(data => {
      if(data === true) {
        actions.jumpTo(1)
        this.addEventListeners()
      }
    })
  }

  render() {
    let book = this.props.book
    let pages = book.pages
    let pagesToRender = []
    let height = book.pages?book.pages.length * 900:'100%'

    if(book.isPagesLoaded) {
      let currentPage = book.currentPage

      pagesToRender = filterPages({
        startPage: currentPage,
        offset: 2,
        quantity: 5,
        pages
      })
    }

    return (
      <div className="page-book-viewer">
        {
          book.isFetchingInfo||book.isFetchingContent?(
            <Loading />
          ):null
        }
        {
          this.state.showPanel && book.meta && book.isPagesLoaded === true ?(
            <div className="functions">
              <div className="container">
                <span className="home">
                  <Link to="/bookstore"></Link>
                </span>
                <span className="title">{book.meta.book_name}</span>
                <span className="loc">{book.currentPage+"/"+book.pages.length}</span>
              </div>
            </div>
          ):null
        }
        {
          book.mode === 'render' ?(
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
          book.mode === 'vertical' ?(
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

export default connect(
  state => ({
    book: state.book,
    user: state.user
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BookViewer)
