import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Switch from "./Switch";
import hyrax from "../assets/images/HyraxCake-removebg.png";
import "../styles/hero.css";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="container">
        <div id="home"></div>
        <img
          className="absolute -z-10 top-[220px] sm:top-[180px] md:top-[95px] lg:top-[50px] left-[140px] sm:left-[250px] md:left-[300px] lg:left-[400px] transition-all duration-300"
          src={hyrax}
          alt="A hyrax on a cake"
        />

        <div className="mx-4 sm:mx-12 lg:mx-24 pt-40 mb-24 ">
          <h1 className="font-black text-3xl sm:text-5xl sm:w-1/2 ">
            FRANK FRANCIONE
          </h1>
          <div className="font-bold font-mono text-sm sm:text-base mt-5 ">
            <p>Developer.</p>
            <p>Design focused.</p>
            <p>Musician, Writer, Artist, Animal Lover, etc.</p>
          </div>
          <div className="font-bold font-mono text-sm sm:text-base mt-5">
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
