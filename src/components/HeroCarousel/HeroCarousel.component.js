import React from "react";
import HeroSlider from "react-slick";

//Component
import { NextArrow, PrevArrow } from "./Arraows.compenet";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const settingsLg = {
    
    autoplay: true,
    dots: true,
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

  const images = [
    "https://images.unsplash.com/photo-1685990678290-954dc7d5b16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80",
    "https://images.unsplash.com/photo-1685701129202-2295e7b30cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1685267799410-5bd3929789b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1584529910318-fba0b70b9cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  ];

  return (
    <>
      <div className="lg:hidden py-2">
        <HeroSlider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-64 md:80 ">
              <img
                src={image}
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
                src={image}
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