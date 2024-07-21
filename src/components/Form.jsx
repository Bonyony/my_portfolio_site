import { useState } from "react";
import React from "react";
import gargoylePic from "../assets/images/Gargoyle.jpeg";

const Form = () => {
  const [result, setResult] = React.useState("");

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
    <div className="font-mono mt-5 p-2  bg-slate-300 rounded-tr-xl rounded-bl-xl">
      <form onSubmit={onSubmit} className="flex flex-col w-full">
        <label htmlFor="name">YOUR NAME: </label>
        <input type="text" name="name" placeholder="Jimbo Jones" required />
        <label htmlFor="email">YOUR EMAIL: </label>
        <input
          type="email"
          name="email"
          placeholder="possumluvr@gmail.com"
          required
        />
        <label htmlFor="message">YOUR MESSAGE FOR ME: </label>
        <textarea
          rows="4"
          name="message"
          placeholder="This is the best website ever!!!1!"
          required
        ></textarea>

        <button
          className="bg-white hover:bg-slate-600 hover:text-white transition-all duration-75 mt-2 rounded-lg"
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
