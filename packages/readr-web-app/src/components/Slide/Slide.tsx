import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import slideUpStyle from './SlideUp.scss'
import slideDownStyle from './SlideDown.scss'
import slideRightStyle from './SlideRight.scss'

interface Props {
  children?: any
  direction?: 'down' | 'up' | 'right'
}

const Slide = (props: Props) => {
  const { direction } = props
  let styles

  switch (direction) {
    case 'up':
      styles = slideUpStyle
      break
    case 'right':
      styles = slideRightStyle
      break
    case 'down':
    default:
      styles = slideDownStyle
      break
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
