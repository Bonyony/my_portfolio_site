import React from "react";

const Projects = () => {
  return (
    <div className="mx-24 mt-40 mb-24">
      <h1 className="font-black text-5xl ">SELECTED PROJECTS</h1>

      <div
        id="projectTotal1"
        className="flex flex-row font-mono justify-between mt-5"
      >
        <h2 className="font-bold">TITLE</h2>
        <div
          id="projectDetail"
          className="flex-col bg-blue-300 p-2 max-w-[500px]"
        >
          <h2>Project Card 1</h2>
          <p>
            Details about my adventures and such. I coded this all with assembly
            and then refactored it with LISP
          </p>
          <p>There can even be an image here</p>
          <div id="techStack">
            <ul className="flex flex-row justify-start gap-2 font-semibold">
              <li>JavaScript</li>
              <li>React</li>
              <li>TailwindCSS</li>
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

      <div
        id="projectTotal2"
        className="flex flex-row font-mono justify-between mt-5"
      >
        <h2 className="font-bold">TITLE Numba 2</h2>
        <div
          id="projectDetail"
          className="flex-col bg-red-300 p-2 max-w-[500px]"
        >
          <h2>Project Card 2</h2>
          <p>
            Details about my adventures and such. What else can be said within
            these pixels
          </p>
          <p>There can even be an image here</p>

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

      <div
        id="projectTotal2"
        className="flex flex-row font-mono justify-between mt-5"
      >
        <h2 className="font-bold">TITLE NUM 3</h2>
        <div
          id="projectDetail"
          className="flex-col bg-amber-300 p-2 max-w-[500px]"
        >
          <h2>Project Card 3</h2>
          <p>
            Details about my adventures and such. Just make sure there is enough
            text to keep the container large!
          </p>
          <p>There can even be an image here</p>
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
  );
};

export default Projects;
