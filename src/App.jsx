import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Navbar,
  Skills,
  Hero,
  Footer,
  Projects,
  About,
  Contact,
} from "./components";

function App() {
  return (
    <>
      <div className=" text-slate-900">
        <Navbar />
        <Suspense>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
