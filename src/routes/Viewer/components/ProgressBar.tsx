import React, { Component } from 'react'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { Fade, Slide } from '../../../components/animations'
import { toggleViewerNavigation, toggleViewerPreference } from '../../../actions/viewer'
import * as selectors from '../../../selectors'
import styles from './ProgressBar.scss'
import Icon from '../../../components/Icon'
import VNav from './VNav'

interface Props {
}

interface OtherProps {
  localProgress: Viewer.LocalProgress[]
  components: Viewer.Components
  toggleViewerNavigation: typeof toggleViewerNavigation
  toggleViewerPreference: typeof toggleViewerPreference
}

@CSSModules(styles)
class ProgressBar extends Component<Props & OtherProps, {}> {

  constructor(props) {
    super(props)
    this.handleContentsClick = this.handleContentsClick.bind(this)
  }

  handleContentsClick() {
    this.props.toggleViewerNavigation()
    this.props.toggleViewerPreference(false)
  }

  render() {
    const { localProgress, components: { showProgress, showNavigation } } = this.props
    const latestLocalProgress = _.last(localProgress) || {} as Viewer.LocalProgress
    const { page, pageCount } = latestLocalProgress
    const percentage = ((page / pageCount) * 100).toFixed(2) + '%'

    return (
      <Slide>
        {
          showProgress && (
            <div styleName="loc-info">
              {
                page && pageCount && (
                  <div styleName="container">
                    <div
                      styleName="menu"
                      onClick={this.handleContentsClick}
                    >
                      <Icon name="menu" size={20} />
                      <Fade>
                        {
                          showNavigation && (
                            <VNav />
                          )
                        }
                      </Fade>
                    </div>
                    <div>
                      <div>{page}<span styleName="sep">/</span>{pageCount}</div>
                      <div styleName="sub-info">{percentage}</div>
                    </div>
                  </div>
                )
              }
            </div>
          )
        }
      </Slide>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = selectors.viewer.id(state)

  return {
    localProgress: selectors.viewer.localProgress(id)(state),
    components: selectors.viewer.components(state)
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { toggleViewerNavigation, toggleViewerPreference }
)(ProgressBar)
