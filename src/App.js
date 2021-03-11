import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
// import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import ProductsAll from "./components/ProductsAll";
// import Search from "./components/Search";
// import ProductSingle from "./components/ProductSingle";

const App = () => {
  const [sneakerDB, setSneakerDB] = useState(null);

  useEffect(() => {
    /*
    Data needed for All product page
      1. image
      2. Shoe name
      3. Colorway
      4. Price
    */
    /*
    Data needed for Single product page
      1. image
      2. Shoe name
      3. Colorway
      4. Price
      5. Detailed description
    */
    function parseData(res) {
      const { results } = res;
      return results.map((snkr) => {
        // console.log(snkr.media);
        return {
          colorway: snkr.colorway,
          id: snkr.id,
          img: {
            bigImg: snkr.media.imageUrl,
            smallImg: snkr.media.smallImageUrl,
          },
          name: snkr.name,
          releaseDate: snkr.releaseDate,
          retailPrice: snkr.retailPrice,
          shoe: snkr.shoe,
          year: snkr.year,
        };
      });
    }
    async function fetchData() {
      try {
        const url =
          "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&name=air%20jordan%201%20high&brand=jordan";

        const fetched = await fetch(url);
        const res = await fetched.json();
        const trunkData = parseData(res);
        // console.log(res);
        // console.log(trunkData);
        setSneakerDB(trunkData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  // console.log(sneakerDB);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route extact path="/" component={App} /> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/catalogue">
            <ProductsAll sneakerDB={sneakerDB} />
          </Route>
        </Switch>
        {/* <ShoppingCart />
        <Search /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
