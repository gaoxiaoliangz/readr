import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import slideUpStyle from './SlideUp.scss'
import slideDownStyle from './SlideDown.scss'

interface Props {
  children?: any
  direction?: 'down' | 'up'
}

const Slide = (props: Props) => {
  const { direction } = props
  let styles = slideDownStyle
  if (direction === 'up') {
    styles = slideUpStyle
  }

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

Slide['defaultProps'] = {
  direction: 'down'
}

export default Slide
