import React, { useState } from "react";
import "../styles/imageGallery.css";
import image1 from "../assets/images/CookieOnTop.jpg";
import image2 from "../assets/images/Gargoyle.jpeg";
import image3 from "../assets/images/HyAlbumCover.jpg";
import image4 from "../assets/images/PatternsAndLayers.jpg";
import image5 from "../assets/images/lookingGlass.jpeg";
import image6 from "../assets/images/DubbleLook.jpeg";
import image7 from "../assets/images/TVparty.jpeg";
import image8 from "../assets/images/HorseRider.jpeg";
import image9 from "../assets/images/PsychRide.jpeg";

const handleClick = () => {};

const ImageBox = (image) => {
  return (
    <div className=" h-screen w-screen bg-slate-800 opacity-20">
      <img className="flex justify-center align-middle" src={image} alt="" />
    </div>
  );
};

const ImageGallery = () => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  return (
    <>
      <div className="gallery px-4 sm:px-12 lg:px-24">
        <img
          className="cursor-pointer"
          src={image1}
          alt="Cookie on Top"
          onClick={handleClick}
        />

        <img className="cursor-pointer" src={image2} alt="Gargoyle Walk" />
        <img
          className="cursor-pointer"
          src={image3}
          alt="Hyrax Heaven on the Candy Mountain"
        />
        <img
          className="cursor-pointer"
          src={image4}
          alt="Patterns and Layers"
        />
        <img className="cursor-pointer" src={image5} alt="Looking Glass" />

        <img className="cursor-pointer" src={image6} alt="Double Look" />
        <img className="cursor-pointer" src={image7} alt="TV Party" />

        <img className="cursor-pointer" src={image8} alt="Desperado" />
        <img className="cursor-pointer" src={image9} alt="Psych Ride" />
      </div>
      <ImageBox />
    </>
  );
};

export default ImageGallery;
