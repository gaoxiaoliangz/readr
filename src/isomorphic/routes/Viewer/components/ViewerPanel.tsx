import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from '../../../elements/Icon'
import Fade from '../../../elements/Fade'
import ViewerPreference from './ViewerPreference'
import CSSModules from 'react-css-modules'
const styles = require('./ViewerPanel.scss')

interface IProps {
  title: string
  showViewerPreference: boolean
  onPrefVisibilityChange: (newVisibility: boolean) => void
}

interface IState {
}

@CSSModules(styles)
class ViewerPanel extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      showViewerPreference: false
    }
    this.handlePrefClick = this.handlePrefClick.bind(this)
  }

  handlePrefClick() {
    this.props.onPrefVisibilityChange(!this.props.showViewerPreference)
  }

  componentDidMount() {
  }

  render() {
    const { title, showViewerPreference } = this.props

    return (
      <div styleName="viewer-panel">
        <div styleName="container">
          <div styleName="back">
            <Link to="/">
              <Icon name="back" />
              <span>返回</span>
            </Link>
          </div>
          <span styleName="title">{title}</span>
          <div onClick={this.handlePrefClick} styleName="preference">
            <Icon name="preference" />
          </div>
          <Fade>
            {
              showViewerPreference ? (
                <ViewerPreference />
              ) : null
            }
          </Fade>
        </div>
      </div>
    )
  }
}

export default ViewerPanel
