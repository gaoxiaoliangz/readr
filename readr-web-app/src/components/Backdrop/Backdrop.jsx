import React from 'react'

// interface BasicProps {
//   onClick?: any
//   className?: string
//   styleName?: string
//   style?: React.CSSProperties
// }

// interface Props extends BasicProps {
//   children?: any
//   show?: boolean
//   zIndex?: number
// }

const dropStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: 1200,
  left: 0,
  top: 0,
  cursor: 'default'
}

const Backdrop = (props) => {
  const { show, zIndex, style, ...rest } = props
  const _dropStyle = {
    ...dropStyle,
    ...{
      zIndex
    },
    ...style
  }

  return show && (
    <div {...rest} style={_dropStyle} />
  )
}

export default Backdrop
