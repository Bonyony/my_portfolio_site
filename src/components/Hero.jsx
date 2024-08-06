import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Switch from "./Switch";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="home"></div>

      <div className="mx-4 sm:mx-12 lg:mx-24 pt-40 mb-24 ">
        <h1 className="font-black text-3xl sm:text-5xl sm:w-1/2 ">
          FRANK FRANCIONE
        </h1>
        <div className="font-bold font-mono text-sm sm:text-base mt-5">
          <p>Developer.</p>
          <p>Design focused.</p>
          <p>Musician, Writer, Artist, Animal Lover, etc.</p>
        </div>
        <div className="font-bold font-mono text-sm sm:text-base mt-5">
          <Switch />
        </div>
      </div>
    </>
  );
};

export default Hero;
