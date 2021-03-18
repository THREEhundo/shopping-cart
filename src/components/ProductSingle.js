import React, { useCallback } from "react";
import { useParams } from "react-router-dom";

const ProductSingle = ({
  handleClick,
  shoppingCartItems,
  data,
  error,
  isPending,
}) => {
  const { linkID } = useParams();

  const addToCart = useCallback(
    (e) => {
      const { id } = e.target.parentNode;
      const copy = data.map((x) => x);
      const snkr = copy.find((x) => x.id === id);

      handleClick(e, snkr);
    },
    [handleClick, data]
  );

  const PickSnkr = () => {
    let mod;
    if (data) {
      const copy = data.map((x) => x);
      const snkr = copy.find((x) => x.linkID === linkID);
      mod = (
        <div className="h-screen p-5" key={snkr.id} id={snkr.id}>
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
          <button
            className="bg-secondary text-primary rounded-lg ring-4 ring-primary my-2 rounded-full py-1 px-2 hover:text-secondary hover:bg-primary hover:ring-secondary focus:outline-none focus:bg-primary focus:ring-secondary focus:text-secondary"
            onClick={addToCart}
          >
            Buy
          </button>
        </div>
      );
    }
    return mod;
  };

  return (
    <div className="h-screen">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <PickSnkr />}
    </div>
  );
};

export default ProductSingle;
