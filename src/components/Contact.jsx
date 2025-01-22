import React, { useContext } from "react";
import Form from "./Form";
import { ThemeContext } from "../App";

import goatRider from "../assets/images/GoatRider.png";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section id="contact">
        <img
          className="-z-10 absolute bottom-[300px] sm:bottom-[240px] left-[-120px] md:left-[20%] transition-all duration-300"
          src={goatRider}
          alt="A woman on a goat"
        />
        <div className="mx-4 sm:mx-12 lg:mx-24 mt-40 mb-24">
          <h2
            className={
              "righteous-regular font-black text-3xl sm:text-5xl inline-block " +
              (theme ? "bg-white bg-opacity-30 pr-2 rounded-lg" : "")
            }
          >
            CONTACT ME
          </h2>

          <Form />
        </div>
      </section>
    </>
  );
};

export default Contact;
