import React from "react";

const DefaultLayout = (props) => {
  return (
    <div style={{backgroundColor: "purple", padding: "10px" }}>
      <h1>Default Layout Page</h1>
      {props.children}
    </div>
  );
};

export default DefaultLayout;