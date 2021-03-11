import React from "react";

const ProductsAll = (props) => {
  const { sneakerDB } = props;

  function cardStructure(props) {
    if (sneakerDB !== null) {
      return sneakerDB.map((snkr) => {
        return (
          <div key={snkr.id} className="w-2/4 h-1/5">
            <img alt="snkrImg" src={snkr.img.smallImg}></img>
            <h2>{snkr.shoe}</h2>
            <h2>"{snkr.name}"</h2>
            <p>Released: {snkr.releaseDate}</p>
            <p>
              Since his game-winning shot that brought championship glory to
              North Carolina, Michael Jordan has been at the forefront of
              basketball consciousness. He took the court in 1985 wearing the
              original Air Jordan I, simultaneously breaking league rules and
              his opponents' will while capturing the imagination of fans
              worldwide.
            </p>
            <button>Buy</button>
          </div>
        );
      });
    }
  }

  const buildCards = cardStructure(props);

  return (
    <div className="flex flex-column h-screen bg-primary">
      <div id="cards" className="flex flex-wrap">
        {buildCards}
      </div>
    </div>
  );
};

export default ProductsAll;
