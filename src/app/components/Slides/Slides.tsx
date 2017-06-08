import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './Slides.scss'
import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'

type Props = {
  images: any[]
}

class LeftNavButton extends Component<any, any> {
  render() {
    return <button {...this.props}>Next</button>
  }
}

const settings = {
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
}

const Slides = ({ images }: Props) => {
  const isServerEnv = !__BROWSER__
  
  return (
    <div style={{ maxHeight: 420, overflow: isServerEnv ? 'hidden' : 'initial', paddingBottom: 50 }}>
      {
        images.length !== 0 && (
          <Slider
            {...settings}
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

export default Slides
