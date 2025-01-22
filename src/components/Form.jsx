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
        "font-mono text-sm sm:text-base mt-5 py-2 px-4 md:max-w-[800px] mx-auto w-full flex flex-row justify-center rounded-lg " +
        (theme
          ? "bg-white bg-opacity-75 border-2 border-black border-opacity-75"
          : "bg-[#404F7D]")
      }
    >
      <form onSubmit={onSubmit} className="flex flex-col w-full ">
        <label htmlFor="name">YOUR NAME: </label>
        <input
          className={
            "p-1  rounded-md " +
            (theme ? "border-2 border-slate-800" : "border-none")
          }
          type="text"
          name="name"
          placeholder="Jimbo Jones"
          required
        />
        <label className="mt-3" htmlFor="email">
          YOUR EMAIL:{" "}
        </label>
        <input
          className={
            "p-1  rounded-md " +
            (theme ? "border-2 border-slate-800" : "border-none")
          }
          type="email"
          name="email"
          placeholder="possumluvr@gmail.com"
          required
        />
        <label className="mt-3" htmlFor="message">
          YOUR MESSAGE FOR ME:{" "}
        </label>
        <textarea
          className={
            "p-1  rounded-md " +
            (theme ? "border-2 border-slate-800" : "border-none")
          }
          rows="4"
          name="message"
          placeholder="This is the best website ever!!!1!"
          required
        ></textarea>

        <button
          className={
            "mt-4 btn rounded-md " +
            (theme
              ? "bg-white btn-ghost hover:bg-gray-100"
              : "bg-white text-black hover:bg-emerald-500 border-none")
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
