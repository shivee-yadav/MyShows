import React from "react";

const NavSm = () => { };
const NavMd = () => { };
const NavLg = () => { };

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="md:hidden">{
                //mobile screen
                }
                </div>
                <div className="hidden lg:hidden md:flex">{
                //Tablet screen
                }
                </div>
                <div className="hidden lg:flex">{
                //PC screen
                
                }
                </div>
            </nav>
        </>
    )
}