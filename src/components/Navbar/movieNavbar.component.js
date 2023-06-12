import React from "react";

import { BiChevronDown, BiChevronRight, BiMenu, BiSearch, BiChevronLeft } from "react-icons/bi";
import { CiShare2 } from  "react-icons/ci";


const NavSm = () => {
  return (
    <>
      <div className="text-black flex items-center justify-between ">
        <div>
          <h2 className=" text-s  font-sans font-medium">IT ALL STARTS HERE!</h2>
          
        </div>
        <div className="w-8 h-8 ">
          <CiShare2 className=" w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2">
          <div className="w-12 h-12">
            <img
              src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/bookmyshow-logo.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full focus:outline-none"
              placeholder="Search for Movies,Events,Plays,Sports and Activities"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
            Bhubaneshwar 
            <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full"/>
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="bg-white   lg:bg-navCol-700 px-4 py-2">
        <div className="md:hidden">
          {
            //md:hidden -> it'll be hidden for screen equal to larger than medium
            //mobile screen
            <NavSm />
          }
        </div>
        <div className="hidden lg:hidden md:block">
          {
            //hidden for large and flex for medium
            //Tablet screen
            <NavSm />
          }
        </div>
        <div className="hidden lg:flex">
          {
            //hideen for all except flex for large
            //PC screen
            <NavLg />
          }
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;

