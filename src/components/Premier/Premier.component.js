import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/Poster.component";
import settings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";

export const Premier = () => {
    
    return(
        <>
        <div className="flex flex-col items-start py-4 pl-4">
            <h3 className="text-white text-2xl font-bold ">Premieres</h3>
            <p className="text-white text-sm text-bold ">Brand new releases every Friday</p>
        </div>
        <Slider {...settings}>
            {PremierImages.map((image) => (
                <Poster {...image} isDark />
            ))}
        </Slider>
        </>
    )
}