import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const ProductsAll = (props) => {
  const { sneakerDB } = props;

  function formatName(name) {
    const slash = "/";
    const lCase = name.toLowerCase();
    const dash = lCase.replaceAll(" ", "-");
    console.log(slash.concat(dash));
    return slash.concat(dash);
  }
  if (sneakerDB !== null) {
    formatName(sneakerDB[0].name);
  }
  function cardStructure(props) {
    if (sneakerDB !== null) {
      return sneakerDB.map((snkr) => {
        return (
          <div
            key={snkr.id}
            className="flex flex-col self-center justify-evenly rounded-lg border-2 border-white w-11/12 h-auto py-2 px-2 my-2 mx-auto"
          >
            {/* <Link to={formatName(snkr.name)}> */}
            <img
              className="rounded-t-xl"
              alt="snkrImg"
              src={snkr.img.smallImg}
            ></img>
            {/* </Link> */}
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
    <div className="h-full my-10">
      <div id="cards" className="">
        {buildCards}
      </div>
    </div>
  );
};

export default ProductsAll;
