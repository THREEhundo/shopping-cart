import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import cartLogo from "../imgs/shopping-bag.png";

// NavLink prevents default call to the server, react-router-dom to render correct data.
// Also allows you to style active links
const Nav = ({ openModal }) => {
  // const [showShoppingCart, setShowShoppingCart] = useState(false);
  //
  // const openModal = () => {
  //   console.log(showShoppingCart);
  //   setShowShoppingCart((prev) => !prev);
  // };
  //
  const ShoppingCartBtn = () => {
    return (
      <div>
        <div id="cart_total"></div>
        <button onClick={openModal}>
          <img className="w-6 filter-white" alt="cart" src={cartLogo}></img>
        </button>
      </div>
    );
  };

  return (
    <nav className="border-b-4 border-white">
      <div>
        <ul>
          <li className="ml-0 w-20">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
          </li>
          <div className="float-right">
            <li className="mr-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-auto">
              <Link to="/catalogue">Catalogue</Link>
            </li>
            <li>
              <ShoppingCartBtn />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
