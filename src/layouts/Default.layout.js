import React from "react";


const DefaultLayout = (props) => {
    return (

        <div style={{  padding: '10px' }}>

            <h1> Default Layout Page </h1>
            { props.children }
        </div>

    );
};

export default DefaultLayout;