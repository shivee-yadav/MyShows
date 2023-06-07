import React from "react";

import { BiChevronRight, BiSearch } from "react-icons/bi";

const NavSm = () => {
    return(
        <>
            <div className="text-white flex items-center justify-between" >
                <div>
                    <h3 className="text-xl font-bold">IT ALL STARTS HERE!</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        Bhubaneshwar <BiChevronRight/>
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full"/>
                </div>
            </div>
        </>
    )
 };
const NavMd = () => { };
const NavLg = () => { };

const Navbar = () => {
    return (
        <>
            <nav className="bg-navCol-700 px-4 py-2">
                <div className="md:hidden">{
                //mobile screen
                    <NavSm />
                }
                </div>
                <div className="hidden lg:hidden md:flex">{//hidden for large and flex for medium
                //Tablet screen
                }
                </div>
                <div className="hidden lg:flex">{//hideen for all except flex for large
                //PC screen
                
                }
                </div>
            </nav>
        </>
    )
};

export default Navbar;

//md:hidden -> it'll be hidden for screen equal to larger than medium