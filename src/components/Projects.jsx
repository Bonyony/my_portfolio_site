import React from "react";
import mggPic from "../assets/images/MGG_homepage.png";
import renderPic from "../assets/images/react-render-pic.png";
import chordPic from "../assets/images/chordfinderpic.png";

const Projects = () => {
  return (
    <div className="mx-24 mt-40 mb-24  ">
      <h1 className="font-black text-5xl ">SELECTED PROJECTS</h1>

      <div id="projectTotal1" className="font-mono justify-between mt-5">
        <div
          id="projectDetail"
          className="flex-col bg-blue-300 p-2 w-full  rounded-tr-xl rounded-bl-xl"
        >
          <h2 className="font-bold text-3xl">3D RENDERS</h2>

          <p>
            This is a page I created to show off my renders made with the
            React-Three-Fiber and Drei libraries. It is intended to be a
            showcase of features and designs that can integrate into webpages.
            This website is not intended to be "finished", but rather
            continually updated and remade as I continue to progress with 3d
            modeling and development in my career.
          </p>
          <div className="grid grid-cols-2 gap-1 mt-2">
            <img
              src={renderPic}
              className="rounded-md"
              alt="A picture of my renders (a React logo)"
            />
            <div id="techStack">
              <ul className="grid grid-cols-2 gap-2 font-semibold">
                <li>JavaScript</li>
                <li>React</li>
                <li>TailwindCSS</li>
                <li>React-Three-Fiber</li>
              </ul>
            </div>
            <div id="btns" className="flex justify-center gap-2 mt-1">
              <a
                href=""
                className="bg-white p-1 hover:bg-slate-600 hover:text-white transition-all duration-75"
              >
                Live Demo
              </a>
              <a
                href=""
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
          <h2 className="font-bold text-3xl">CHORD FINDER</h2>
          <p>
            I made this application to help musicians find the appropriate
            chords, quickly and easily, for whatever key they are playing in.
            The user can choose from all 12 keys, major or minor scales, and the
            degree of the scale. The application returns the 3 notes that make
            the chord, in both text form and displayed on a musical staff
            (treble cleff only).
          </p>
          <div className="grid grid-cols-2 gap-1 mt-2">
            <img
              src={chordPic}
              className="rounded-md"
              alt="A picture of my chord finder website"
            />
            <div id="techStack">
              <ul className="grid grid-cols-2 gap-2 font-semibold">
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS + Bootstrap</li>
                <li>VexFlow Library</li>
              </ul>
            </div>
            <div id="btns" className="flex justify-center gap-2 mt-1">
              <a
                href=""
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
          <h2 className="font-bold text-3xl">OUR APPS</h2>
          <p>
            These are the applications and projects that I have worked on with
            my company Mellow Golem Games. I help to develop applications that
            assist with the play of table-top RPGs.
          </p>
          <div className="grid grid-cols-2 gap-1 mt-2">
            <img
              src={mggPic}
              className="rounded-md"
              alt="A picture of my company's homepage"
            />
            <div id="techStack">
              <ul className="grid grid-cols-2 gap-2 font-semibold">
                <li>TypeScript</li>
                <li>React</li>
                <li>TailwindCSS + CSS</li>
              </ul>
            </div>
            <div id="btns" className="flex justify-center gap-2 mt-1">
              <a
                href=""
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
    </div>
  );
};

export default Projects;
