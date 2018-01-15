import React from 'react'
import { Motion, spring, presets } from 'react-motion'

type TProps = {
  children?: any
}

function Fade(props: TProps) {
  return (
    <Motion defaultStyle={{ opacity: 0 }}  style={{ opacity: spring(1, presets.gentle) }}>
      {
        interpolatingStyle => {
          return (
            <div style={interpolatingStyle}>
              {props.children}
            </div>
          )
        }
      }
    </Motion>
  )
}

export default Fade
