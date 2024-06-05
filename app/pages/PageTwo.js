import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaLinux,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiVisualstudiocode,
  SiIntellijidea,
  SiMysql,
  SiExpress,
  SiJson,
  SiAzuredevops,
  SiJira,
} from "react-icons/si";

const MernList = () => {
  return (
    <ul className="flex flex-wrap justify-center p-4 items-center space-x-4 gap-4 textBig">
      <MernItem icon={<SiMongodb size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-blue-300"/>} text="MongoDB" />
      <MernItem icon={<SiExpress size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-blue-300"/>} text="Express" />
      <MernItem icon={<FaReact size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-blue-300"/>} text="React" />
      <MernItem icon={<FaNodeJs size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-blue-300"/>} text="Node.js" />
  </ul>
  );
};

const MernItem = ({ icon, text }) => {
  return (
    <li className="flex flex-col items-center">
      {icon}
      <span>{text}</span>
    </li>
  );
};

const IconList = () => {
  return (
    <ul className="flex flex-wrap justify-center p-4 items-center space-x-4 gap-4 textBig">
      <IconItem icon={<SiNextdotjs size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="Next.js" />
      <IconItem icon={<FaGitAlt size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="Git" />
      <IconItem icon={<FaGithub size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="Github" />      
      <IconItem icon={<SiTailwindcss size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="TailwindCSS" />
      <IconItem icon={<FaJs size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="JavaScript" />
      <IconItem icon={<SiJson size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="JSON" />
      <IconItem icon={<FaHtml5 size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="HTML" />
      <IconItem icon={<FaCss3Alt size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="CSS" />
      <IconItem icon={<SiVisualstudiocode size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="VS Code" />
      <IconItem icon={<FaLinux size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="Linux" />
      <IconItem icon={<FaSass size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="Sass" />
      <IconItem icon={<SiAzuredevops size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="AzureDevOps" />
      <IconItem icon={<SiJira  size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-green-300"/>} text="Jira" />
    </ul>
  );
};

const IconItem = ({ icon, text }) => {
  return (
    <li className="flex flex-col items-center">
      {icon}
      <span>{text}</span>
    </li>
  );
};
const LearningList = () => {
  return (
    <ul className="flex flex-wrap justify-center p-4 items-center space-x-4 gap-4 textBig">
      <LearningItem icon={<FaJava size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-red-500"/>} text="Java" />
      <LearningItem icon={<SiIntellijidea size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-red-500"/>} text="IntelliJ IDEA" />
      <LearningItem icon={<SiMysql size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-red-500"/>} text="MySQL" />
      <LearningItem icon={<FaWordpress size={32} className="transition ease-in-out delay-150 hover:scale-125 duration-300 hover:text-red-500"/>} text="Wordpress" />
    </ul>
  );
};

const LearningItem = ({ icon, text }) => {
  return (
    <li className="flex flex-col items-center">
      {icon}
      <span>{text}</span>
    </li>
  );
};

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
              A full-stack dev with a passion for creating elegant websites
              and apps; using MERN stack, Next.js and TailwindCSS.
              <br />I have also recently started learning Java.
            </div>
          </div>

          <div className="flex justify-start px-[4%]">
            <div className="w-full">
              <div className="pt-6 redHatDisp spaceED textBig text-md sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
                MY STACK
              </div>
              <div className="pt-4 text-center redHatDisp font-bold text-blue-300 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-md">
                MERN
              </div>
              <div>
                <MernList />
              </div>
            </div>
          </div>
          <div className="flex justify-start px-[4%]">
            <div className="w-full">
              <div className="text-center pt-6 redHatDisp spaceED textBig text-md sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
                I ALSO USE THIS TECH
              </div>
                <div>
                  <IconList />
                </div>
              <div className="text-center pt-6 redHatDisp spaceED textBig text-md sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
                I AM LEARNING
              </div>
                <div>
                  <LearningList />
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageTwo;
