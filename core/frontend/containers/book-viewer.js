import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'

import BookPageList from 'components/book-page-list'
import Loading from 'components/loading'

import { delayStuff } from 'utils'
import { initBook, convertPercentageToPage, filterPages } from 'utils/book'
import { readCache, saveCache } from 'utils/cache'

import * as bookActions from 'actions/book'
import * as userActions from 'actions/user'

const actions = Object.assign({}, bookActions, userActions)

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
    // todo
    let defaultMode = "vertical"
    let screen = "hd"

    // todo: add mobile support
    if($(window).width() < 768) {
      screen = "mobile"
    }

    // todo
    let pageHeight = 900

    this.props.actions.fetchBookInfo(this.bookId, `books/${this.bookId}`)

    initBook(this.bookId, this.props.actions, pageHeight).then(data => {
      if(data === true) {
        this.props.actions.jumpTo(1)
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

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BookViewer)
