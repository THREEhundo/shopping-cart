import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ProductsAll from "./components/ProductsAll";
import ProductSingle from "./components/ProductSingle";
import ShoppingCart from "./components/ShoppingCart";
// import Search from "./components/Search";

// Create cleanup for FETCH when clicking on different tab
// Create useFetch hook

const App = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const EMPTY_CART = { shoppingCartItems: [] };
  // Shopping cart items -> id of item & amount of each

  const openModal = () => {
    setShowShoppingCart((prev) => !prev);
  };

  // Click handler for all buy buttons
  const handleClick = (e, snkr) => {
    e.preventDefault();
    shoppingCartItems.length > -1
      ? setShoppingCartItems([...shoppingCartItems, snkr])
      : setShoppingCartItems([snkr]);

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
          EMPTY_CART={EMPTY_CART}
        />
        <Nav openModal={openModal} />
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
      <div className="text-xs">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
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
