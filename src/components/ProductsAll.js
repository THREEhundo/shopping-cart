import React from "react";

const ProductsAll = (props) => {
  const { sneakerDB } = props;

  function cardStructure(props) {
    if (sneakerDB !== null) {
      return sneakerDB.map((snkr) => {
        return (
          <div key={snkr.id} className="w-2/4 h-auto px-1">
            <img
              className="rounded"
              alt="snkrImg"
              src={snkr.img.smallImg}
            ></img>
            <h2 className="text-lg">{snkr.shoe}</h2>
            <h2 className="text-base">"{snkr.name}"</h2>
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

  const buildCards = cardStructure(props);

  return (
    <div className="flex flex-column h-full">
      <div id="cards" className="flex flex-wrap">
        {buildCards}
      </div>
    </div>
  );
};

export default ProductsAll;
