import React from "react";
import trashIcon from "../imgs/trash.svg";
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
  const handleClick = (e, i) => {
    const { id } = e.target;

    const updatedCart = shoppingCartItems.map((item, j) => {
      return j === i
        ? id === "minus"
          ? {
              ...item,
              count: item.count - 1,
              total: (item.count - 1) * item.retailPrice,
            }
          : {
              ...item,
              count: item.count + 1,
              total: (item.count + 1) * item.retailPrice,
            }
        : item;
    });

    const nonZero = updatedCart.filter((item) => item.count !== 0);

    setShoppingCartItems(nonZero);
  };

  const handleChange = (e, i) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    const updatedCart = shoppingCartItems.map((item, j) => {
      if (j === i) {
        return { ...item, count: value, total: value * item.retailPrice };
      } else {
        return item;
      }
    });

    if (value === 0) {
      updatedCart.splice(i, 1);
      return setShoppingCartItems(updatedCart);
    }
    setShoppingCartItems(updatedCart);
  };

  const handleDelete = (i) => {
    const delItem = shoppingCartItems.map((x) => x);
    delItem.splice(i, 1);
    return setShoppingCartItems(delItem);
  };

  const comma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const Total = () => {
    let due;
    shoppingCartItems.length > 0
      ? (due = comma(
          shoppingCartItems.map((x) => x.total).reduce((x, y) => x + y)
        ))
      : (due = 0);
    return (
      <div id="total" className="text-3xl">
        Total: ${due}
      </div>
    );
  };

  const ItemsInCart = () => {
    return shoppingCartItems.map((item, index) => {
      return (
        <div key={item.id} id={item.id} className="text-primary">
          <img alt="cartItem" src={item.img.smallImg}></img>
          <p>{item.name}</p>
          <p>${item.retailPrice}</p>
          <div>
            <button
              id="minus"
              value={item.count}
              onClick={(e) => handleClick(e, index)}
            >
              -
            </button>
            <input
              id="itemTotal"
              value={item.count}
              min="0"
              max="20"
              type="number"
              onChange={(e) => handleChange(e, index)}
            ></input>
            <button id="plus" onClick={(e) => handleClick(e, index)}>
              +
            </button>
            ${comma(item.total)}
            <button
              className="float-right"
              onClick={() => handleDelete(index)}
              id="delete"
            >
              <img
                alt="delete"
                className="w-8 h-6 filter-pink"
                src={trashIcon}
              ></img>
            </button>
          </div>
        </div>
      );
    });
  };

  const Modal = () => {
    return (
      <div
        key="shoppingModal"
        id="shoppingModal"
        className="container h-full bg-opblack bg-black flex flex-col fixed"
      >
        SHOPPING MODAL
        <div
          key="cartDrawer"
          id="cartDrawer"
          className="w-5/12 h-full bg-secondary self-end flex flex-wrap shadow-inner z-10 text-primary"
        >
          <h1
            id="header"
            key="header"
            className="h-1/5 viewFont text-center flex-shrink"
          >
            Shopping Cart
          </h1>
          <div id="itemContainer" key="itemContainer" className="w-full h-3/5">
            {shoppingCartItems.length > 0 ? (
              [<ItemsInCart />]
            ) : (
              <div key="empty" id="empty">
                Your Cart is Empty, Get Shopping!
              </div>
            )}
          </div>
          <Total key="total" />
        </div>
      </div>
    );
  };

  return showShoppingCart ? <Modal /> : null;
};

export default ShoppingCart;
