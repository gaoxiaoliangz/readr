import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'

import { initBook, getProgress, setProgress, convertPercentageToPage, filterPages, readCache, saveCache, delayStuff, callApi } from 'utils'
import * as actions from 'actions'
import { API_ROOT } from 'constants/APIS'
// import fetchBookInfo, fetchUserAuthInfo, jumpTo, loadPages, setBookMode, fetchBookContent as actions from 'actions'
// const actions = { fetchBookInfo, fetchUserAuthInfo, jumpTo, loadPages, setBookMode, fetchBookContent }

import BookPageList from 'components/BookPageList'
import Loading from 'components/Loading'

// todo: remove this
import $ from 'jquery'


function getView() {
  let aspectRatio = 7/9

  if($(window).width() <= 540) {
    return {
      screen: 'phone',
      pageWidth: $(window).width(),
      pageHeight: $(window).width()/aspectRatio
    }
  }else{
    return {
      screen: 'hd',
      pageWidth: 700,
      pageHeight: 700/aspectRatio
    }
  }
}


class BookViewer extends Component {
  constructor(props) {
    super(props)
    this.bookId = props.params.id
    this.state = {
      showPanel: false
    }
  }


  prepareBook(bookId, actions, view) {
    initBook(bookId, actions, view).then(data => {
      if(data.pages) {
        getProgress(bookId).then((res) => {
          if(!res.message) {
            this.addEventListeners()

            // scroll to position and this will trigger JUMP_TO
            document.body.scrollTop = data.pages.props.children.length * view.pageHeight * res.percentage
          }else{
            this.addEventListeners()
            actions.jumpTo(1)
          }
        })
      }
    })
  }


  scrollToLoadPages(props) {
    let pages = props.book.pages.props.children
    let pageSum = pages.length
    let percentage = (document.body.scrollTop/(this.state.pageHeight*pageSum)).toFixed(4)

    props.actions.jumpTo(convertPercentageToPage(percentage, pageSum))
    setProgress(this.bookId, {
      page: this.props.book.currentPage,
      page_sum: pageSum,
      percentage
    })
  }

  // todos:
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

  setView() {
    this.setState(getView())
  }

  handleResize() {
    this.setView()
    this.prepareBook(this.bookId, this.props.actions, getView())
  }

  addEventListeners() {
    this.handleScroll = delayStuff(this.scrollToLoadPages.bind(this, this.props), 100).bind(this)
    this.handleResize2 = delayStuff(this.handleResize.bind(this), 100).bind(this)

    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize2)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidMount() {
    this.setView()

    const actions = this.props.actions
    const bookId = this.bookId

    actions.fetchUserAuthInfo()
    actions.fetchBookInfo(bookId, `books/${this.bookId}`)

    this.prepareBook(bookId, actions, getView())
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  render() {
    let book = this.props.book
    let pages = book.pages?book.pages.props.children:null
    let pagesToRender = []
    let height = pages?pages.length * this.state.pageHeight:'100%'

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
      <div className={`page-book-viewer book-viewer--${this.state.screen}`}
           onMouseMove={this.toggleBookPanel.bind(this)} >
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
                <span className="title">{book.meta.title}</span>
                <span className="loc">{book.currentPage+"/"+pages.length}</span>
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
            <div>
              <BookPageList height={height} view={book.view} bookId={this.bookId} pages={pagesToRender} />
            </div>
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
