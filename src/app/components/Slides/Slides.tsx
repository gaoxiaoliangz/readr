import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './Slides.scss'
import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'

interface Props extends __config {
  images: any[]
  disableSwipe?: boolean
}

class LeftNavButton extends Component<any, any> {
  render() {
    return <button {...this.props}>Next</button>
  }
}

const disableTouch = (e) => {
  e.stopPropagation()
  e.preventDefault()
  return false
}

const Slides = ({ images, disableSwipe, ...rest }: Props) => {
  const isServerEnv = !__BROWSER__

  return (
    <div
      style={{ maxHeight: 420, overflow: isServerEnv ? 'hidden' : 'initial', paddingBottom: 50 }}
      {...{
        onTouchMoveCapture: disableSwipe && disableTouch
      }}
    >
      {
        images.length !== 0 && (
          <Slider
            {...rest}
          >
            {
              images.map((image, index) => {
                const slideStyle: React.CSSProperties = {
                  background: `url(${image})`,
                  backgroundSize: 'cover',
                  height: 420,
                  width: '100%'
                }

                return (
                  <div className={styles['img-wrap']} key={index} >
                    <div style={slideStyle} />
                  </div>
                )
              })
            }
          </Slider>
        )
      }
    </div>
  )
}

Slides['defaultProps'] = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
} as Props

export default Slides
