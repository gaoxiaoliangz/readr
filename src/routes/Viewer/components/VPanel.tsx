import React, { Component } from 'react'
import Icon from '../../../components/Icon'
import { Slide } from '../../../components/animations'
import VPreference from './VPreference'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { viewer as viewerActions } from '../../../actions'
import * as selectors from '../../../selectors'
import styles from './VPanel.scss'
import schemas from '../../../schemas'
import Logo from '../../../components/Logo'

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

  constructor(props) {
    super(props)
    this.handlePrefClick = this.handlePrefClick.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handlePrefClick() {
    this.props.viewerActions.toggleViewerPreference()
  }

  handleMenuClick() {
    this.props.viewerActions.toggleViewerNavigation()
  }

  render() {
    const { title, className, components: { showPanel, showPreference } } = this.props

    return (
      <Slide>
        {
          (showPanel) && (
            <div
              key="01"
              styleName="viewer-panel"
              className={className || ''}
            >
              <div styleName="container">
                <div styleName="left">
                  <div
                    styleName="menu"
                    onClick={this.handleMenuClick}
                  >
                    <Icon name="menu" size={20} />
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
                    styleName="preference"
                    onClick={this.handlePrefClick}
                  >
                    <Icon name="font" size={20} />
                  </div>
                  <VPreference show={showPreference} />
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
