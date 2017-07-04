import React from 'react'
import Branding from './Branding'
import Slides from '../../components/Slides/Slides'

type Props = {
  children?: any
  onlyImage?: {
    src: string
    to: string
  }
}

const BrandingWithImage = (props: Props) => {
  const { onlyImage } = props
  const images = [onlyImage]

  return (
    onlyImage
      ? (
        <div className="header">
          <Branding
            bgColor="transparent"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 999
            }}
          />
          <Slides
            images={images}
            draggable={false}
            infinite={false}
            arrows={false}
            dots={false}
            disableSwipe={true}
          />
        </div>
      )
      : (
        <Branding />
      )
  )
}

export default BrandingWithImage
