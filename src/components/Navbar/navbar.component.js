import React from "react";

import { BiChevronRight } from "react-icons/bi";

const NavSm = () => {
    return(
        <>
            <div>
                <div>
                    <h3>IT ALL STARTS HERE!</h3>
                    <span>
                        Bhubaneshwar <BiChevronRight/>
                    </span>
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
            <nav>
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