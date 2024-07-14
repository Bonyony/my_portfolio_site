import React from "react";

const Hero = () => {
  return (
    <div className="  bg-gray-900">
      <h1 className="font-black text-8xl text-center">FRANK FRANCIONE</h1>
      <div className="">
        <img
          src="./src/assets/images/lookingGlass.jpeg"
          alt="Looking Glass Artwork"
          className="max-w-[600px] mx-auto"
        />
      </div>
      <p>
        Something about me and how good I am at doing computer things, like
        making the projects and helping out.
      </p>
    </div>
  );
};

export default Hero;
