import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const styles = require('./Fade.scss')

export default props => {
  return (
    <ReactCSSTransitionGroup
      component="div"
      transitionName={styles}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
      >
      {props.children}
    </ReactCSSTransitionGroup>
  )
}
