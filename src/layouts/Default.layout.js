import React from "react";
import Navbar from "../components/Navbar/navbar.component";

const DefaultLayout = (props) => {
  return (
    <div style={{backgroundColor: "purple", padding: "10px" }}>
      <Navbar />
      <h1>Default Layout Page</h1>
      {props.children}
    </div>
  );
};

export default DefaultLayout;