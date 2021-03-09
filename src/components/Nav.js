import React from "react";
import { NavLink } from "react-router-dom";

// May need to delete search component and make it a function here.

// NavLink prevents default call to the server, react-router-dom to render correct data.
// Also allows you to style active links
const Nav = (props) => {
  return (
    <nav>
      <div>
        <a href="/">One Air</a>
        <ul>
          <li>
            <NavLink Link to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink NavLink to="/ProductsAll">
              Catalogue
            </NavLink>
          </li>
          <li>
            <input type="search"></input>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
