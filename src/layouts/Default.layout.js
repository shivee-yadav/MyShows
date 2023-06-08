import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) => {
  return (
    <div >
      <Navbar />
      <HeroCarousel />
      
      {props.children}
    </div>
  );
};

export default DefaultLayout;