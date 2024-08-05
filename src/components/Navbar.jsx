import React, { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../App";
import myLogo from "../assets/images/lookingGlass.jpeg";

const Menu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ul className="flex flex-row items-center gap-14 p-2 font-mono ">
      <li>
        <a
          className={
            "p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-blue-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={
            " p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-red-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className={
            " p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-amber-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className={
            " p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-green-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className={
            " p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-pink-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

const SmallMenu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ul className="flex flex-col items-end gap-5 mt-5 font-mono  ">
      <li>
        <a
          className={
            "p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-blue-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={
            "p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-red-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className={
            "p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-amber-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className={
            "p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-green-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className={
            "p-1 transition-all duration-100 " +
            (theme
              ? "bg-white bg-opacity-80 hover:bg-pink-300"
              : "bg-[#0a022d] bg-opacity-50 hover:bg-emerald-500")
          }
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [navbar, setNavbar] = useState(false);

  return (
    <div
      className={
        `z-10 fixed top-0 w-full ${
          navbar && window.innerWidth < 768
            ? "bg-slate-200 bg-opacity-80"
            : "bg-transparent"
        } ` + (theme ? "" : "bg-slate-800 bg-opacity-80")
      }
    >
      <div className=" flex flex-row justify-between pt-5 px-5 font-semibold text-lg">
        <img
          src={myLogo}
          alt="Some of my own artwork"
          className={"max-w-14 max-h-14 " + (theme ? "" : "grayscale")}
        />
        <div className="md:hidden">
          <button
            className="p-2 rounded-md outline-none flex items-end"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <div className="flex flex-col items-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    "w-10 h-10  transition-all duration-100 " +
                    (theme
                      ? "bg-white hover:bg-red-300"
                      : "bg-[#0a022d] hover:bg-red-500")
                  }
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>

                <SmallMenu />
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  "w-10 h-10  bg-opacity-55  transition-all duration-100 " +
                  (theme
                    ? "bg-white hover:bg-sky-300"
                    : "bg-[#0a022d] hover:bg-emerald-500")
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:block">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
