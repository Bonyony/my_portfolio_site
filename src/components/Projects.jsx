import React, { useContext } from "react";

// import "../styles/psychCard.css";

import mggPic from "../assets/images/MGG_homepage.png";
import renderPic from "../assets/images/react-render-pic.png";
import chordPic from "../assets/images/chordfinderpic.png";
import hyraxChat from "../assets/images/Hyrax_Corp_Chat_pic.png";

import { ThemeContext } from "../App";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section id="projects" className="">
        <div className="mx-4 sm:mx-12 lg:mx-24 mt-40 mb-24">
          <h2 className="righteous-regular font-black text-3xl sm:text-5xl ">
            SELECTED PROJECTS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 font-mono">
            {/* raxchat */}
            <div
              className={
                "card w-auto h-full " + (theme ? "bg-white" : "bg-[#002451]")
              }
            >
              <figure>
                <img
                  src={hyraxChat}
                  alt="An example of my chat application"
                  className=""
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title righteous-regular">
                  Hyrax Corporation
                </h3>
                <div className="flex flex-row flex-wrap justify-start gap-1">
                  <div className="badge badge-outline rounded-full">React</div>
                  <div className="badge badge-outline rounded-full">
                    Node.js
                  </div>
                  <div className="badge badge-outline rounded-full">
                    Express.js
                  </div>
                  <div className="badge badge-outline rounded-full">
                    Socket.IO
                  </div>
                  <div className="badge badge-outline rounded-full">
                    MongoDB
                  </div>
                </div>
                <p>
                  A Full Stack chat application that features user
                  authentication and profiles with customization options. Users
                  can choose from 5 chatrooms and up to 20 users can be in the
                  same room at once! I built the UI with TailwindCSS and DaisyUI
                  for a sleek and clean look. Some extra touches are added with
                  React-three-fiber for fun additions. <br />
                  <br />
                  Live demo coming very soon!
                </p>

                <div className="flex flex-row lg:flex-row gap-2 lg:gap-1 justify-end">
                  <div className="tooltip" data-tip="Coming Soon">
                    <button className="btn btn-disabled mr-1">Live Demo</button>
                  </div>
                  <a
                    href="https://github.com/Bonyony/WY-fullstack/tree/master"
                    target="_blank"
                    className={"btn "}
                  >
                    Code Repository
                  </a>
                </div>
              </div>
            </div>
            {/* renders */}
            <div
              className={
                "card w-auto h-full " + (theme ? "bg-white " : "bg-[#002451]")
              }
            >
              <figure>
                <img
                  src={renderPic}
                  alt="An example of my react-three-fiber renders"
                />
              </figure>
              <div className="card-body ">
                <h3 className="card-title righteous-regular">
                  React 3D Renders
                </h3>
                <div className="flex flex-row flex-wrap justify-start gap-1">
                  <div className="badge badge-outline rounded-full">React</div>
                  <div className="badge badge-outline rounded-full">
                    React-Three-Fiber
                  </div>
                  <div className="badge badge-outline rounded-full">
                    TailwindCSS
                  </div>
                  <div className="badge badge-outline rounded-full">
                    Framer-Motion
                  </div>
                </div>
                <p>
                  This is a page I created to show off my renders made with the
                  React-Three-Fiber and Drei libraries. It is a showcase of
                  features and designs that can integrate into webpages. This
                  website is continually updated and remade as I continue to
                  progress with 3D modeling and development in my career.
                  Although it is mobile friendly, I highly reccomend using a
                  laptop or desktop to interact with this page!
                </p>
                <div className="flex flex-row lg:flex-row gap-2 lg:gap-1 justify-end">
                  <a
                    href="https://my-react-renders-pl6bh.ondigitalocean.app/"
                    target="_blank"
                    className="btn mr-1"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Bonyony/my-react-renders"
                    target="_blank"
                    className="btn"
                  >
                    Code Repository
                  </a>
                </div>
              </div>
            </div>
            {/* Chord */}
            <div
              className={
                "card  w-auto h-full " +
                (theme ? "bg-inherit " : "bg-[#002451]")
              }
            >
              <figure>
                <img
                  src={chordPic}
                  alt="An example of my Chord Finder webpage"
                />
              </figure>
              <div className="card-body ">
                <h3 className="card-title righteous-regular">Chord Finder</h3>
                <div className="flex flex-row flex-wrap justify-start gap-1">
                  <div className="badge badge-outline rounded-full">
                    JavaScript
                  </div>
                  <div className="badge badge-outline rounded-full">HTML5</div>
                  <div className="badge badge-outline rounded-full">CSS3</div>
                  <div className="badge badge-outline rounded-full">
                    VexFlow.js
                  </div>
                </div>
                <p>
                  I made this application to help musicians find the appropriate
                  chords, quickly and easily, for whatever key they are playing
                  in. The user can choose from all 12 keys, major or minor
                  scales, and the degree of the scale. The application returns
                  the 3 notes that make the chord, in both text form and
                  displayed on a musical staff (treble cleff only).
                </p>
                <div className="flex flex-row lg:flex-row gap-2 lg:gap-1 justify-end">
                  <a
                    href="https://chordgenerator-r2pxg.ondigitalocean.app/"
                    target="_blank"
                    className="btn mr-1"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Bonyony/MusicProject"
                    target="_blank"
                    className="btn"
                  >
                    Code Repository
                  </a>
                </div>
              </div>
            </div>
            {/* MGG */}
            <div
              className={
                "card  w-auto h-full " +
                (theme ? "bg-inherit " : "bg-[#002451]")
              }
            >
              <figure>
                <img src={mggPic} alt="The homepage of Mellow Golem Games" />
              </figure>
              <div className="card-body ">
                <h3 className="card-title righteous-regular">
                  Mellow Golem Games
                </h3>
                <div className="flex flex-row flex-wrap justify-start gap-1">
                  <div className="badge badge-outline rounded-full">React</div>
                  <div className="badge badge-outline rounded-full">
                    Node.js
                  </div>
                  <div className="badge badge-outline rounded-full">
                    TailwindCSS
                  </div>
                  <div className="badge badge-outline rounded-full">
                    DrivethruRPG
                  </div>
                </div>
                <p>
                  I work with the company Mellow Golem Games as a creative
                  director and help with developing some of our react
                  applications. I help the owner (another software developer)
                  with developing applications that assist with the play of
                  table-top RPGs. I am usually tasked with building components,
                  setting up our API handling or doing slight design changes.
                  These are production apps, so I cannot share the code. Stop by
                  our RPG Content section to see my writing as well.
                </p>
                <div className="flex flex-row lg:flex-row gap-2 lg:gap-1 justify-end">
                  <a
                    href="https://www.mellowgolem.com/"
                    target="_blank"
                    className="btn"
                  >
                    Company Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
