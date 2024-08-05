import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        " p-6 " + (theme ? "text-gray-200 bg-slate-800" : "bg-[#002451]")
      }
    >
      <h1 className="text-center font-black font-mono">
        WOW! You made it all the way down here!
      </h1>
    </div>
  );
};

export default Footer;
