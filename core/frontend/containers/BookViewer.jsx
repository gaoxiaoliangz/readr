import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getCache, setCache, initBook, getView, getProgress, setProgress, convertPercentageToPage, filterPages, readCache, saveCache, callApi } from 'utils'
import * as actions from 'actions'
import { API_ROOT } from 'constants/APIS'
import BookPageList from 'components/BookPageList'
import Loading from 'components/Loading'
import Confirm from 'components/Confirm'
import Icon from 'elements/Icon'
import * as utils from 'utils'

import * as renderBook from 'utils/renderBook'

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
      scrollTop: 0,
      currentPage: 0,
      showPanel: true,
      isListenersAdded: false,
      isCalculatingDom: false,
      isReadingMode: false,
      isScrollMode: true,
      calculatedPages: null,
      view: getView()
    }
  }

  // props have to be loaded and updated simultaneously
  // so it's better to put it in React component
  // scrollToLoadPages() {
  //   let props = this.props
  //   let pages = props.book.pages.props.children
  //   let pageSum = pages.length
  //   let percentage = Number((document.body.scrollTop/(props.book.pages.props.view.pageHeight*pageSum)).toFixed(4))
  //   let page = convertPercentageToPage(percentage, pageSum)
  //   let tolerance = 2
  //   let progress = {
  //     pageNo: page,
  //     pageSum: pageSum,
  //     percentage
  //   }
  //   currentProgress = progress
  //
  //   props.actions.jumpTo(page)
  //   if(this.props.user.authed) {
  //     getProgress(this.bookId).then(res => {
  //       if(_.isEmpty(res)) {
  //         setProgress(props.book.id, progress)
  //       } else {
  //         latestProgress = res
  //
  //         if(percentage + tolerance/pageSum <= res.percentage && !isResolvingProgressRejection) {
  //           props.actions.showConfirm('是否跳转到最新进度？')
  //         } else {
  //           setProgress(this.bookId, progress)
  //           isResolvingProgressRejection = false
  //         }
  //       }
  //     })
  //   }
  // }

  // scrollTo(position) {
  //   let props = this.props
  //
  //   if(position < 1) {
  //     props.actions.jumpTo(convertPercentageToPage(position, props.book.pages.props.children.length))
  //     document.body.scrollTop = props.book.pages.props.children.length * props.book.pages.props.view.pageHeight * position
  //   }else{
  //     props.actions.jumpTo(position)
  //     document.body.scrollTop = props.book.pages.props.view.pageHeight * position
  //   }
  // }

  // prepareBook(bookId, props, view) {
  //   let actions = props.actions
  //   let user = props.user
  //
  //   initBook(bookId, actions, view).then(book => {
  //     if(book.pages) {
  //       if(user.authed) {
  //         getProgress(bookId).then(res => {
  //           this.scrollTo(res.percentage)
  //           this.setState({ isLoading: false })
  //         }, err => {
  //           this.setState({ isLoading: false })
  //           actions.jumpTo(1)
  //         })
  //       }else{
  //         this.setState({ isLoading: false })
  //         actions.jumpTo(1)
  //         // this is a bad fix
  //         // localstorage solution is recommended
  //         document.body.scrollTop = document.body.scrollTop + 1
  //       }
  //     }
  //   })
  // }

  addEventListeners() {
    // let timers = []

    // function lazilize(callback, t) {
    //   return () => {
    //     clearTimeout(timers.slice(-1)[0])
    //
    //     let timer = setTimeout(callback.bind(this), t)
    //     timers.push(timer)
    //   }
    // }
    //
    // this.handleScroll = lazilize(this.scrollToLoadPages.bind(this), 100)
    // this.handleResize = () => {
    //   let view = getView()
    //
    //   if(window.innerWidth !== windowWidth) {
    //     this.setState({
    //       isLoading: true
    //     })
    //
    //     windowWidth = window.innerWidth
    //     lazilize(this.prepareBook.bind(this, this.bookId, this.props, view), 500)()
    //   }
    // }

    this.mapScrollTopToState = () => {
      this.setState({
        scrollTop: document.body.scrollTop
      })
    }

    this.mapWindowWidthToState = () => {
      this.setState({
        windowWidth: window.innerWidth
      })
    }

    this.mapViewToState = () => {
      this.setState({
        view: getView()
      })
    }

    // window.addEventListener('scroll', () => {
    //   this.setState({
    //     scrollTop: document.body.scrollTop
    //   })
    //
    //   // getProgress(this.props.book.id).then(res => {
    //   //   latestProgress = res.page_no
    //   // })
    // })

    window.addEventListener('scroll', this.mapScrollTopToState)
    window.addEventListener('resize', this.mapWindowWidthToState)
    window.addEventListener('resize', this.mapViewToState)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.mapScrollTopToState)
    window.removeEventListener('resize', this.mapWindowWidthToState)
    window.removeEventListener('resize', this.mapViewToState)
  }

  toggleBookPanel(event) {
    if(this.state.calculatedPages.props.view.screen === 'hd') {
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
    if(this.state.calculatedPages.props.view.screen === 'phone') {
      this.setState({
        showPanel: !this.state.showPanel
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    // if(this.props.confirm.isVisible === true) {
    //   if(nextProps.confirm.result === 'yes') {
    //     this.scrollTo(latestProgress.percentage)
    //   }
    //   if(nextProps.confirm.result === 'no') {
    //     isResolvingProgressRejection = true
    //     this.scrollTo(currentProgress.percentage)
    //   }
    // }
  }

  calculateDom() {
    let html = this.state.bookHtml
    let bookId = this.bookId
    let view = getView()
    // TODO: ref?
    let nodeHeights = renderBook.getNodeHeights(document.querySelector('ul.pages>li>.content').childNodes)

    let pages = renderBook.htmlToPages(html, nodeHeights, view)

    setCache(`book${bookId}_pages`, JSON.stringify(pages))

    console.log('calculated');
    
    this.setState({
      isReadingMode: true,
      isCalculatingDom: false,
      calculatedPages: pages
    })
  }

  componentWillUpdate(nextProps, nextState) {
    // let view = getView()
    //
    // if(nextState.windowWidth < 700 ) {
    //   console.log('update');
    // }
    if(!utils.compareObjects(this.state.view, nextState.view)) {
      console.log('update');
      this.setState({
        isCalculatingDom: true,
        fuck: 'yeah'
      })
      // this.calculateDom()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.isCalculatingDom && !prevState.isCalculatingDom) {
      this.calculateDom()
    }
  }

  componentDidMount() {
    const actions = this.props.actions
    const bookId = this.props.params.id

    actions.fetchUserAuthInfo()
    actions.fetchBookInfo(bookId)

    this.addEventListeners()

    let pages = getCache(`book${bookId}_pages`)

    // check if pages are cached
    if(pages){
      pages = JSON.parse(pages)

      this.setState({
        isReadingMode: true,
        calculatedPages: pages,
        bookHtml: renderBook.pagesToHtml(pages)
      })
    } else {
      this.props.actions.fetchBookContent(bookId).then(res => {
        this.setState({
          isCalculatingDom: true,
          bookHtml: res.response.html
        })
      })
    }
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  renderBook() {
    let scrollTop = this.state.scrollTop
    let calculatedPages = this.state.calculatedPages
    let bookId = this.props.params.id
    let view = calculatedPages.props.view
    let height = calculatedPages.props.children.length * view.pageHeight
    let currentPage = renderBook.convertPercentageToPage(scrollTop/height, calculatedPages.props.children.length)

    let pages = renderBook.filterPages({
      startPage: currentPage,
      offset: 2,
      quantity: 5,
      pages: calculatedPages.props.children
    })

    return (
      <div onClick={this.clickToToggleBookPanel.bind(this)}>
        <BookPageList height={height} view={view} bookId={bookId} pages={pages} />
      </div>
    )
  }

  render() {
    let book = this.props.book
    let view = this.state.view

    return (
      <div className={`viewer viewer--${view.screen}`} onMouseMove={this.toggleBookPanel.bind(this)} >
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
            this.state.showPanel && this.state.isReadingMode && book.meta ?(
              <div className="viewer-panel">
                <div className="container">
                  <div className="back">
                    <Link to="/">
                      <Icon name="back" />
                      <span>返回</span>
                    </Link>
                  </div>
                  <span className="title">{book.meta.title}</span>
                  <div className="preference">
                    <Icon name="font" />
                  </div>

                  {/*<span className="loc">{book.currentPage+"/"+pages.length}</span>*/}
                </div>
              </div>
            ):null
          }
        </ReactCSSTransitionGroup>
        {
          (this.state.isCalculatingDom && book.html)?(
            <ul className="pages">
              <li>
                <div className="content" dangerouslySetInnerHTML={{__html: book.html}}></div>
              </li>
            </ul>
          ):null
        }
        {
          this.state.isReadingMode?(
            this.renderBook()
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
