import React from "react";

// May need to delete search component and make it a function here.

const Nav = (props) => {
  return (
    <nav>
      <div>
        <a href="/">One Air</a>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/catalogue">Catalogue</a>
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
