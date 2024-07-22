import React from "react";
import mggPic from "../assets/images/MGG_homepage.png";
import renderPic from "../assets/images/react-render-pic.png";
import chordPic from "../assets/images/chordfinderpic.png";

const Projects = () => {
  return (
    <>
      <div id="projects"></div>
      <div className="mx-4 sm:mx-12 lg:mx-24 mt-40 mb-24">
        <h1 className="font-black text-3xl sm:text-5xl ">SELECTED PROJECTS</h1>

        <div id="projectTotal1" className="font-mono justify-between mt-5">
          <div
            id="projectDetail"
            className="bg-blue-300 p-2 w-full  rounded-tr-xl rounded-bl-xl"
          >
            <h2 className="font-bold text-xl sm:text-3xl">3D RENDERS</h2>

            <p className="text-sm sm:text-base">
              This is a page I created to show off my renders made with the
              React-Three-Fiber and Drei libraries. It is intended to be a
              showcase of features and designs that can integrate into webpages.
              This website is not meant to be "finished", but rather continually
              updated and remade as I continue to progress with 3D modeling and
              development in my career.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2 sm:mx-2">
              <img
                src={renderPic}
                className="rounded-md"
                alt="A picture of my renders (a React logo)"
              />
              <div id="techStack">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-md font-semibold">
                  <li className="bg-blue-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    JavaScript
                  </li>
                  <li className="bg-blue-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    React
                  </li>
                  <li className="bg-blue-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    TailwindCSS
                  </li>
                  <li className="bg-blue-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    React-Three-Fiber
                  </li>
                  <li className="bg-blue-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    Drei Library
                  </li>
                </ul>
              </div>
              <div id="btns" className="flex justify-center gap-2 mb-1">
                <a
                  href=""
                  className="bg-white p-1 hover:bg-slate-600 hover:text-white transition-all duration-75"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Bonyony/my-react-renders"
                  target="_blank"
                  className="bg-white p-1 hover:bg-slate-600 hover:text-white transition-all duration-75"
                >
                  See the code
                  {/* Maybe have a GitHub logo here as an svg */}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="projectTotal2"
          className="flex flex-row font-mono justify-between mt-5"
        >
          <div
            id="projectDetail"
            className="flex-col bg-red-300 p-2 w-full  rounded-tr-xl rounded-bl-xl"
          >
            <h2 className="font-bold text-xl sm:text-3xl">CHORD FINDER</h2>
            <p className="text-sm sm:text-base">
              I made this application to help musicians find the appropriate
              chords, quickly and easily, for whatever key they are playing in.
              The user can choose from all 12 keys, major or minor scales, and
              the degree of the scale. The application returns the 3 notes that
              make the chord, in both text form and displayed on a musical staff
              (treble cleff only).
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2 sm:mx-2">
              <img
                src={chordPic}
                className="rounded-md"
                alt="A picture of my chord finder website"
              />
              <div id="techStack">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-md font-semibold">
                  <li className="bg-red-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    JavaScript
                  </li>
                  <li className="bg-red-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    HTML5
                  </li>
                  <li className="bg-red-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    CSS + Bootstrap
                  </li>
                  <li className="bg-red-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    VexFlow Library
                  </li>
                </ul>
              </div>
              <div id="btns" className="flex justify-center gap-2 mb-1">
                <a
                  href="https://github.com/Bonyony/MusicProject"
                  target="_blank"
                  className="bg-white p-1 hover:bg-slate-600 hover:text-white transition-all duration-75"
                >
                  Live Demo
                </a>
                <a
                  href=""
                  className="bg-white p-1 hover:bg-slate-600 hover:text-white transition-all duration-75"
                >
                  See the code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="projectTotal2"
          className="flex flex-row font-mono justify-between mt-5"
        >
          <div
            id="projectDetail"
            className="flex-col bg-amber-300 p-2 w-full rounded-tr-xl rounded-bl-xl"
          >
            <h2 className="font-bold text-xl sm:text-3xl">
              OUR APPS (Mellow Golem Games)
            </h2>
            <p className="text-sm sm:text-base">
              I work with the company Mellow Golem Games as a react developer
              and creative director. I help the owner (another software
              developer) with developing applications that assist with the play
              of table-top RPGs. I am usually tasked with building components,
              setting up our API handling or doing slight design changes. These
              are production apps, so I cannot share the code. Stop by our RPG
              Content section to see my writing as well.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2 sm:mx-2">
              <img
                src={mggPic}
                className="rounded-md "
                alt="A picture of my company's homepage"
              />
              <div id="techStack">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-md font-semibold">
                  <li className="bg-amber-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    TypeScript
                  </li>
                  <li className="bg-amber-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    React
                  </li>
                  <li className="bg-amber-100 p-2 text-center rounded-tr-xl rounded-bl-xl">
                    TailwindCSS + CSS
                  </li>
                </ul>
              </div>
              <div id="btns" className="flex justify-center gap-2 mb-1">
                <a
                  href="https://www.mellowgolem.com/"
                  target="_blank"
                  className="bg-white p-1 hover:bg-slate-600 hover:text-white transition-all duration-75"
                >
                  Company Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
