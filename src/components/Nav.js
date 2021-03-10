import React from "react";
import ReactDOM from "react-dom";
import { Route, NavLink } from "react-router-dom";

// May need to delete search component and make it a function here.

// NavLink prevents default call to the server, react-router-dom to render correct data.
// Also allows you to style active links
const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li className="ml-0 text-2xl">
            <a href="/">One Air</a>
          </li>
          <div className="float-right">
            <li className="">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="mr-auto">
              <NavLink to="/ProductsAll">Catalogue</NavLink>
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
