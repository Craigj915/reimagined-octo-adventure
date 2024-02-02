import React from "react";

const PageFour = () => {
  return (
    <div>
      <section
        id="contact"
        className="h-screen bottomBg overflow-clip flex flex-col"
      >
        <div className="m-auto sm:w-4/6 xl:w-1/2 sm:mx-auto">
          <div className="flex justify-start px-[4%]">
            <div className="redHatDisp spaceED textBig text-xs sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
              CONTACT
            </div>
          </div>
          <div className="flex justify-start px-[4%]">
            <a
              href="mailto:craigj915@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="redHatDisp font-bold textBig text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-md hover:scale-110 hover:text-blue-300"
            >
              EMAIL
            </a>
          </div>
          <div className="flex justify-start px-[4%]">
            <a
              href="https://www.linkedin.com/in/craigj915/"
              target="_blank"
              rel="noopener noreferrer"
              className="redHatDisp textBig text-blue-300 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-md hover:scale-110 hover:text-blue-300"
            >
              LINKEDIN
            </a>
          </div>
          <div className="flex justify-start px-[4%]">
            <a
              href="https://wa.me/447549521803"
              target="_blank"
              rel="noopener noreferrer"
              className="redHatDisp textBig text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-md hover:scale-110 hover:text-blue-300"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageFour;
