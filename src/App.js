import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ProductsAll from "./components/ProductsAll";
import ProductSingle from "./components/ProductSingle";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  // Shopping cart items -> id of item & amount of each

  const openModal = () => {
    setShowShoppingCart((prev) => !prev);
  };

  // Click handler for all buy buttons
  const handleClick = (e, snkr) => {
    e.preventDefault();

    if (shoppingCartItems.some((x) => x.name === snkr.name)) {
      const add = shoppingCartItems.map((item) => {
        if (item.name === snkr.name) {
          return {
            ...item,
            count: item.count + 1,
            total: (item.count + 1) * item.retailPrice,
          };
        } else {
          return item;
        }
      });
      setShoppingCartItems(add);
    } else {
      setShoppingCartItems([
        ...shoppingCartItems,
        { ...snkr, count: 1, total: snkr.retailPrice },
      ]);
    }

    openModal();
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showShoppingCart) {
        setShowShoppingCart(false);
      }
    },
    [showShoppingCart, setShowShoppingCart]
  );

  useEffect(() => {
    let isMounted = true;
    if (isMounted) document.addEventListener("keydown", keyPress);
    return () => {
      isMounted = false;
      return document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  return (
    <Router>
      <div className="bg-primary text-secondary h-auto">
        <ShoppingCart
          showShoppingCart={showShoppingCart}
          setShowShoppingCart={setShowShoppingCart}
          shoppingCartItems={shoppingCartItems}
          setShoppingCartItems={setShoppingCartItems}
        />
        <Nav openModal={openModal} shoppingCartItems={shoppingCartItems} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/catalogue">
            <ProductsAll handleClick={handleClick} />
          </Route>
          <Route exact path="/catalogue/:linkID">
            <ProductSingle handleClick={handleClick} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
