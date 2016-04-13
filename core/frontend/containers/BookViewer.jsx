import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import $ from 'jquery'

import { lazilize, initBook, getView, getProgress, setProgress, convertPercentageToPage, filterPages, readCache, saveCache, delayStuff, callApi } from 'utils'
import * as actions from 'actions'
import { API_ROOT } from 'constants/APIS'

import BookPageList from 'components/BookPageList'
import Loading from 'components/Loading'

let windowWidth
if(typeof window !== 'undefined') {
  windowWidth = $(window).width()
}

class BookViewer extends Component {
  constructor(props) {
    super(props)

    this.bookId = props.params.id
    this.state = {
      showPanel: false,
      isListenersAdded: false
    }
  }

  // props have to be loaded and updated simultaneously
  // so it's better to put it in React component
  scrollToLoadPages() {
    let props = this.props
    let pages = props.book.pages.props.children
    let pageSum = pages.length
    let percentage = (document.body.scrollTop/(props.book.pages.props.view.pageHeight*pageSum)).toFixed(4)
    let page = convertPercentageToPage(percentage, pageSum)

    props.actions.jumpTo(page)
    if(this.props.user.authed) {
      setProgress(props.book.id, {
        page: page,
        page_sum: pageSum,
        percentage
      })
    }
  }

  prepareBook(bookId, props, view) {
    let actions = props.actions
    let user = props.user

    initBook(bookId, actions, view).then(data => {
      if(data.pages) {
        if(user.authed) {
          getProgress(bookId).then((res) => {
            if(!res.message) {
              actions.jumpTo(res.page)
              document.body.scrollTop = data.pages.props.children.length * view.pageHeight * res.percentage
            }else{
              actions.jumpTo(1)
            }
            this.setState({
              isLoading: false
            })
          }).catch((err) => {
            this.setState({
              isLoading: false
            })
            actions.jumpTo(1)
          })
        }else{
          this.setState({
            isLoading: false
          })
          actions.jumpTo(1)
          // this is a bad fix
          // localstorage solution is recommended
          document.body.scrollTop = document.body.scrollTop + 1
        }
      }
    })
  }

  addEventListeners() {
    let timers = []

    function lazilize(callback, t) {
      return () => {
        clearTimeout(timers.slice(-1)[0])

        let timer = setTimeout(callback.bind(this), t)
        timers.push(timer)
      }
    }

    this.handleScroll = lazilize(this.scrollToLoadPages.bind(this), 100)
    this.handleResize = function() {
      let view = getView()

      if($(window).width() !== windowWidth) {
        this.setState({
          isLoading: true
        })

        windowWidth = $(window).width()
        lazilize(this.prepareBook.bind(this, this.bookId, this.props, view), 500)()
      }
    }.bind(this)

    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
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

  componentDidMount() {
    const actions = this.props.actions
    const bookId = this.bookId

    actions.fetchUserAuthInfo()
    actions.fetchBookInfo(bookId, `books/${this.bookId}`).then(getState => {
      this.prepareBook(bookId, Object.assign({}, { actions }, getState()), getView())
    })

    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  render() {
    let book = this.props.book
    let pages = book.pages?book.pages.props.children:null
    let pagesToRender = []
    let view = this.props.view
    let height = pages?pages.length * view.pageHeight:'100%'

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
      <div className={`page-book-viewer book-viewer--${view.screen}`}
           onMouseMove={this.toggleBookPanel.bind(this)} >
        {
          this.state.isLoading || book.isFetchingInfo || book.isFetchingContent?(
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
    user: state.user,
    view: state.view
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BookViewer)
