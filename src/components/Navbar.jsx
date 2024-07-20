import React from "react";
import myLogo from "../assets/images/lookingGlass.jpeg";

const Menu = () => {
  return (
    <ul className="flex flex-row items-center gap-14 p-2 font-mono  ">
      <li>
        <a
          className="bg-white hover:bg-blue-300 p-1 transition-all duration-100"
          href=""
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="bg-white hover:bg-red-300 p-1 transition-all duration-100"
          href=""
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className="bg-white hover:bg-amber-300 p-1 transition-all duration-100"
          href=""
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className="bg-white hover:bg-green-300 p-1 transition-all duration-100"
          href=""
        >
          About
        </a>
      </li>
      <li>
        <a
          className="bg-white hover:bg-pink-300 p-1 transition-all duration-100"
          href=""
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className="z-10 fixed top-0 w-full ">
      <div className=" flex flex-row justify-between pt-5 px-5 font-semibold text-lg">
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
