import { useState } from "react";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Form = () => {
  const [result, setResult] = React.useState("");
  const { theme } = useContext(ThemeContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "45721630-63a0-4a02-9e45-a6880fc1d4b4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className={
        "font-mono text-sm sm:text-base mt-5 p-2   rounded-tr-xl rounded-bl-xl " +
        (theme ? "bg-neutral-300" : "bg-[#404F7D]")
      }
    >
      <form onSubmit={onSubmit} className="flex flex-col w-full">
        <label htmlFor="name">YOUR NAME: </label>
        <input type="text" name="name" placeholder="Jimbo Jones" required />
        <label className="mt-3" htmlFor="email">
          YOUR EMAIL:{" "}
        </label>
        <input
          type="email"
          name="email"
          placeholder="possumluvr@gmail.com"
          required
        />
        <label className="mt-3" htmlFor="message">
          YOUR MESSAGE FOR ME:{" "}
        </label>
        <textarea
          rows="4"
          name="message"
          placeholder="This is the best website ever!!!1!"
          required
        ></textarea>

        <button
          className={
            " transition-all duration-75 mt-4 rounded-lg " +
            (theme
              ? "bg-white hover:bg-slate-600 hover:text-white"
              : "bg-white text-black hover:bg-emerald-500")
          }
          type="submit"
        >
          Submit!
        </button>
        <span>{result}</span>
      </form>
    </div>
  );
};

export default Form;
