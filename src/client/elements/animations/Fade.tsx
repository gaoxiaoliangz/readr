import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Fade extends Component<any, any> {
  constructor(props) {
    super(props)
  }

  render(){
    // let className = this.props.className?this.props.className:null
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    )
  }
}

export default Fade
