import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="mx-4 sm:mx-12 lg:mx-24 mt-40 mb-24">
          <h2 className="righteous-regular font-black text-3xl sm:text-5xl ">
            CONTACT ME
          </h2>
          {/* Place socials here GitHub, LinkedIn, Instagram */}
          <Form />
        </div>
      </section>
    </>
  );
};

export default Contact;
