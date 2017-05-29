import React from 'react'
import Slider from 'react-slick'
import './Slides.scss'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false
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
                return (
                  <div className="img-wrap" key={index}>
                    <img alt="img" src={image} />
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
