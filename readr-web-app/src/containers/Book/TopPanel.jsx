import React, { Component } from 'react'
import PT from 'prop-types'
// import Icon from '../../components/Icon/Icon'
// import { Slide } from '../../components/animations'
// import VPreference from './VPreference'
// import Logo from '../../../components/Logo'
import './TopPanel.scss'

// interface OwnProps {
//   className?: string
// }

// interface AllProps {
//   components: Viewer.Components
//   config: Viewer.Config
//   viewerActions: typeof viewerActions
//   title: string
// }

// const mapStateToProps = (state, ownProps) => {
//   const config = selectors.viewer.config(state)
//   const bookId = selectors.viewer.id(state)
//   const components = selectors.viewer.components(state)
//   const { title } = selectors.entity(schemas.BOOK, bookId)(state)

//   return { config, components, title }
// }

class TopPanel extends Component {
  static propTypes = {
    className: PT.string,
    show: PT.bool.isRequired,
    // onShowChange: PT.func.isRequired,
    left: PT.any,
    center: PT.any,
    right: PT.any,
  }

  // constructor(props) {
  //   super(props)
  //   this.handlePrefClick = this.handlePrefClick.bind(this)
  //   this.handleMenuClick = this.handleMenuClick.bind(this)
  // }

  // handlePrefClick() {
  //   this.props.viewerActions.toggleViewerPreference()
  // }

  // handleMenuClick() {
  //   this.props.viewerActions.toggleViewerNavigation()
  // }

  render() {
    // const { title, className, components: { showPanel, showPreference } } = this.props
    const { className, show, left, center, right } = this.props

    return (
      <div>
        {
          show && (
            <div
              styleName="viewer-panel"
              className={className || ''}
            >
              <div styleName="container">
                <div styleName="left">
                  {left}
                </div>

                <div styleName="center">
                  {center}
                </div>

                <div styleName="right">
                  {right}
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default TopPanel
