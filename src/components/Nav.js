import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

// NavLink prevents default call to the server, react-router-dom to render correct data.
// Also allows you to style active links
const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li className="ml-0 w-20">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
          </li>
          <div className="float-right">
            <li className="mr-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-auto">
              <Link to="/catalogue">Catalogue</Link>
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
