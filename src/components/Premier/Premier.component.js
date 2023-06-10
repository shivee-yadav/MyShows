import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/Poster.component";

export const Premier = () => {
    const settings= {
        Infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide:0
    };

    const PremierImages = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni41LzEwICA0NC4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359644-nqullkspgw-portrait.jpg",
            alt: "Zara Hatke Zara Bachke",
            title:"Zara Hatke Zara Bachke" ,
            subtitle:"Comedy/Drama/Romantic" 
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgNS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00346319-kynaazzqef-portrait.jpg",
            alt: "Transformers",
            title:"Transformers:Rise of the Beasts" ,
            subtitle:"Action/Adventure/Sci-Fi" 
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347275-eqjjcbfvmr-portrait.jpg",
            alt: "Spider-Man",
            title:"Spider-Man : Across the Spider-Verse" ,
            subtitle:"Action/Adventure/Animation" 
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAyMjEuOUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-vbbakgpnwq-portrait.jpg",
            alt: "The Kerala Story",
            title:"The Kerala Story" ,
            subtitle:"Drama" 
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICA1OS45SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122562-dgpxgaudlw-portrait.jpg",
            alt: "Fast X",
            title:"Fast X" ,
            subtitle:"Action/Adventure/Crime/Thriller" 
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICA1MC4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-twvaltqvdc-portrait.jpg",
            alt: "Guardians of the Galaxy",
            title:"Guardians of the Galaxy Vol.3" ,
            subtitle:"Action/Adventure/Sci-Fi" 
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni40LzEwICAyLjlLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00058086-lsmhrsphls-portrait.jpg",
            alt: "The Little Mermaid",
            title:"The Little Mermaid" ,
            subtitle:"Action/Adventure/Animation" 
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS41LzEwICAyMS4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00352085-aghrdlnkqp-portrait.jpg",
            alt: "Suzume",
            title:"Suzume" ,
            subtitle:"Anime" 
        }
    ]

    return(
        <>
        <Slider {...settings}>
            {PremierImages.map((image) => (
                <Poster {...image} isDark />
            ))}
        </Slider>
        </>
    )
}