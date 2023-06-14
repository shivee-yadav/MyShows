import { Route, Routes } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";
import Plays from "./Pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <DefaultHOC path="/" exact component={<HomePage />} />
      <MovieHOC path="/movie/:id" exact  component={<Movie />}  />
      <MovieHOC path="/plays" exact component={<Plays />}  />
    </div>
  );
}

export default App;


//exact -> to show the exact page where we want to render
//SPREAD operator:for adding new parameters without creating another object


// function Name() {
//   return <h1>Welcom to Home Page!!!</h1>
// }

// function Name2() {
//   return <h1>Welcom to Movie Page!!!</h1>
// }


{/* <Route path="/movie" exact Component={Name2}/> */ }
  //fragments;to return;empty tags


  // <div className="App p-10">
  //   <h1 className='text-6xl text-purpy-500'>Hello</h1>
  //   <button className='border-2 px-2 py-1 border-blue-500 md:border-red-500 lg:border-green-500 rounded bg-blue-500 md:bg-red-500  lg:bg-green-500 text-white hover:bg-transparent hover:text-blue-500 md:hover:text-red-500 lg:hover:text-green-500 hover:border-2'>Taylor Swift!</button>
  // </div>