import React, { useState, useEffect } from "react";
import tmdb from "../../api/tmdb";
import HeroSlider from "react-slick";

//Component
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {

  const[images , setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async() => {
      const getImages = await tmdb.get("/movie/now_playing");
      console.log(getImages)
      setImages(getImages.data.results);
    };

    requestNowPlayingMovies();

  }, []);

 

  const settingsLg = {
    
    autoplay: true,
    centerMode: true,
    centerPaddinng: "300px",
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  

  return (
    <>
      <div className="lg:hidden py-2">
        <HeroSlider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-64 md:80 ">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="object-cover w-full h-full rounded-lg "
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block ">
        <HeroSlider {...settingsLg}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-96 px-2 py-3 ">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="object-cover w-full h-full rounded-lg "
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;