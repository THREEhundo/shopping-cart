import React from "react";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const springUp = useSpring({
    config: {
      duration: 250,
    },
    opacity: document.readyState === "complete" ? 1 : 0,
    transform:
      document.readyState === "complete"
        ? "translateY(0%)"
        : "translateY(300%)",
  });
  return (
    <div className="flex flex-column w-auto h-full">
      <div className="flex-1 bg-hero-pattern bg-contain bg-fixed bg-no-repeat bg-center w-screen">
        <animated.div
          id="springUp"
          style={{ ...springUp, overflow: "hidden" }}
          className="z-0 w-80 absolute inset-x-0 bottom-28 bg-primary my-5 mx-auto p-2 shadow-2xl border-4 border-white rounded opacity-0	"
        >
          <h2 className="text-center text-3xl">Air Jordan 1</h2>
          <p className="text-sm text-justify">
            The Jordans that started it all. The Air Jordan 1 is the most
            important model in sneaker history. Find every essential Air Jordan
            1 High colorway here. We take it back to Rarified Air.
          </p>
        </animated.div>
      </div>
    </div>
  );
};
window.onload = () =>
  document.querySelector("#springUp")
    ? (document.querySelector("#springUp").style = "springUp")
    : "";
export default Home;
