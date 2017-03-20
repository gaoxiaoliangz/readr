import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import { bindActionCreators } from 'redux'
import * as selectors from '../../../selectors'
import BookContainer from './BookContainer'
import VPanel from './VPanel'
import _ from 'lodash'

interface Props {}

interface OtherProps {
  bookId: string
  computed: TBookPage[]
  config: Viewer.Config
  actions: {
    api: typeof actions.api
    viewer: typeof actions.viewer
  }
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const bookId = selectors.viewer.id(state)
  const computed = selectors.viewer.computed(bookId)(state)

  return {
    bookId,
    computed,
    config,
  }
}

class VContainer extends Component<Props & OtherProps, void> {

  resizeLazily: typeof _.debounce
  handleScrollLazily: any

  constructor(props) {
    super(props)
    this.resizeLazily = _.debounce(this.handleResize, 500, {
      maxWait: 1000
    })
    this.handleResize = this.handleResize.bind(this)
    this.resizeLazily = this.resizeLazily.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleScrollLazily = _.debounce(this.handleScroll, 200, {
      maxWait: 1000
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentDidMount() {
    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  handleScroll() {
    const { computed, bookId, config: { pageHeight, isScrollMode } } = this.props
    const pageCount = computed.length
    const totalHeight = pageCount * pageHeight
    const scrollTop = document.body.scrollTop
    const percentage = scrollTop / totalHeight

    if (isScrollMode) {
      this.props.actions.viewer.updateLocalProgress(bookId, {
        percentage,
        pageCount,
        timestamp: new Date().valueOf().toString(),
        page: pageCount * percentage
      })

      this.props.actions.api.updateBookProgress(bookId, percentage)
    }
  }

  handleResize() {
    console.log('resized')
  }

  addEventListeners() {
    window.addEventListener('scroll', this.handleScrollLazily)
    window.addEventListener('resize', this.resizeLazily)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.handleScrollLazily)
    window.removeEventListener('resize', this.resizeLazily)
  }

  // handleForward() {
  //   const { allPages, pageNo } = this.props
  //   this.props.actions.viewerJumpTo(pageNo / allPages.length)
  //   document.body.scrollTop = 0
  // }

  // handlebackward() {
  //   const { allPages, pageNo } = this.props
  //   this.props.actions.viewerJumpTo((pageNo - 2) / allPages.length)
  //   document.body.scrollTop = 0
  // }

  render() {
    return (
      <div>
        <VPanel />
        <BookContainer />
      </div>
    )
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  dispatch => ({
    actions: {
      api: bindActionCreators(actions.api as {}, dispatch),
      viewer: bindActionCreators(actions.viewer as {}, dispatch)
    }
  })
)(VContainer)
