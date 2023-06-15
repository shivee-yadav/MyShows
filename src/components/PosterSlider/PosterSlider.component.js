import React from "react";
import Poster from "../Poster/Poster.component";
import Slider from "react-slick";

import { posterCarouselSettings } from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
    return (
        <>
         <div className="flex flex-col items-start py-4 pl-4 ">
        <h3 className={`text-2xl font-bold ${
                props.isDark ? "text-white" : "text-gray-700"
            }`}>{props.title}</h3>
        <p className={`text-sm font-bold ${
                props.isDark ? "text-white" : "text-gray-700"
            }`}>
          {props.subtitle}
        </p>
      </div>
      <Slider {...posterCarouselSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
        </>
    )
}

export default PosterSlider;