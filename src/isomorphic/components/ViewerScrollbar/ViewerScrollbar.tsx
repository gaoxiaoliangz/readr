import React, { Component } from 'react'
import { connect } from 'react-redux'

interface Props {
  current: number
  total: number
}

class ViewerScrollbar extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{height: 400}} className="viewer-scrollbar">
        <div className="button">
          <div className="loc-info">
            <div><strong>{this.props.current}</strong>/{this.props.total}</div>
            <div className="sub-info">30.3%</div>
          </div>
        </div>
        <div style={{height: 100}} className="track-past"></div>
        <div style={{height: 400}} className="track"></div>
      </div>
    )
  }
}

export default connect(

)(ViewerScrollbar as any)