import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
export default function SimpleSlider() {
  var settings = { 
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
    <Slider className='sldr' {...settings}>
      <div>
      <div className="slider">

        <div className="rights">
          <h1>Book a table for yourself at a time convenient for you</h1>
          <span>Book A Table</span>
          <img
            src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg.webp"
            alt=""
          />
        </div>
      </div>
      </div>
      <div>
      <div className="slider">
        
        <div className="rights">
        <h1>Book a table for yourself at a time convenient for you</h1>
        <span>Book A Table</span>
        <img
            src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp"
            alt=""
          />
        </div>
        </div>
      </div>
      <div>
      <div className="slider">
       
        <div className="rights">
        <h1>Book a table for yourself at a time convenient for you</h1>
        <span>Book A Table</span>
        <img
            src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp"
            alt=""
          />
        </div>
      </div>
      </div>
      
    </Slider>
    
    <div className="inp">
      <input type="text" placeholder='NAME' />
      <input type="number" placeholder='NUMBER' name="" id="" />
      <input type="date" />
      <button>Book a table</button>
    </div>
    </>
  );
}