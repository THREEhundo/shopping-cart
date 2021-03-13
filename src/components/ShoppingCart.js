import React from "react";
import cartLogo from "../imgs/shopping-bag.png";

/*
Clicking Add to Cart button -> Open Shopping Cart Modal
Modal includes
1. Individual Divs of items selected
  i. name
  ii. total price of selected item(s)
  iii. +/- incrementors
  iv. text input for item count
  v. delete button
2. Subtotal
3. Checkout button
*/
const ShoppingCart = ({ showShoppingCart, setShoppingCart }) => {
  return <div>{showShoppingCart ? <h1>SHOPPING CART</h1> : null}</div>;
};

export default ShoppingCart;
