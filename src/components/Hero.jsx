import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { motion } from "framer-motion";

import Switch from "./Switch";
import hyrax from "../assets/images/HyraxCake-removebg.png";
import "../styles/hero.css";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section id="home" className="  ">
        <img
          className="-z-10 absolute  top-[280px] sm:top-[180px] md:top-[95px] lg:top-[20px] left-[140px] sm:left-[250px] md:left-[300px] lg:left-[400px] xl:left-[500px] transition-all duration-300"
          src={hyrax}
          alt="A hyrax on a cake"
        />

        <div className="mx-4 sm:mx-12 lg:mx-24 pt-56 mb-24 h-[460px] z-30">
          <motion.h1
            drag
            dragConstraints={{ left: 0, right: 0, top: 10, bottom: 10 }}
            dragElastic={0.4}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 9 }}
            className="righteous-regular font-black text-4xl sm:text-6xl sm:w-1/2 cursor-grab"
          >
            Frank Francione
          </motion.h1>
          <div className="font-bold font-mono text-sm sm:text-base mt-5 ">
            <p>Developer.</p>

            <p>Design focused.</p>
            <p>Musician, Writer, Artist, Animal Lover, etc.</p>
          </div>
          <div className="font-bold font-mono text-sm sm:text-base my-5">
            <Switch />
          </div>
          <div className="flex flex-row gap-5">
            <a
              className=" inline-block w-[30px] h-[30px]"
              href="https://github.com/Bonyony"
              target="_blank"
            >
              <span>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 -0.5 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>Github-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-700.000000, -560.000000)"
                      fill={theme ? "#000000" : "#FFFFFF"}
                    >
                      <path
                        d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
                        id="Github"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
            <a
              className=" inline-block w-[30px] h-[30px]"
              href="https://www.linkedin.com/in/ffrancione/"
              target="_blank"
            >
              <span>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 -2 44 44"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>LinkedIn-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-702.000000, -265.000000)"
                      fill={theme ? "#007EBB" : "#FFFFFF"}
                    >
                      <path
                        d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                        id="LinkedIn"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
