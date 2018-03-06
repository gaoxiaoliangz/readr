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
import PopBox from '../../components/PopBox/PopBox'
import Toc from './Toc'
import Pref from './Pref'

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
    showPref: PT.bool.isRequired,
    preferences: PT.object.isRequired,
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

  goToPage = pageNo => {
    model.$set('clientCurrPage', pageNo)
    if (!this.props.preferences.scrollMode) {
      document.documentElement.scrollTop = 0
    }
  }

  nextPage = () => {
    this.goToPage(this.props.clientCurrPage + 1)
  }

  prevPage = () => {
    this.goToPage(this.props.clientCurrPage - 1)
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
        styleName="menu-icon"
        onClick={() => {
          model.$set('showToc', true)
        }}
      >
        <Icon name="menu" size={20} />
      </div>
    )
  }

  renderPref() {
    const { showPref, preferences } = this.props
    return (
      <div styleName="preference-icon">
        <Icon
          name="font"
          size={20}
          onClick={() => {
            model.$set('showPref', !showPref)
          }}
        />
        <PopBox
          show={showPref}
          onRequestClose={() => {
            model.$set('showPref', false)
          }}
          position={{
            right: 0
          }}
        >
          <Pref
            fontSize={preferences.fontSize}
            theme={preferences.theme}
            onChangeFontSizeRequest={(fontSize) => {
              model.$set('preferences.fontSize', fontSize)
            }}
            onChangeThemeRequest={(theme) => {
              model.$set('preferences.theme', theme)
            }}
          />
        </PopBox>
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
    const {
      book,
      bookStatus,
      bookNodes,
      isEstimatingLayout,
      clientCurrPage,
      bookReady,
      pages,
      showTopPanel,
      showToc,
      showPref
    } = this.props
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
                  right={this.renderPref()}
                  show={showTopPanel || showToc || showPref}
                />
                <LeftPanel
                  show={showToc}
                  onRequestClose={() => {
                    model.$set('showToc', false)
                  }}
                >
                  <div styleName="contents-label">目录</div>
                  <Toc
                    toc={book.structure || []}
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
