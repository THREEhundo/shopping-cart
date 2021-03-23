import React, { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import trashIcon from "../imgs/trash.svg";

const ShoppingCart = ({
  showShoppingCart,
  setShowShoppingCart,
  shoppingCartItems = [],
  setShoppingCartItems,
  data,
  error,
  isPending,
  cartState,
  toggleCart,
}) => {
  const modalRef = useRef();

  const openCart = useSpring({
    config: {
      duration: 250,
    },
    transform: showShoppingCart ? "translateX(58.4%)" : "translateX(100%)",
    opacity: showShoppingCart ? 1 : 0,
  });

  const closeCart = useCallback(
    (e) => {
      if (
        modalRef.current === e.target ||
        (e.key === "Escape" && showShoppingCart)
      ) {
        toggleCart();
      }
    },
    [toggleCart, showShoppingCart]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeCart);
    return () => document.removeEventListener("keydown", closeCart);
  }, [closeCart]);

  const handleClick = useCallback(
    (e, i) => {
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
    },
    [shoppingCartItems, setShoppingCartItems]
  );

  const handleChange = useCallback(
    (e, i) => {
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
    },
    [shoppingCartItems, setShoppingCartItems]
  );

  const handleDelete = useCallback(
    (i) => {
      const delItem = shoppingCartItems.map((x) => x);
      delItem.splice(i, 1);
      return setShoppingCartItems(delItem);
    },
    [shoppingCartItems, setShoppingCartItems]
  );

  const comma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const Total = () => {
    let due;
    shoppingCartItems.length > 0
      ? (due = comma(
          shoppingCartItems.map((x) => x.total).reduce((x, y) => x + y)
        ))
      : (due = 0);
    return (
      <div
        id="total"
        className="flex flex-auto items-center text-2xl text-right bg-primary text-secondary w-full pr-2 border-t-2 mt-2"
      >
        <div className="ml-auto">Total: ${due}</div>
      </div>
    );
  };

  const ItemsInCart = () => {
    const list = shoppingCartItems.map((item, index) => {
      return (
        <li key={item.id} id={item.id} className="text-primary">
          <img alt="cartItem" src={item.img.smallImg}></img>
          <div className="flex flex-row flex-wrap ml-auto items-center">
            <p className="text-lg">{item.name}</p>
            <p className="text-lg">${item.retailPrice}</p>
          </div>
          <div className="flex flex-row flex-wrap items-center border-b bb-primary p-1">
            <div className="w-full pb-1">
              <div className="border-2 border-primary w-20 m-auto flex flex-row flex-nowrap">
                <button
                  id="minus"
                  className="pl-2 flex-1"
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
                  className="text-center appearance-none flex-1"
                ></input>
                <button
                  id="plus"
                  className="pr-2 flex-1"
                  onClick={(e) => handleClick(e, index)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="">${comma(item.total)}</div>
            <button
              className="ml-auto"
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
        </li>
      );
    });
    return <ul className="px-3 h-auto">{list}</ul>;
  };

  const Modal = () => {
    return (
      <div
        ref={modalRef}
        id="shoppingModal"
        className="h-full w-full bg-opblack bg-black flex flex-col fixed z-10"
        onClick={closeCart}
      >
        <animated.div style={openCart} className="h-full overflow-y-auto">
          <div
            id="cartDrawer"
            className="w-5/12 h-auto bg-secondary self-end flex flex-wrap shadow-inner z-10 text-primary"
          >
            <h1
              id="header"
              className="w-full h-auto text-4xl text-center text-secondary flex-auto bg-primary bt-primary"
            >
              Shopping Cart
            </h1>
            <div id="itemContainer" className="w-full h-auto">
              {shoppingCartItems.length > 0 ? (
                [<ItemsInCart key="full" />]
              ) : (
                <div id="empty">Your Cart is Empty, Get Shopping!</div>
              )}
            </div>
            <Total />
          </div>
        </animated.div>
      </div>
    );
  };

  return showShoppingCart ? <Modal /> : null;
};

export default ShoppingCart;
