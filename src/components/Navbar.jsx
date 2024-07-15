import React from "react";
import myLogo from "../assets/images/lookingGlass.jpeg";

const Menu = () => {
  return (
    <ul className="flex flex-row items-center gap-14 p-2 font-mono ">
      <li>
        <a className="hover:bg-blue-300 transition-all duration-300" href="">
          Home
        </a>
      </li>
      <li>
        <a className="hover:bg-red-300 transition-all duration-300" href="">
          Projects
        </a>
      </li>
      <li>
        <a className="hover:bg-amber-300 transition-all duration-300" href="">
          Skills
        </a>
      </li>
      <li>
        <a className="hover:bg-green-300 transition-all duration-300" href="">
          About
        </a>
      </li>
      <li>
        <a className="hover:bg-pink-300 transition-all duration-300" href="">
          Contact
        </a>
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
