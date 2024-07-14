import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Skills, Hero, Footer, Projects } from "./components";

function App() {
  return (
    <>
      <div className="bg-blue-900 text-slate-300">
        <Navbar />
        <Suspense>
          <Hero />
          <Projects />
          <Skills />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
