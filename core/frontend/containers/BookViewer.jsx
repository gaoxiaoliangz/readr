import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash'

import { initBook, getView, getProgress, setProgress, convertPercentageToPage, filterPages, readCache, saveCache, callApi } from 'utils'
import * as actions from 'actions'
import { API_ROOT } from 'constants/APIS'

import BookPageList from 'components/BookPageList'
import Loading from 'components/Loading'
import Confirm from 'components/Confirm'

let windowWidth
if(typeof window !== 'undefined') {
  windowWidth = window.innerWidth
}

let latestProgress = {}
let currentProgress = {}
let isResolvingProgressRejection = false

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
    let percentage = Number((document.body.scrollTop/(props.book.pages.props.view.pageHeight*pageSum)).toFixed(4))
    let page = convertPercentageToPage(percentage, pageSum)
    let tolerance = 2
    let progress = {
      pageNo: page,
      pageSum: pageSum,
      percentage
    }
    currentProgress = progress

    props.actions.jumpTo(page)
    if(this.props.user.authed) {
      getProgress(this.bookId).then(res => {
        if(_.isEmpty(res)) {
          setProgress(props.book.id, progress)
        } else {
          latestProgress = res

          if(percentage + tolerance/pageSum <= res.percentage && !isResolvingProgressRejection) {
            props.actions.showConfirm('是否跳转到最新进度？')
          } else {
            setProgress(this.bookId, progress)
            isResolvingProgressRejection = false
          }
        }
      })
    }
  }

  scrollTo(position) {
    let props = this.props

    if(position < 1) {
      props.actions.jumpTo(convertPercentageToPage(position, props.book.pages.props.children.length))
      document.body.scrollTop = props.book.pages.props.children.length * props.book.pages.props.view.pageHeight * position
    }else{
      props.actions.jumpTo(position)
      document.body.scrollTop = props.book.pages.props.view.pageHeight * position
    }
  }

  prepareBook(bookId, props, view) {
    let actions = props.actions
    let user = props.user

    initBook(bookId, actions, view).then(book => {
      if(book.pages) {
        if(user.authed) {
          getProgress(bookId).then(res => {
            this.scrollTo(res.percentage)
            this.setState({ isLoading: false })
          }, err => {
            this.setState({ isLoading: false })
            actions.jumpTo(1)
          })
        }else{
          this.setState({ isLoading: false })
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
    this.handleResize = () => {
      let view = getView()

      if(window.innerWidth !== windowWidth) {
        this.setState({
          isLoading: true
        })

        windowWidth = window.innerWidth
        lazilize(this.prepareBook.bind(this, this.bookId, this.props, view), 500)()
      }
    }

    // window.addEventListener('scroll', () => {
    //   this.setState({
    //     scrollTop: document.body.scrollTop
    //   })
    //
    //   getProgress(this.props.book.id).then(res => {
    //     latestProgress = res.page_no
    //   })
    // })

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
    if(this.props.book.pages.props.view.screen === 'hd') {
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
  }

  clickToToggleBookPanel() {
    if(this.props.book.pages.props.view.screen === 'phone') {
      this.setState({
        showPanel: !this.state.showPanel
      })
    }
  }



  componentWillReceiveProps(nextProps) {
    if(this.props.confirm.isVisible === true) {
      if(nextProps.confirm.result === 'yes') {
        this.scrollTo(latestProgress.percentage)
      }
      if(nextProps.confirm.result === 'no') {
        isResolvingProgressRejection = true
        this.scrollTo(currentProgress.percentage)
      }
    }

    if(nextProps.book.pages && !this.props.book.pages ) {
      this.setState({
        pagesLoaded: true
      })
    }
  }

  componentDidMount() {
    const actions = this.props.actions
    const bookId = this.bookId

    actions.fetchUserAuthInfo()
    actions.fetchBookInfo(bookId)
    // this.prepareBook(bookId, Object.assign({}, { actions }, this.props, getView()))
    this.prepareBook(bookId, this.props, getView())

    this.addEventListeners()

    if(this.state.pagesLoaded) {
      console.log('yes they did');
    }
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

    if(this.state.scrollTop > 500) {
      // this.props.actions.showConfirm('是否跳转到最新进度？')
    }

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
        <Confirm confirm={this.props.confirm} />
        {
          this.state.isLoading || book.isFetchingInfo || book.isFetchingContent?(
            <Loading />
          ):null
        }
        <ReactCSSTransitionGroup
          component="div"
          transitionName="slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
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
        </ReactCSSTransitionGroup>
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
            <div onClick={this.clickToToggleBookPanel.bind(this)}>
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
    view: state.view,
    confirm: state.confirm
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(BookViewer)
