import React, { useState } from 'react'
import HeroSlider from 'react-slick'
import { NextArrow, PreArrow } from './Arrows.Components';


const HeroCarousel = () => {

  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      genre_ids: [16, 878, 28],
      id: 610150,
      original_language: "ja",
      original_title: "...",
      overview: "The Red Ribbon Array",
      popularity: 5953.989,
      poster_path: "",
      release_date: "2022-06-11",
      title: "Dragon Ball Z",
      video: false,
      vote_average: 8,
      vote_count: 1426,
    },
    {
      adult: false,
      backdrop_path: "ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      genre_ids: [16, 878, 28],
      id: 610150,
      original_language: "ja",
      original_title: "...",
      overview: "The Red Ribbon Array",
      popularity: 5953.989,
      poster_path: "",
      release_date: "2022-06-11",
      title: "Dragon Ball Z",
      video: false,
      vote_average: 8,
      vote_count: 1426,
    },
  ]);
  
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
      nextArrow: <NextArrow />,
      preArrow: <PreArrow />,
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
      nextArrow: <NextArrow />,
      preArrow: <PreArrow />,
    };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map(() => {
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
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
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
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
