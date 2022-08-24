import React from "react";
import logo from "../components/logo.png";
import {NavLink, Link} from "react-router-dom"

function Navbar() {  
  
  return (
    <div className="Navbar-Container">
      <nav>
        <NavLink to="/">
          <img src={logo} alt="Rick and Morty Logo" />
        </NavLink> 

        <ul>
          <li className="NavLi">
            <NavLink to="episode">Episodes</NavLink>
          </li>
          <li className="NavLi">
            <NavLink to="/">Characters</NavLink>
          </li>
          <li className="NavLi">
            <NavLink to="location">Locations</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
