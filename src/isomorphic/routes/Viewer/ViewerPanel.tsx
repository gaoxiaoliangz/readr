import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from '../../elements/Icon'
import Fade from '../../elements/_animations/Fade'
import ViewerPreference from './ViewerPreference'
import CSSModules from 'react-css-modules'
const styles: any = require('./_viewer-panel.scss')

interface IProps {
  title: string
  showViewerPreference: boolean
  onPrefVisibilityChange: (newVisibility: boolean) => void
}

interface IState {
  // showViewerPreference: boolean
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
    // this.setState({
    //   showViewerPreference: !this.state.showViewerPreference
    // })
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
            <Icon name="font" />
          </div>
          <div className="add">点击添加至书架</div>
          <Fade>
            {
              showViewerPreference ? (
                <ViewerPreference />
              ) : null
            }
          </Fade>
          {/*<span className="loc">{book.currentPage+"/"+pages.length}</span>*/}
        </div>
      </div>
    )
  }
}

export default ViewerPanel
