import React from "react";

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
  setShoppingCart,
  shoppingCartItems = [],
  setShoppingCartItems,
}) => {
  const handleDecrement = (i) => {
    const updatedList = shoppingCartItems.map((item, j) => {
      if (j === i) {
        console.log(item.count - 1);
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });

    console.log(updatedList);
    setShoppingCartItems(updatedList);
  };

  const itemsInCart = (event) => {
    return shoppingCartItems.map((item, index) => {
      console.log(index);
      return (
        <div key={item.id} id="cartItem" className="text-primary">
          <img alt="cartItem" src={item.img.smallImg}></img>
          <p>{item.name}</p>
          <p>${item.retailPrice}</p>
          <div>
            <button onClick={() => handleDecrement(index)}>-</button>
            <input
              id="itemTotal"
              placeholder={item.count}
              type="number"
              min="0"
              max="100"
            ></input>
            <button
            // onClick={
            //   () => console.log(shoppingCartItems[0])
            // }
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
