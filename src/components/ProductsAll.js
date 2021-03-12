import React from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
// import ProductSingle from "./components/ProductSingle";

const ProductsAll = (props) => {
  const { data, error, isPending } = useFetch(
    "https://api.thesneakerdatabase.com/v1/sneakers?limit=50&name=air%20jordan%201%20high&brand=jordan"
  );

  function cardStructure() {
    if (data) {
      return data.map((snkr) => {
        return (
          <div
            key={snkr.id}
            className="flex flex-col self-center justify-evenly rounded-lg border-2 border-white w-11/12 h-auto py-2 px-2 my-2 mx-auto"
          >
            <Link to={`/catalogue/${snkr.id}`}>
              <img
                className="rounded-t-xl"
                alt="snkrImg"
                src={snkr.img.smallImg}
              ></img>
              <h2 className="text-lg">{snkr.shoe}</h2>
              <h2 className="text-base">"{snkr.name}"</h2>
            </Link>
            <p className="text-xs">Released: {snkr.releaseDate}</p>
            <p className="text-xs">
              Since his game-winning shot that brought championship glory to
              North Carolina, Michael Jordan has been at the forefront of
              basketball consciousness. He took the court in 1985 wearing the
              original Air Jordan I, simultaneously breaking league rules and
              his opponents' will while capturing the imagination of fans
              worldwide.
            </p>
            <button className="bg-secondary text-primary rounded-lg ring-4 ring-white my-2 rounded-full py-1 px-2 hover:text-secondary hover:bg-primary hover:ring-white focus:outline-none focus:bg-primary focus:ring-white focus:text-secondary">
              Buy
            </button>
          </div>
        );
      });
    }
  }

  const buildCards = cardStructure();

  return (
    <div className="h-full my-10">
      <div id="cards" className="">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && buildCards}
      </div>
    </div>
  );
};

export default ProductsAll;
