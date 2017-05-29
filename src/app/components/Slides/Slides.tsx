import React from 'react'
import Slider from 'react-slick'
import './Slides.scss'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true
}

type Props = {
  images: any[]
}

const Slides = ({ images }: Props) => {
  return (
    <div>
      {
        images.length !== 0 && (
          <Slider {...settings}>
            {
              images.map((image, index) => {
                const slideStyle: React.CSSProperties = {
                  background: `url(${image})`,
                  backgroundSize: 'cover',
                  height: 420
                }

                return (
                  <div className="img-wrap" key={index} style={slideStyle} />
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
