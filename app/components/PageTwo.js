import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaSass } from "react-icons/fa6";
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiVisualstudiocode, SiIntellijidea, SiMysql } from "react-icons/si";

const PageTwo = () => {
  return (
    <div>
      <section id="about" className="py-24 overflow-clip flex flex-col">
        <div className="sm:w-4/6 xl:w-1/2 sm:mx-auto">
          <div className="flex justify-start px-[4%]">
            <div className="redHatDisp spaceED textBig text-xs sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
              ABOUT ME
            </div>
          </div>
          <div className="flex justify-start px-[4%]">
            <div className="redHatDisp textBig text-xl sm:text-2xl lg:text-3xl xl:text-4xl drop-shadow-md">
              Hi, I'm Craig! 👋
              <br />
              Junior full-stack dev with a passion for creating elegant
              websites and apps.
            </div>
          </div>
          <br />
          <div className="flex justify-start px-[4%]">
            <div className="redHatDisp textBig text-md sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
              My Stack :
              <br />
              <div className="flex flex-wrap gap-2">
                <FaHtml5 size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <FaCss3Alt size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <FaJs size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <FaNodeJs size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <FaReact size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <SiNextdotjs size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <SiMongodb size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <SiTailwindcss size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <SiVisualstudiocode size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
              </div>
            </div>
          </div>
          <br />
          <div className="flex justify-start px-[4%]">
            <div className="redHatDisp textBig text-md sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
              Learning :
              <br />
              <div className="flex flex-wrap gap-2">
                <FaJava size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <SiIntellijidea size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <SiMysql size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                <FaSass size={32} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageTwo;
