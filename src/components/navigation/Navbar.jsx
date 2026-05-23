import React, { useContext } from "react";
import { useState } from "react";

import { motion } from "framer-motion";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="f-nav">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </nav>
  );
};

export default Navbar;
