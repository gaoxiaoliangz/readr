import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import { bindActionCreators } from 'redux'
import * as selectors from '../../../selectors'
import BookContainer from './BookContainer'
import VPanel from './VPanel'
import _ from 'lodash'
import utils from '../../../utils'
import { MOBILE_BREAK_POINT } from '../../../constants/viewerDefs'
import shouldViewerBeFluid from '../../../helpers/shouldViewerBeFluid'

interface Props { }

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

  _handleResize: typeof _.debounce
  _handleScroll: typeof _.debounce

  constructor(props) {
    super(props)
    this._handleResize = _.debounce(this.handleResize.bind(this), 500, {
      maxWait: 1000
    })
    this._handleScroll = _.debounce(this.handleScroll.bind(this), 200, {
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
    const { config: { fluid, width } } = this.props
    const viewerWidth = utils.getScreenInfo().width
    const _fluid = shouldViewerBeFluid()

    const shouldUpdate = (fluid !== _fluid)
      || (fluid && (utils.getScreenInfo().width !== width))
    if (shouldUpdate) {
      this.props.actions.viewer.configViewer({
        fluid: _fluid,
        width: viewerWidth
      })
    }
  }

  addEventListeners() {
    window.addEventListener('scroll', this._handleScroll)
    window.addEventListener('resize', this._handleResize)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this._handleScroll)
    window.removeEventListener('resize', this._handleResize)
  }

  render() {
    return (
      <div className="viewer-container">
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
