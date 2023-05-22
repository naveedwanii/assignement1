import React from "react";
import Slider from "react-slick";
import Rectangle from '../../assets/rectangle-1.png'

const SlickSlider = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Rectangle} alt='rect 1' />
          </div>
          <div>
            <img src={Rectangle} alt='rect 2' />
          </div>
          <div>
            <img src={Rectangle} alt='rect 3' />
          </div>
          <div>
           <img src={Rectangle} alt='rect 4' />
          </div>
          <div>
           <img src={Rectangle} alt='rect 5' />
          </div>
        </Slider>
      </div>
    );

}

export default SlickSlider