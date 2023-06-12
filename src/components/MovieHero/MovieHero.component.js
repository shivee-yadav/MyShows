import React from "react";

const MovieHero = () => {
    return (
        <>
        <div className="md:hidden" >
            <img 
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/transformers-rise-of-the-beasts-et00346319-1682680068.jpg"
            alt="poster"
            className=""
            />
        </div>

        <div className="hidden md:block lg:hidden">
        <img 
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/transformers-rise-of-the-beasts-et00346319-1682680068.jpg"
            alt="poster"
            className=""
            />
        </div>

        <div className="relative hidden lg:block" style={{height: "35rem"}}>

            
        <div className="absolute h-full w-full z-10"
        style={{backgroundImage: "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)"}}
        />
        
        <div className="absolute z-30 w-68 h-96 left-44 bottom-20">
            <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/transformers-rise-of-the-beasts-et00346319-1682680068.jpg"
            alt="poster"
            className="h-full w-full rounded-xl"
            />

        </div>

        <div className="container absolute z-30 left-0 right-0 top-20 grid place-items-center">
            <div className="text-white text-2xl font-bold  ">
               <h1>Transformers:Rise of the Beasts</h1>
            </div>
        </div>
        
        
        

        <img 
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/transformers-rise-of-the-beasts-et00346319-1682680068.jpg"
            alt="poster"
            className="w-full h-full"
            />
        </div>
        </>
    )
};

export default MovieHero;
