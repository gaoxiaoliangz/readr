import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const styles: any = require('./Fade.css')

class Fade extends Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName={styles}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        >
        {this.props.children}
      </ReactCSSTransitionGroup>
    )
  }
}

export default Fade
