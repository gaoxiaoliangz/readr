import React from 'react'

interface BasicProps {
  onClick?: any
  className?: string
  styleName?: string
}

interface Props extends BasicProps {
  children?: any
  show?: boolean
  zIndex?: number
}

const dropStyle: React.CSSProperties = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: 1200,
  left: 0,
  top: 0,
  cursor: 'default'
}

const Backdrop = (props: Props) => {
  const { show, zIndex, ...rest } = props
  const _dropStyle = {
    ...dropStyle,
    ...{
      zIndex
    }
  }

  return show && (
    <div {...rest} style={_dropStyle}></div>
  )
}

export default Backdrop
