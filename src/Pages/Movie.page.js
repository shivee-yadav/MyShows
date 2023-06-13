import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
const Movie = () => {
    return (
        <>
        <MovieHero />
        <div className="my-12 container  px-4 lg:w-2/3 lg:ml-32">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                <p className="text-gray-700 text-lg" >
                Transformers: Rise of the Beasts will take audiences on a `90s globetrotting adventure and introduce the Maximals, Predacons, and Terrorcons to the existing battle on earth between Autobots and Decepticons.
                </p>
            </div>
            <div className="my-8">
                <hr />
            </div>
        </div>
        </>
    )
};

export default Movie;