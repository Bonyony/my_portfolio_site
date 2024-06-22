import { useState } from "react";
import "./App.css";

import { Navbar, Skills, Hero, Footer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
