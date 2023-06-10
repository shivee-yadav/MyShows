import React from "react";
import Poster from "../Poster/Poster.component";
import Slider from "react-slick";

import { posterCarouselSettings } from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
    return (
        <>
         <div className="flex flex-col items-start py-4 pl-4">
        <h3 className="text-white text-2xl font-bold ">{props.title}</h3>
        <p className="text-white text-sm text-bold ">
          {props.subtitle}
        </p>
      </div>
      <Slider {...posterCarouselSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
        </>
    )
}

export default PosterSlider;