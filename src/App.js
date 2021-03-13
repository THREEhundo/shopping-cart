import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ProductsAll from "./components/ProductsAll";
import ProductSingle from "./components/ProductSingle";
// import Search from "./components/Search";

// Create cleanup for FETCH when clicking on different tab
// Create useFetch hook

const App = () => {
  // const [sneakerDB, setSneakerDB] = useState(null);
  // const db = useFetch(
  //   "https://api.thesneakerdatabase.com/v1/sneakers?limit=50&name=air%20jordan%201%20high&brand=jordan"
  // );
  // setSneakerDB(db);
  return (
    <Router>
      <div className="bg-primary text-secondary px-1">
        <Nav />
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
