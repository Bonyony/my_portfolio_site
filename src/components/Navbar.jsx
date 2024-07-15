import React from "react";
import myLogo from "../assets/images/lookingGlass.jpeg";

const Menu = () => {
  return (
    <ul className="flex flex-row items-center gap-14 p-2 font-mono ">
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Projects</a>
      </li>
      <li>
        <a href="">Skills</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className="z-20 fixed top-0 w-full ">
      <div className=" flex flex-row justify-between p-5 font-semibold text-lg">
        <img
          src={myLogo}
          alt="Some of my own artwork"
          className="max-w-14 max-h-14"
        />
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
