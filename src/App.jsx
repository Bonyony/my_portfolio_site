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
  ImageGallery,
} from "./components";

export const ThemeContext = createContext(true);

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <div className="overflowHandler max-w-[2200px]">
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div
            className={
              "-z-30 " + (theme ? "text-slate-900" : "text-white bg-[#0a022d]")
            }
          >
            {/* <Background /> */}
            <Navbar />
            <Suspense>
              <div className="max-w-[1536px] lg:items-center">
                <Hero />
                <Projects />
                <Skills />
                <ImageGallery />
                <About />
                <Contact />
              </div>
            </Suspense>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
