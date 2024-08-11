import React, { useContext } from "react";
import { ThemeContext } from "../App";
import "../styles/background.css";

const Background = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="main">
      <div
        className={
          "transition-all duration-500 " + (theme ? "circleRed" : "triangleRed")
        }
      ></div>
      <div
        className={
          "transition-all duration-500 " +
          (theme ? "circleBlue" : "triangleBlue")
        }
      ></div>
      <div
        className={
          "transition-all duration-500 " +
          (theme ? "circleYellow" : "triangleYellow")
        }
      ></div>
      <div
        className={
          "transition-all duration-500 " +
          (theme ? "circleGreen" : "triangleGreen")
        }
      ></div>
      <div
        className={
          "transition-all duration-500 " +
          (theme ? "circlePink" : "trianglePink")
        }
      ></div>
      <div
        className={
          "transition-all duration-500 " +
          (theme ? "circlePurple" : "trianglePurple")
        }
      ></div>
    </div>
  );
};

export default Background;
