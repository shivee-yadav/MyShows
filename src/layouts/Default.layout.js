import React from "react";
import Navbar from "../components/Navbar/navbar.component";

const DefaultLayout = (props) => {
  return (
    <div >
      <Navbar />
      <h1>Default Layout Page</h1>
      {props.children}
    </div>
  );
};

export default DefaultLayout;