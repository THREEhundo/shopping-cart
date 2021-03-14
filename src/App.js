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

  const openModal = () => {
    console.log(showShoppingCart);
    setShowShoppingCart((prev) => !prev);
  };

  return (
    <Router>
      <div className="bg-primary text-secondary">
        <ShoppingCart
          showShoppingCart={showShoppingCart}
          setShowShoppingCart={setShowShoppingCart}
        />
        <Nav openModal={openModal} />
        <Switch>
          {/* <Route extact path="/" component={App} /> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/catalogue">
            <ProductsAll />
          </Route>
          <Route exact path="/catalogue/:linkID">
            <ProductSingle />
          </Route>
        </Switch>
      </div>
      <div>
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
