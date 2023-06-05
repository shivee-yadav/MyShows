//transforms a component into another component
//adding aditional functionalitites to the existing component

import React from "react";
import { Route, Routes } from "react-router-dom";

import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component:Component, ...rest}) => {
    //component
    //props -> path exact
    return (
        <Routes>
        <Route
        {...rest}

        component = {(props) => {
        <DefaultLayout>
            <Component {...props}/>
        </DefaultLayout>
        }}
        />
        </Routes>
    );
};



export default DefaultHOC;