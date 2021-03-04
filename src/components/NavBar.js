import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="container mx-auto flex justify-center">
                <nav className="flex">
                    <NavLink to="/"
                    exact
                    activeClassName="text-white"
                    className="menustyle">
                        Omr
                    </NavLink>
                    <NavLink to="/about"
                    className="menustyle">
                        About
                    </NavLink>
                    <NavLink to="/projects"
                    className="menustyle">
                        Projects
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}