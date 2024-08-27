import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { motion } from "framer-motion";

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
          <motion.h1
            drag
            dragConstraints={{ left: 0, right: 0, top: 10, bottom: 10 }}
            dragElastic={0.4}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 9 }}
            className="righteous-regular font-black text-4xl sm:text-6xl sm:w-1/2 "
          >
            Frank Francione
          </motion.h1>
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
