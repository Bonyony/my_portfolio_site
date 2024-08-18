import React from "react";
import "../styles/imageGallery.css";

const ImageGallery = () => {
  return (
    <div className="gallery px-4 sm:px-12 lg:px-24">
      <img src="src/assets/images/PsychRide.jpeg" alt="One of my artworks" />
      <img src="src/assets/images/Gargoyle.jpeg" alt="One of my artworks" />
      <img src="src/assets/images/HyAlbumCover.jpg" alt="One of my artworks" />
      <img
        src="src/assets/images/PatternsAndLayers.jpg"
        alt="One of my artworks"
      />
      <img src="src/assets/images/lookingGlass.jpeg" alt="One of my artworks" />

      <img src="src/assets/images/DubbleLook.jpeg" alt="One of my artworks" />
      <img src="src/assets/images/CoastalBliss.jpg" alt="One of my artworks" />
      <img src="src/assets/images/TVparty.jpeg" alt="One of my artworks" />
      <img src="src/assets/images/HorseRider.jpeg" alt="One of my artworks" />
    </div>
  );
};

export default ImageGallery;
