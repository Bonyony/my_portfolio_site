import React from "react";

const Menu = () => {
  return (
    <ul className="flex flex-row items-center gap-20 p-2 align-middle  ">
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Skills</a>
      </li>
      <li>
        <a href="">Projects</a>
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
    <div className=" flex flex-row justify-center p-5   text-lg">
      <Menu />
    </div>
  );
};

export default Navbar;
