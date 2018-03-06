import React, { Component } from 'react'
import _ from 'lodash'
import PT from 'prop-types'
import model from './bookModel'
import { FETCH_STATUS } from '../../constants'
import LayoutEstimator from './LayoutEstimator'
import BookPage from './BookPage'
import TopPanel from './TopPanel'
import './Book.scss'
import Icon from '../../components/Icon/Icon'
import LeftPanel from '../../components/LeftPanel/LeftPanel'
import Toc from './Toc'

class Book extends Component {
  static propTypes = {
    clientCurrPage: PT.number.isRequired,
    book: PT.object.isRequired,
    pages: PT.array.isRequired,
    bookNodes: PT.array.isRequired,
    bookStatus: PT.string.isRequired,
    isEstimatingLayout: PT.bool.isRequired,
    bookReady: PT.bool.isRequired,
    showTopPanel: PT.bool.isRequired,
    showToc: PT.bool.isRequired,
    match: PT.shape({
      params: PT.shape({
        id: PT.string
      })
    })
  }
  lastScrollTop = 0

  componentDidMount() {
    const { id } = this.props.match.params
    model.initBook(id)
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('mousemove', this.handleMousemove)
    window.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('mousemove', this.handleMousemove)
  }

  handleCalcDone = result => {
    model.putLayoutInfo(result)
  }

  handleKeydown = e => {
    switch (e.keyCode) {
      case 39:
        this.nextPage()
        break

      case 37:
        this.prevPage()
        break

      default:
        break
    }
  }

  nextPage = () => {
    model.$set('clientCurrPage', this.props.clientCurrPage + 1)
  }

  prevPage = () => {
    model.$set('clientCurrPage', this.props.clientCurrPage - 1)
  }

  // todo: debounce
  handleMousemove = e => {
    const show = e.pageY < 70
    if (show !== this.props.showTopPanel) {
      model.$set('showTopPanel', show)
    }
  }

  handleScroll = () => {
    // this.lastScrollTop
  }

  renderMenuIcon() {
    return (
      <div
        styleName="menu"
        onClick={() => {
          model.$set('showToc', true)
        }}
      >
        <Icon name="menu" size={20} />
      </div>
    )
  }

  renderHeaderCenter() {
    const { book } = this.props
    return (
      <div styleName="header-center">
        <div styleName="header-inner">
          <div styleName="title">{book.title}</div>
          <div styleName="author">{book.author}</div>
        </div>
      </div>
    )
  }

  render() {
    const { book, bookStatus, bookNodes, isEstimatingLayout, clientCurrPage, bookReady, pages, showTopPanel, showToc } = this.props
    const isFetching = bookStatus === FETCH_STATUS.FETCHING
    const currentPage = pages[clientCurrPage - 1]
    return (
      <div>
        {
          isFetching
            ? 'loading'
            : (
              <div>
                {
                  isEstimatingLayout && (
                    <LayoutEstimator
                      onCalcDone={this.handleCalcDone}
                      sections={bookNodes}
                    />
                  )
                }
                <TopPanel
                  left={this.renderMenuIcon()}
                  center={this.renderHeaderCenter()}
                  show={showTopPanel || true}
                />
                <LeftPanel
                  show={showToc}
                  onRequestClose={() => {
                    model.$set('showToc', false)
                  }}
                >
                  <div styleName="contents-label">目录</div>
                  <Toc
                    toc={book.structure}
                    // onLinkClick={() => {
                    //   this.props.actions.viewer.toggleViewerNavigation(false)
                    // }}
                  />
                </LeftPanel>
                <div styleName="nav-wrap">
                  <div styleName="nav-inner">
                    <div styleName="prev" onClick={this.prevPage} />
                    <div styleName="next" onClick={this.nextPage} />
                  </div>
                </div>
                {
                  bookReady && (
                    <BookPage page={currentPage} />
                  )
                }
              </div>
            )
        }
      </div>
    )
  }
}

export default model.connect(Book, (state, props) => {
  const bookId = props.match.params.id
  return {
    ...state.book,
    bookNodes: _.get(state, ['book', 'bookNodes', bookId], []),
    book: _.get(state, ['shelf', 'localBooks', bookId], {
      content: []
    }),
    pages: _.get(state, ['book', 'bookPages', bookId], [])
  }
})
