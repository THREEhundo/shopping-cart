import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ProductsAll from "./components/ProductsAll";
import ProductSingle from "./components/ProductSingle";
// import useFetch from "./components/useFetch";
// import ShoppingCart from "./components/ShoppingCart";
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
        {/* <ShoppingCart />
        <Search /> */}
      </div>
    </Router>
  );
};

// useEffect(() => {
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
//   function formatName(name) {
//     const lCase = name.toLowerCase();
//     const dash = lCase.replaceAll(" ", "-");
//     return dash;
//   }
//
//   function parseData(res) {
//     const { results } = res;
//
//     return results.filter((snkr) => {
//       let url = snkr.media.imageUrl;
//       const { shoe, gender } = snkr;
//       return (
//         url !== null &&
//         !url.includes("Placeholder") &&
//         shoe.includes("Jordan 1 Retro High") &&
//         gender.includes("men")
//       );
//     });
//   }
//
//   function neededProps(arr) {
//     return arr.map((snkr) => {
//       return {
//         colorway: snkr.colorway,
//         id: formatName(snkr.name),
//         img: {
//           bigImg: snkr.media.imageUrl,
//           smallImg: snkr.media.smallImageUrl,
//         },
//         name: snkr.name,
//         releaseDate: snkr.releaseDate,
//         retailPrice: snkr.retailPrice,
//         shoe: snkr.shoe,
//         year: snkr.year,
//       };
//     });
//   }
//
//   async function fetchData() {
//     try {
//       const url =
//         "https://api.thesneakerdatabase.com/v1/sneakers?limit=50&name=air%20jordan%201%20high&brand=jordan";
//
//       const fetched = await fetch(url);
//       const res = await fetched.json();
//       const trunkData = parseData(res);
//       const finalList = neededProps(trunkData);
//       setSneakerDB(finalList);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   fetchData();
// }, []);

export default App;
