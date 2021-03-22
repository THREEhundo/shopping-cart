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

    return (
      <span
        className={`${
          shoppingCartItems instanceof Array && shoppingCartItems.length > 0
            ? "border-2"
            : ""
        } inline-block px-1 rounded-full text-xs`}
      >
        {currentTotal}
      </span>
    );
  };

  const ShoppingCartBtn = () => {
    return (
      <div className="w-12">
        <TotalInCart />
        <button className="my-auto align-bottom" onClick={toggleCart}>
          <img className="w-7 filter-white" alt="cart" src={cartLogo}></img>
        </button>
      </div>
    );
  };

  return (
    <nav className="border-b-2 border-white">
      <div>
        <ul className="flex">
          <li className="ml-0 w-20">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
          </li>
          <div className="mt-3 flex ml-auto">
            <li className="mr-3 text-2xl">
              <Link to="/">Home</Link>
            </li>
            <li id="catalogueLink" className="mr-3 text-2xl">
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
