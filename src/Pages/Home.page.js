import React, {useState, useEffect} from "react";
import tmdb from "../api/tmdb";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import PremierImages from "../config/TempPosters.config";

const HomePage = () => {

const [popularMovies, setPopularMovies] = useState([]);

useEffect(() => {
  const requestPopularMovies = async() => {
    const getPopularMovies = await tmdb.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results);
  };
  requestPopularMovies();
},[]);

console.log({popularMovies});

const [topRatedMovies , setTopRatedMovies] = useState([]);

useEffect(() => {
  const requestTopRatedMovies = async() => {
    const getTopRatedMovies= await tmdb.get("/movie/top_rated");
    setTopRatedMovies(getTopRatedMovies.data.results);
  };
  requestTopRatedMovies();
}, []);

console.log({topRatedMovies});


const [upcomingMovies , setUpcomingMovies] = useState([]);

useEffect(() => {
  const requestUpcomingMovies = async() => {
    const getUpcomingMovies= await tmdb.get("movie/upcoming");
    setUpcomingMovies(getUpcomingMovies.data.results);
  };
  requestUpcomingMovies();
}, []);

console.log({upcomingMovies});

  return (
    <>
      <div className="flex flex-col gap-10 py-2">
        <div className="container mx-auto lg:px-32 md:p-2 sm:p-2">
          <h1 className=" lg:text-2xl font-bold text-gray-800 sm:text-xs flex flex-nowrap md:text-xl flex flex-nowrap">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-navCol-800 py-16 ">
          <div className="container mx-auto  lg:px-32 ">
            <div className="flex">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="Premier"
                className="w-full h-full  px-3"
              />
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premieres"
              subtitle="Brand new releases every Friday" isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:px-32">
        <PosterSlider
        images={topRatedMovies}
        title="Online Streaming Events"
        isDark={false}
        />
      </div>


      <div className="container mx-auto lg:px-32">
        <PosterSlider
        images={upcomingMovies}
        title="Online Streaming Events"
        isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
