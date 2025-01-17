import React, { useState } from 'react'
import HeroSlider from 'react-slick'

const HeroCarousel = () => {

  const [images, setImages] = useState([])
    const settingsLG = {
      dots: true,
      arrows: true,
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      slideToScroll: 1,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      // nextArrow: <NextArrow />,
      // preArrow: <PreArrow />,
    };
    const settings = {
      dots: true,
      arrows: true,
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      slideToScroll: 1,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      // nextArrow: <NextArrow />,
      // preArrow: <PreArrow />,
    };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map(() => {
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`${images.path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>;
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map(() => {
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`${images.path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>;
          })}
        </HeroSlider>
      </div>
    </>
  );
}

export default HeroCarousel
