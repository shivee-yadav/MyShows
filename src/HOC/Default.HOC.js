//transforms a component into another component
//adding aditional functionalitites to the existing component

import React from "react";
import { Route, Routes } from "react-router-dom";

import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component, ...props }) => {
    return (
        <Routes>
          <Route {...props} element={<DefaultLayout>{component}</DefaultLayout>} />
        </Routes>
      );
};

export default DefaultHOC;

