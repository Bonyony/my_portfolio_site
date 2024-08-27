import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div id="contact"></div>

      <div className="mx-4 sm:mx-12 lg:mx-24 mt-40 mb-24  ">
        <h1 className="righteous-regular font-black text-3xl sm:text-5xl ">
          CONTACT ME
        </h1>
        <Form />
      </div>
    </>
  );
};

export default Contact;
