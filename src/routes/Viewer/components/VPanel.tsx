import React, { Component } from 'react'
// import { Link } from 'react-router'
import Icon from '../../../components/Icon'
import { Fade, Slide } from '../../../components/animations'
import VPreference from './VPreference'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { viewer as viewerActions } from '../../../actions'
import * as selectors from '../../../selectors'
import styles from './VPanel.scss'
import schemas from '../../../schemas'
import Logo from '../../../components/Logo'
import VNav from './VNav'

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

  pref: HTMLDivElement
  panel: HTMLDivElement

  constructor(props) {
    super(props)
    this.handlePrefClick = this.handlePrefClick.bind(this)
    this.handleContentsClick = this.handleContentsClick.bind(this)
  }

  handlePrefClick() {
    this.props.viewerActions.toggleViewerPreference()
    this.props.viewerActions.toggleViewerNavigation(false)
  }

  handleContentsClick() {
    this.props.viewerActions.toggleViewerNavigation()
    this.props.viewerActions.toggleViewerPreference(false)
  }

  render() {
    const { title, className, components: { showPanel, showPreference, showNavigation } } = this.props

    return (
      <Slide>
        {
          (showPanel) && (
            <div
              key="01"
              ref={ref => { this.panel = ref }}
              styleName="viewer-panel"
              className={className || ''}
            >
              <div styleName="container">
                <div styleName="left">
                  <div
                    styleName="menu"
                    onClick={this.handleContentsClick}
                  >
                    <Icon name="menu" size={20} />
                    <Slide direction="right">
                      {
                        showNavigation && (
                          <VNav />
                        )
                      }
                    </Slide>
                  </div>
                </div>

                <div styleName="center">
                  <div styleName="logo">
                    <Logo
                      dark
                    />
                  </div>
                  <span styleName="sep"></span>
                  <span styleName="title">{title}</span>
                </div>

                <div styleName="right">
                  <div
                    ref={ref => { this.pref = ref }}
                    styleName="preference"
                    onClick={this.handlePrefClick}
                  >
                    <Icon name="font" size={20} />
                    <Slide direction="down">
                      {
                        showPreference && (
                          <VPreference />
                        )
                      }
                    </Slide>
                  </div>
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
