import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) => {
  return (
    <div >
      <Navbar />
      <HeroCarousel />
      <h1>Default Layout Page</h1>
      {props.children}
    </div>
  );
};

export default DefaultLayout;