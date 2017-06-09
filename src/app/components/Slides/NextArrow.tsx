import React from 'react'
import _ from 'lodash'
import Icon from '../Icon/Icon'

const NextArrow = (props) => {
  // todo:
  // it's a trick here, otherwise Icon will be undefined, don't know why
  const Icon2 = Icon
  return (
    <div {..._.omit(props, ['currentSlide', 'slideCount'])}>
      {
        <Icon2 size={20} name="chevronRight" />
      }
    </div>
  )
}

export default NextArrow
