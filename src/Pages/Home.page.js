import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import { Premier } from "../components/Premier/Premier.component";

const HomePage = () => {
    return(
        <>
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800"> The best of Entertainment</h1>
             <EntertainmentCardSlider />
        </div>

        <div className="bg-navCol-800 py-16">
            <div className="flex">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="Premier"
                className="w-full h-full"
                />
            </div>

            <div className="container mx-auto px-4 ">
            <Premier />
            </div>
        </div>
        </>
    );
};

export default HomePage;