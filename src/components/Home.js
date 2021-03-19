import React from "react";

const Home = (props) => {
  return (
    <div className="flex flex-column w-auto h-4/5">
      <div className="flex-1 bg-hero-pattern bg-cover bg-center w-screen">
        <div className="w-80 absolute inset-x-0 bottom-10 my-5 mx-auto p-2 shadow-2xl border-4 border-white rounded">
          <h2 className="text-center text-3xl">Air Jordan 1</h2>
          <p className="text-sm text-justify">
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
