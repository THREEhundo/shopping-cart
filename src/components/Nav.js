import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import cartLogo from "../imgs/shopping-bag.png";

const Nav = ({ toggleCart, shoppingCartItems = [] }) => {
  const TotalInCart = () => {
    let currentTotal;

    shoppingCartItems instanceof Array && shoppingCartItems.length > 0
      ? (currentTotal = shoppingCartItems
          .map((x) => x.count)
          .reduce((x, y) => x + y))
      : (currentTotal = "");

    return <span>{currentTotal}</span>;
  };

  const ShoppingCartBtn = () => {
    return (
      <div>
        <TotalInCart />
        <button onClick={toggleCart}>
          <img className="w-6 filter-white" alt="cart" src={cartLogo}></img>
        </button>
      </div>
    );
  };

  return (
    <nav className="border-b-2 border-white">
      <div>
        <ul>
          <li className="ml-0 w-20">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
          </li>
          <div className="mt-3 float-right">
            <li className="mr-3">
              <Link to="/">Home</Link>
            </li>
            <li id="catalogueLink" className="mr-3">
              <Link to="/catalogue">Catalogue</Link>
            </li>
            <li>
              <ShoppingCartBtn />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
