import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="container mx-auto flex justify-center">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="menustyleactive"
                        className="inline-flex items-center menustyle">
                            Omr
                    </NavLink>

                    <NavLink
                        to="/about"
                        activeClassName="menustyleactive"
                        className="inline-flex items-center menustyle">
                            About
                    </NavLink>
                    
                    <NavLink
                        to="/projects"
                        activeClassName="menustyleactive"
                        className="inline-flex items-center menustyle">
                            Projects
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}