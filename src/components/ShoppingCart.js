import React from "react";
import cartLogo from "../imgs/shopping-bag.png";

const ShoppingCart = (props) => {
  return (
    <button>
      <img className="w-6 filter-white" alt="cart" src={cartLogo}></img>
    </button>
  );
};

export default ShoppingCart;
