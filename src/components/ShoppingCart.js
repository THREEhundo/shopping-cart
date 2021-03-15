import React, { useState } from "react";

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
const ShoppingCart = ({
  showShoppingCart,
  shoppingCartItems = [],
  setShoppingCartItems,
}) => {
  const [value, setValue] = useState(1);
  // Delete Item from bag when item count = 0
  const handleClick = (e, i) => {
    // const updatedList = shoppingCartItems.map((item, j) => {
    //   if (j === i) {
    //     if (e.target.id === "minus") {
    //       return { ...item, count: item.count - 1 };
    //     } else {
    //       return { ...item, count: item.count + 1 };
    //     }
    //   } else {
    //     return item;
    //   }
    // });
    // setShoppingCartItems(updatedList);
    const itemTotal = document.querySelector("#itemTotal").value;
    console.log(itemTotal);
    let { id } = e.target;
    if (id === "minus") {
      // if (itemTotal === 0) {
      //   const updatedCart = shoppingCartItems.splice(i, 1);
      //   setShoppingCartItems(updatedCart);
      // }
      setValue(value - 1);
    } else {
      setValue(value + 1);
    }
  };

  const handleChange = (e, i) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    if (value === 0) {
      console.log(value);
      const updatedCart = shoppingCartItems.map((x) => x);
      updatedCart.splice(i, 1);
      console.log(updatedCart);
      setShoppingCartItems(updatedCart);
      setValue(1);
    }
    // else if (value === "") {
    // }
    // else {
    setValue(value);
    // }
  };

  const itemsInCart = () => {
    return shoppingCartItems.map((item, index) => {
      return (
        <div key={item.id} id="cartItem" className="text-primary">
          <img alt="cartItem" src={item.img.smallImg}></img>
          <p>{item.name}</p>
          <p>${item.retailPrice}</p>
          <div>
            <button
              id="minus"
              // value={value}
              // onClick={(e) => handleClick(e, index)}
            >
              -
            </button>
            <input
              id="itemTotal"
              value={value}
              min="0"
              max="20"
              type="number"
              onChange={(e) => handleChange(e, index)}
            ></input>
            <button
              id="plus"
              // value={value}
              // onClick={(e) => handleClick(e, index)}
            >
              +
            </button>
          </div>
        </div>
      );
    });
  };

  const scanItems = itemsInCart();

  const Modal = () => {
    return (
      <div
        id="shoppingCart"
        className="container h-full bg-opblack bg-black flex flex-col fixed"
      >
        SHOPPING MODAL
        <div className="w-5/12 h-full bg-secondary self-end flex flex-wrap shadow-inner z-10 text-primary">
          <h1 className="h-1/5 viewFont text-center flex-shrink">
            Shopping Cart
          </h1>
          <div className="w-full h-4/5">
            {shoppingCartItems.length > 0 ? (
              [scanItems]
            ) : (
              <div>Nothing in Cart</div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const showModal = Modal();

  return <div>{showShoppingCart ? showModal : null}</div>;
};

export default ShoppingCart;
