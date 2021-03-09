import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import ProductsAll from "./components/ProductsAll";
import Search from "./components/Search";
import ProductSingle from "./components/ProductSingle";

const App = () => {
  const [sneakerDB, setSneakerDB] = useState(null);

  useEffect(() => {
    // function parseData(res) {
    //   const { data } = res
    //
    // }
    async function fetchData() {
      try {
        const url =
          "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&name=air%20jordan%201%20high&brand=jordan";

        const fetched = await fetch(url);
        const res = await fetched.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/home" component={Home} />
        <Route exact path="/catalogue" component={ProductsAll} />
      </BrowserRouter>
      {/* <ShoppingCart />
      <Search /> */}
    </div>
  );
};

export default App;
