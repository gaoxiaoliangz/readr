import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from '../../../elements/Icon'
import Fade from '../../../elements/Fade'
import ViewerPreference from './ViewerPreference'
import ViewerNav from './ViewerNav'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../store/actions'
import * as selectors from '../../../store/selectors'
const styles = require('./ViewerPanel.scss')

interface Props { }

interface AllProps extends Props {
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
  const { title } = selectors.common.entity('books', bookId)(state) as any

  return { config, showPanel, showPreference, title, showNavigation }
}

@connect<AllProps>(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)
@CSSModules(styles)
export default class ViewerPanel extends Component<AllProps, void> {

  constructor(props) {
    super(props)
    this.handlePrefClick = this.handlePrefClick.bind(this)
    this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this)
  }

  handlePrefClick() {
    this.props.actions.toggleViewerPreference()
  }

  handleNavClick() {
    this.props.actions.toggleViewerNavigation()
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
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handelViewerMouseMove)
  }

  render() {
    const { title, showPanel, showPreference, showNavigation } = this.props

    return (showPanel || showPreference || showNavigation) && (
      <div styleName="viewer-panel">
        <div styleName="container">
          <div styleName="back">
            <Link to="/">
              <Icon name="back" />
              <span>返回</span>
            </Link>
          </div>
          <div onClick={this.handleNavClick.bind(this)} styleName="contents">
            <span>目录</span>
            <Fade>
              {
                showNavigation && (
                  <ViewerNav />
                )
              }
            </Fade>
          </div>
          <span styleName="title">{title}</span>
          <div onClick={this.handlePrefClick} styleName="preference">
            <Icon name="preference" />
          </div>
          <Fade>
            {
              showPreference && (
                <ViewerPreference />
              )
            }
          </Fade>
        </div>
      </div>
    )
  }
}
