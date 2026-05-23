import "./App.css";
import React, { Suspense, createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Hero, Footer } from "./components";

// main Sass file
import "./scss/main.scss";

function App() {
  return (
    <>
      <Header />
      <main className="f-main">
        <Suspense>
          <Hero />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
