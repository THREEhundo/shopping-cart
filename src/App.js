import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ProductsAll from "./components/ProductsAll";
import ProductSingle from "./components/ProductSingle";
import ShoppingCart from "./components/ShoppingCart";
import useFetch from "./components/useFetch";

const App = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const { data, error, isPending } = useFetch(
    "https://api.thesneakerdatabase.com/v1/sneakers?limit=50&name=air%20jordan%201%20high&brand=jordan"
  );

  const openCart = () => {
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

    openCart();
  };

  return (
    <Router>
      <div className="bg-primary text-secondary h-auto">
        <ShoppingCart
          showShoppingCart={showShoppingCart}
          setShowShoppingCart={setShowShoppingCart}
          shoppingCartItems={shoppingCartItems}
          setShoppingCartItems={setShoppingCartItems}
          data={data}
          error={error}
          isPending={isPending}
        />
        <Nav openCart={openCart} shoppingCartItems={shoppingCartItems} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/catalogue">
            <ProductsAll
              handleClick={handleClick}
              data={data}
              error={error}
              isPending={isPending}
            />
          </Route>
          <Route exact path="/catalogue/:linkID">
            <ProductSingle
              handleClick={handleClick}
              data={data}
              error={error}
              isPending={isPending}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
