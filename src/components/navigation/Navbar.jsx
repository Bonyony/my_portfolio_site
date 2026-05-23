import React, { useContext } from "react";
import { useState } from "react";

import { motion } from "framer-motion";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="f-nav">
      <ul className="f-nav__links">
        <li className="f-nav__item">
          <a href="">1 link</a>
        </li>
        <li className="f-nav__item">
          <a href="">2 link</a>
        </li>
        <li className="f-nav__item">
          <a href="">3 link</a>
        </li>
        <li className="f-nav__item">
          <a href="">4 link</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
