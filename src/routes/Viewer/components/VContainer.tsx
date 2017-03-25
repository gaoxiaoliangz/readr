import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import { bindActionCreators } from 'redux'
import * as selectors from '../../../selectors'
import BookContainer from './BookContainer'
import VPanel from './VPanel'
import _ from 'lodash'
import utils from '../../../utils'
// import { MOBILE_BREAK_POINT } from '../../../constants/viewerDefs'
import ProgressBar from './ProgressBar'
import shouldViewerBeFluid from '../../../helpers/shouldViewerBeFluid'
import isDescendant from '../../../utils/dom/isDescendant'

interface Props { }

interface OtherProps {
  bookId: string
  computed: TBookPage[]
  config: Viewer.Config
  actions: {
    api: typeof actions.api
    viewer: typeof actions.viewer
  }
  components: Viewer.Components
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const bookId = selectors.viewer.id(state)
  const computed = selectors.viewer.computed(bookId)(state)
  const components = selectors.viewer.components(state)

  return {
    bookId,
    computed,
    config,
    components
  }
}

class VContainer extends Component<Props & OtherProps, void> {

  _handleResize: typeof _.debounce
  _handleScroll: typeof _.debounce
  scrollTop: number[]
  vPanel: Element

  constructor(props) {
    super(props)
    this.scrollTop = []
    this._handleResize = _.debounce(this.handleResize.bind(this), 500, {
      maxWait: 1000
    })
    this._handleScroll = _.debounce(this.handleScroll.bind(this), 200, {
      maxWait: 1000
    })
    this.handleFastScroll = this.handleFastScroll.bind(this)
    this.handleGlobalClick = this.handleGlobalClick.bind(this)
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
        page: Math.round(pageCount * percentage)
      })

      this.props.actions.api.updateBookProgress(bookId, percentage)
    }
  }

  handleFastScroll() {
    const { components: { showNavigation, showPanel, showPreference, showProgress } } = this.props
    const scrollTop = document.body.scrollTop
    this.scrollTop.push(scrollTop)
    const scrollCount = this.scrollTop.length
    if (scrollCount >= 2) {
      const delta = _.last(this.scrollTop) - this.scrollTop[scrollCount - 2]

      if (delta > 0) {
        // down
        const needToClose = showNavigation !== false
          || showPanel !== false
          || showPreference !== false
          || showProgress !== false
        if (needToClose) {
          this.props.actions.viewer.toggleViewerPanel(false)
          this.props.actions.viewer.toggleViewerProgressInfo(false)
          this.props.actions.viewer.toggleViewerNavigation(false)
          this.props.actions.viewer.toggleViewerPreference(false)
        }
      } else {
        // up
        const needToOpen = showPanel !== true || showProgress !== true
        if (needToOpen) {
          this.props.actions.viewer.toggleViewerPanel(true)
          this.props.actions.viewer.toggleViewerProgressInfo(true)
        }
      }
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

  handleGlobalClick(e) {
    const vPanel = document.querySelector('.js-vpanel')
    if (!isDescendant(vPanel as any, e.target)) {
      this.props.actions.viewer.toggleViewerNavigation(false)
    }
  }

  addEventListeners() {
    window.addEventListener('click', this.handleGlobalClick)
    window.addEventListener('scroll', this._handleScroll)
    window.addEventListener('scroll', this.handleFastScroll)
    window.addEventListener('resize', this._handleResize)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this._handleScroll)
    window.removeEventListener('scroll', this.handleFastScroll)
    window.removeEventListener('resize', this._handleResize)
  }

  render() {
    return (
      <div className="viewer-container">
        <VPanel
          className="js-vpanel"
        />
        <BookContainer />
        <ProgressBar />
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
