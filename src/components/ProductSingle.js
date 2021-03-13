import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProductSingle = (props) => {
  const { linkID } = useParams();
  const { data, error, isPending } = useFetch(
    "https://api.thesneakerdatabase.com/v1/sneakers?limit=50&name=air%20jordan%201%20high&brand=jordan"
  );

  const pickSnkr = () => {
    let mod;
    if (data) {
      const copy = data.map((x) => x);
      const snkr = copy.find((x) => x.linkID === linkID);
      mod = (
        <div className="h-screen p-5">
          <img
            className="rounded-t-xl"
            alt="snkrImg"
            src={snkr.img.smallImg}
          ></img>
          <h2 className="text-3xl">{snkr.shoe}</h2>
          <h2 className="text-3xl">"{snkr.name}"</h2>
          <h2 className="text-3xl">${snkr.retailPrice}</h2>
          <p className="text-xs">Released: {snkr.releaseDate}</p>
          <p className="text-xs">
            Since his game-winning shot that brought championship glory to North
            Carolina, Michael Jordan has been at the forefront of basketball
            consciousness. He took the court in 1985 wearing the original Air
            Jordan I, simultaneously breaking league rules and his opponents'
            will while capturing the imagination of fans worldwide.
          </p>
          <button className="bg-secondary text-primary rounded-lg ring-4 ring-white my-2 rounded-full py-1 px-2 hover:text-secondary hover:bg-primary hover:ring-white focus:outline-none focus:bg-primary focus:ring-white focus:text-secondary">
            Buy
          </button>
        </div>
      );
    }
    return mod;
  };

  pickSnkr();
  const snkrView = pickSnkr();

  return (
    <div className="h-screen">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && snkrView}
    </div>
  );
};

export default ProductSingle;
