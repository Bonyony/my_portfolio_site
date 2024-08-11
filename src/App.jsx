import "./App.css";
import React, { Suspense, createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Navbar,
  Skills,
  Hero,
  Footer,
  Projects,
  About,
  Contact,
  Background,
} from "./components";

export const ThemeContext = createContext(true);

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={
            "-z-30 " + (theme ? "text-slate-900" : "text-white bg-[#0a022d]")
          }
        >
          {/* <Background /> */}
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
      </ThemeContext.Provider>
    </>
  );
}

export default App;
