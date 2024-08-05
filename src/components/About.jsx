import React, { useContext } from "react";
import { ThemeContext } from "../App";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="about"></div>
      <div className="mx-4 sm:mx-12 lg:mx-24 mt-40 mb-24">
        <h1 className="font-black text-3xl sm:text-5xl ">ABOUT</h1>
        <div
          className={
            "font-mono text-sm sm:text-base mt-5 p-2  rounded-tr-xl rounded-bl-xl " +
            (theme ? "bg-indigo-200" : "bg-[#002451]")
          }
        >
          <p>
            My name is <strong>Frank Francione</strong>. <br /> I love playing
            music (guitar, bass, drums, singing, piano and maybe some harmonica
            too!). My favorite artists are{" "}
            <strong className={theme ? "text-purple-700" : "text-purple-300"}>
              Prince
            </strong>{" "}
            and <strong>The Beatles</strong>. <br />I am a creative writer!
            Songs + poetry (and RPG supplements at{" "}
            <strong>
              <a
                href="https://www.mellowgolem.com/"
                target="_blank"
                className={
                  "underline  " +
                  (theme ? "hover:text-slate-500" : "hover:text-slate-300")
                }
              >
                Mellow Golem Games
              </a>
            </strong>
            ). <br /> I am an artist, mainly working with collage/mixed media or
            painting. 3D rendering is becoming a new favorite. <br />I adore
            animals and have volunteered with a wildlife rehab for years now. My
            favorite animals are Ocelots and the humble Hyrax. <br />
            And yes, I love to code :)
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
