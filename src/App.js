import "./App.css";
import React, { useState } from "react";
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
    //animation & visual of increase in total amount of items\
  };

  return (
    <Router>
      <div className="bg-primary text-secondary">
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

// Data needed for Single product page
//   1. image
//   2. Shoe name
//   3. Colorway
//   4. Price
//   5. Detailed description

export default App;
