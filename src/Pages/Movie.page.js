import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";

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

            <div>
                <h1 className="text-gray-900 text-2xl font-bold py-3">Top offers for you</h1>
                <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-2 border-dashed rounded-md p-4 w-96">

                <div className="w-8 h-8">
                <BiCameraMovie className="w-full h-full" />
                </div >

                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-lg font-semibold">10% Off on movies munchies!</h3>
                    <p className="text-gray-600 text-m">Tap to view details</p>
                </div>
                </div>
            </div>



        </div>
        </>
    )
};

export default Movie;