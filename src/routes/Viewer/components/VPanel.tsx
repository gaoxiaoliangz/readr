import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from '../../../components/Icon'
import { Fade, Slide } from '../../../components/animations'
import ViewerPreference from './ViewerPreference'
import VNav from './VNav'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../actions'
import * as selectors from '../../../selectors'
import isDescendant from '../../../utils/dom/isDescendant'
import styles from './VPanel.scss'

interface AllProps {
  showPanel?: boolean
  showPreference?: boolean
  showNavigation?: boolean
  config?: ViewerConfig
  actions?: typeof actions
  title?: string
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const bookId = config.bookId
  const { show: showPanel } = selectors.viewer.panel(state)
  const { show: showPreference } = selectors.viewer.preference(state)
  const { show: showNavigation } = selectors.viewer.navigation(state)
  const { title } = selectors.entity('books', bookId)(state) as any

  return { config, showPanel, showPreference, title, showNavigation }
}

@CSSModules(styles)
class VPanel extends Component<AllProps, void> {

  nav: HTMLDivElement
  pref: HTMLDivElement

  constructor(props) {
    super(props)
    this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this)
    this.handleGlobalClick = this.handleGlobalClick.bind(this)
  }

  handleGlobalClick(e) {
    const { showPreference, showNavigation } = this.props

    if (!isDescendant(this.nav, e.target)) {
      if (showNavigation) {
        this.props.actions.toggleViewerNavigation(false)
      }
    } else {
      this.props.actions.toggleViewerNavigation()
    }

    if (!isDescendant(this.pref, e.target)) {
      if (showPreference) {
        this.props.actions.toggleViewerPreference(false)
      }
    } else {
      this.props.actions.toggleViewerPreference()
    }
  }

  handelViewerMouseMove(event) {
    const { config: { isCalcMode, isTouchMode }, showPanel } = this.props

    if (!isCalcMode && !isTouchMode) {
      let y = event.pageY - document.body.scrollTop
      const show = y < 90
      if (showPanel !== show) {
        this.props.actions.toggleViewerPanel(show)
      }
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handelViewerMouseMove)
    window.addEventListener('click', this.handleGlobalClick)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handelViewerMouseMove)
    window.removeEventListener('click', this.handleGlobalClick)
  }

  render() {
    const { title, showPanel, showPreference, showNavigation } = this.props

    return (
      <Slide>
        {
          (showPanel) && (
            <div styleName="viewer-panel">
              <div styleName="container">
                <div styleName="back">
                  <Link to="/">
                    <Icon
                      size={20}
                      name="back"
                      style={{
                        marginTop: 4
                      }}
                    />
                    <span>返回</span>
                  </Link>
                </div>

                <div ref={ref => { this.nav = ref }} styleName="contents">
                  <span>目录</span>
                  <Fade>
                    {
                      showNavigation && (
                        <VNav />
                      )
                    }
                  </Fade>
                </div>

                <span styleName="title">{title}</span>

                <div ref={ref => { this.pref = ref }} styleName="preference">
                  <Icon name="preference" />
                  <Fade>
                    {
                      showPreference && (
                        <ViewerPreference />
                      )
                    }
                  </Fade>
                </div>
              </div>
            </div>
          )
        }
      </Slide>
    )
  }
}

export default connect<AllProps, {}, {}>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(VPanel)
