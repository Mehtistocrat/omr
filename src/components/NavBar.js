import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="container mx-auto flex justify-center">
                <nav className="flex">
                    <NavLink to="/"
                    exact
                    activeClassName="menustyleactive"
                    className="menustyle">
                        Omr
                    </NavLink>

                    <NavLink to="/about"
                    activeClassName="menustyleactive"
                    className="menustyle">
                        About
                    </NavLink>
                    
                    <NavLink to="/projects"
                    activeClassName="menustyleactive"
                    className="menustyle">
                        Projects
                    </NavLink>
                </nav>
            </div>
            <div className="container mx-auto flex justify-center">
                <SocialIcon
                    url=""
                    className=""
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                    url=""
                    className=""
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                    url=""
                    className=""
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 30, width: 30 }}
                />
            </div>
        </header>
    )
}