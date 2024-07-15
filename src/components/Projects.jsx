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
        <div id="projectDetail" className="flex-col bg-blue-300 p-2">
          <h2>Project Card 1</h2>
          <p>Details about my adventures and such</p>
          <p>There can even be an image here</p>
        </div>
      </div>

      <div
        id="projectTotal2"
        className="flex flex-row font-mono justify-between mt-5"
      >
        <h2 className="font-bold">TITLE Numba 2</h2>
        <div id="projectDetail" className="flex-col bg-red-300 p-2">
          <h2>Project Card 2</h2>
          <p>Details about my adventures and such</p>
          <p>There can even be an image here</p>
        </div>
      </div>

      <div
        id="projectTotal2"
        className="flex flex-row font-mono justify-between mt-5"
      >
        <h2 className="font-bold">TITLE NUM 3</h2>
        <div id="projectDetail" className="flex-col bg-amber-300 p-2">
          <h2>Project Card 3</h2>
          <p>Details about my adventures and such</p>
          <p>There can even be an image here</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
