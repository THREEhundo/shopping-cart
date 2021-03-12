import React from "react";

const Home = (props) => {
  return (
    <div className="flex flex-column h-screen w-auto min-w-max">
      <div className="flex-initial bg-hero-pattern bg-cover bg-center w-screen">
        <div>
          <h2 className="text-xl">Air Jordan 1</h2>
          <p className="text-sm">
            The Jordans that started it all. The Air Jordan 1 is the most
            important model in sneaker history. Find every essential Air Jordan
            1 High colorway here. We take it back to Rarified Air.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
