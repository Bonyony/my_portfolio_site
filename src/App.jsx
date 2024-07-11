import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Skills, Hero, Footer, Projects } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Suspense>
        <Hero />
        <Projects />
        <Skills />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
