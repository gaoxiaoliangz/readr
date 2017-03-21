import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from '../../../components/Icon'
import { Fade, Slide } from '../../../components/animations'
import VPreference from './VPreference'
import VNav from './VNav'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { viewer as viewerActions } from '../../../actions'
import * as selectors from '../../../selectors'
import styles from './VPanel.scss'
import schemas from '../../../schemas'

interface OwnProps {
  className?: string
}

interface AllProps {
  components: Viewer.Components
  config: Viewer.Config
  viewerActions: typeof viewerActions
  title: string
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const bookId = selectors.viewer.id(state)
  const components = selectors.viewer.components(state)
  const { title } = selectors.entity(schemas.BOOK, bookId)(state)

  return { config, components, title }
}

@CSSModules(styles)
class VPanel extends Component<OwnProps & AllProps, void> {

  nav: HTMLDivElement
  pref: HTMLDivElement
  panel: HTMLDivElement

  constructor(props) {
    super(props)
    this.handleContentsClick = this.handleContentsClick.bind(this)
    this.handlePrefClick = this.handlePrefClick.bind(this)
  }

  handleContentsClick() {
    this.props.viewerActions.toggleViewerNavigation()
    this.props.viewerActions.toggleViewerPreference(false)
  }

  handlePrefClick() {
    this.props.viewerActions.toggleViewerPreference()
    this.props.viewerActions.toggleViewerNavigation(false)
  }

  render() {
    const { title, className, components: { showPanel, showPreference, showNavigation } } = this.props

    return (
      <Slide>
        {
          (showPanel) && (
            <div
              ref={ref => { this.panel = ref }}
              styleName="viewer-panel"
              className={className || ''}
            >
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

                <div
                  ref={ref => { this.nav = ref }}
                  styleName="contents"
                  onClick={this.handleContentsClick}
                >
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

                <div
                  ref={ref => { this.pref = ref }}
                  styleName="preference"
                  onClick={this.handlePrefClick}
                >
                  <Icon name="preference" />
                  <Fade>
                    {
                      showPreference && (
                        <VPreference />
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

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    viewerActions: bindActionCreators(viewerActions as {}, dispatch)
  })
)(VPanel)
