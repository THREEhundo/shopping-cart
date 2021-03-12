import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../imgs/logo.png";

// May need to delete search component and make it a function here.

// NavLink prevents default call to the server, react-router-dom to render correct data.
// Also allows you to style active links
const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li className="ml-0 w-20">
            <a href="/">
              <img src={logo} alt="logo"></img>
            </a>
          </li>
          <div className="float-right">
            <li className="mr-3">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-auto">
              <NavLink to="/catalogue">Catalogue</NavLink>
            </li>
            {/* <li classList="">
              <input className="" type="search"></input>
            </li> */}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
