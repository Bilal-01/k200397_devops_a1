import React from "react";
import { Link } from "react-router-dom";
import './components.css';

const Navbar = ({ activeLink }) => {

    return(
        <div className="navbar">
            <ul className="navlist">
                <Link className="navlink lato-regular" to="">Home</Link>
                <Link className="navlink lato-regular" to="projects">Projects</Link>
                <Link className="navlink lato-regular" to="education">Education</Link>
                <Link className="navlink lato-regular" to="certification">Certification</Link>
            </ul>
        </div>

    )

};

export default Navbar;
