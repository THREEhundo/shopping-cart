import React from "react";
// import cartLogo from "../imgs/shopping-bag.png";

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

const Modal = () => {
  return (
    <div className="container h-full bg-opblack bg-black flex flex-col fixed">
      SHOPPING MODAL
      <div className="w-5/12 h-full bg-secondary self-end flex shadow-inner z-10">
        <h1 className="viewFont text-center text-primary flex-shrink">
          Shopping Cart
        </h1>
      </div>
    </div>
  );
};

const showModal = Modal();

const ShoppingCart = ({ showShoppingCart, setShoppingCart }) => {
  return <div>{showShoppingCart ? showModal : null}</div>;
};

export default ShoppingCart;
