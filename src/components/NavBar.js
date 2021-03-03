import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="container mx-auto flex justify-between">
                <nav>
                    <NavLink to="/" exact>
                        Omr
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}