import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
const styles: any = require('./_viewer-scrollbar.scss')

interface Props {
  current: number
  total: number
}

@CSSModules(styles)
class ViewerScrollbar extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{height: 400}} styleName="scrollbar">
        <div styleName="button">
          <div styleName="loc-info">
            <div><strong>{this.props.current}</strong>/{this.props.total}</div>
            <div styleName="sub-info">30.3%</div>
          </div>
        </div>
        <div style={{height: 100}} styleName="track--past"></div>
        <div style={{height: 400}} styleName="track"></div>
      </div>
    )
  }
}

export default connect(

)(ViewerScrollbar as any)