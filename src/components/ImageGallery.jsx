import React, { useState, useRef } from "react";
import "../styles/imageGallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import image1 from "../assets/images/CookieOnTop.jpg";
import image2 from "../assets/images/Gargoyle.jpeg";
import image3 from "../assets/images/HyAlbumCover.jpg";
import image4 from "../assets/images/PatternsAndLayers.jpg";
import image5 from "../assets/images/lookingGlass.jpeg";
import image6 from "../assets/images/DubbleLook.jpeg";
import image7 from "../assets/images/TVparty.jpeg";
import image8 from "../assets/images/HorseRider.jpeg";
import image9 from "../assets/images/PsychRide.jpeg";
import { Captions } from "yet-another-react-lightbox/plugins";

const ImageGallery = () => {
  const captionsRef = useRef(null);

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="px-4 sm:px-12 lg:px-24">
        <h1 className="font-black text-3xl sm:text-5xl mb-5">SOME ART</h1>

        <div className="gallery ">
          <img
            className="cursor-pointer"
            src={image1}
            alt="Cookie on Top"
            onClick={() => setOpen(true)}
          />

          <img
            className="cursor-pointer"
            src={image2}
            alt="Gargoyle Walk"
            onClick={() => setOpen(true)}
          />
          <img
            className="cursor-pointer"
            src={image3}
            alt="Hyrax Heaven on the Candy Mountain"
            onClick={() => setOpen(true)}
          />
          <img
            className="cursor-pointer"
            src={image4}
            alt="Patterns and Layers"
            onClick={() => setOpen(true)}
          />
          <img
            className="cursor-pointer"
            src={image5}
            alt="Looking Glass"
            onClick={() => setOpen(true)}
          />

          <img
            className="cursor-pointer "
            src={image6}
            alt="Double Look"
            onClick={() => setOpen(true)}
          />
          <img
            className="cursor-pointer"
            src={image7}
            alt="TV Party"
            onClick={() => setOpen(true)}
          />

          <img
            className="cursor-pointer"
            src={image8}
            alt="Desperado"
            onClick={() => setOpen(true)}
          />
          <img
            className="cursor-pointer"
            src={image9}
            alt="Psych Ride"
            onClick={() => setOpen(true)}
          />
        </div>
        <Lightbox
          plugins={[Captions]}
          open={open}
          close={() => setOpen(false)}
          captions={{ ref: captionsRef, showToggle: true }}
          controller={{ closeOnBackdropClick: true }}
          on={{
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
          }}
          slides={[
            {
              src: image1,
              alt: "image 1",
              width: 2000,
              height: 2000,
              title: "Chocolate Cookie",
              description: "The cookie always comes out on top.",
              srcSet: [{ src: { image1 }, width: 650, height: 650 }],
            },
            {
              src: image2,
              alt: "image 2",
              width: 2000,
              height: 2000,
              title: "Gargoyle Melting",
              description: "Saturated with color and love.",
              srcSet: [{ src: { image2 }, width: 650, height: 650 }],
            },
            {
              src: image3,
              alt: "image 3",
              width: 2000,
              height: 2000,
              title: "Hyrax Heaven on the Candy Mountain",
              description: "Where I want to live.",
              srcSet: [{ src: { image3 }, width: 650, height: 650 }],
            },
            {
              src: image4,
              alt: "image 4",
              width: 2000,
              height: 2000,
              title: "Patterns and Layers",
              description: "Masking the illusion.",
              srcSet: [{ src: { image4 }, width: 650, height: 650 }],
            },
            {
              src: image5,
              alt: "image 5",
              width: 2000,
              height: 2000,
              title: "Looking Glass",
              description: "Radiating outward, looking into the glass.",
              srcSet: [{ src: { image5 }, width: 650, height: 650 }],
            },
            {
              src: image6,
              alt: "image 6",
              width: 2000,
              height: 2000,
              title: "Double Look",
              description: "Which way now?",
              srcSet: [{ src: { image6 }, width: 650, height: 650 }],
            },
            {
              src: image7,
              alt: "image 7",
              width: 2000,
              height: 2000,
              title: "TV Party",
              description: "Always watching.",
              srcSet: [{ src: { image7 }, width: 650, height: 650 }],
            },
            {
              src: image8,
              alt: "image 8",
              width: 2000,
              height: 2000,
              title: "Horsey",
              description: "Always looking away from the camera.",
              srcSet: [{ src: { image8 }, width: 650, height: 650 }],
            },
            {
              src: image9,
              alt: "image 9",
              width: 2000,
              height: 2000,
              title: "Psych Ride",
              description: "Peppermint swirl and a good look to boot!",
              srcSet: [{ src: { image9 }, width: 650, height: 650 }],
            },
          ]}
        />
      </div>
    </>
  );
};

export default ImageGallery;
