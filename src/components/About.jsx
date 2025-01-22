import React, { useContext } from "react";
import { ThemeContext } from "../App";
import poolView from "../assets/images/PoolView2-removebg-preview.png";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="about"></div>
      <section className="mx-4 sm:mx-12 lg:mx-24 mt-40 mb-24 ">
        <h2 className="righteous-regular font-black text-3xl sm:text-5xl ">
          ABOUT
        </h2>
        <img
          className="-z-10 -rotate-45 lg:rotate-0 absolute bottom-[830px] sm:bottom-[720px] left-[60px] sm:left-[150px] md:left-[350px] xl:left-1/2 xl:rotate-45 transition-all duration-300"
          src={poolView}
          alt="A view of the pool"
        />
        <div
          className={
            "font-mono text-sm sm:text-base mt-5 p-4 md:max-w-[800px] mx-auto w-full rounded-tr-xl rounded-bl-xl " +
            (theme
              ? "bg-white bg-opacity-75 border-black  border-2"
              : "bg-[#002451]")
          }
        >
          <p className="text-left">
            I'm always looking for new opportunities regarding tech and design
            work. Want to try something different? Me too.
            <br />
            <br />
            My favorite animals are: Hyraxes, Ocelots, Opossums, Manuls, Gila
            Monsters, Double Crested Cormorants, Nighthawks, Cedar Waxwings, the
            list goes on. If you want guitar lessons or personal training,
            contact me below. If not, contact me anyway.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
