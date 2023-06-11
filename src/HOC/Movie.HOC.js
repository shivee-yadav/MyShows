import React from "react";
import { Route, Routes } from "react-router-dom";

import MovieLayout from "../layouts/Movie.layout";

const  MovieHOC = ({ component, ...props }) => {
    return (
        <Routes>
          <Route {...props} element={< MovieLayout>{component}</ MovieLayout>} />
        </Routes>
      );
};

export default  MovieHOC;
