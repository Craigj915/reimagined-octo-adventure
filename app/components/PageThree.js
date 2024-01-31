import React from "react";

const PageThree = () => {
  return (
    <div>
      <section id="work" className="py-24 overflow-clip flex flex-col">
        <div className="py-4 text-right sm:w-4/6 xl:w-1/2 sm:mx-auto">
          <div className="flex justify-end px-[4%]">
            <div className="redHatDisp spaceED textBig text-xs sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
              MY WORK
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-left">
            <div>
                <img src="1.png"/>
            </div>
            <div>
                <img src="TDASAC.png"/>
            </div>
            <div>
                <img src="4.png"/>
            </div>
            <div>
                <img src="Movies.png"/>
            </div>
            <div>
                <img src="1.png"/>
            </div>
            {/* <div className="flex-shrink-0 aspect-w-20 aspect-h-20">
            <a
              type="button"
              href="https://craigj915.github.io/fantastic-octo-sniffle/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full bg-cover"
            ><img src="./Assets/1.png"/></a>
          </div>
          <div className="flex-shrink-0 aspect-w-4 aspect-h-3">
            <a
              type="button"
              href="https://github.com/Craigj915/expert-octo-journey"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full bg-cover"
            ><img src="./Assets/2.png"/></a>
          </div>
          <div className="flex-shrink-0 aspect-w-4 aspect-h-3">
            <a
              type="button"
              href="https://github.com/Craigj915/fantastic-octo-waffle"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full bg-cover"
            ><img src="./Assets/3.png"/></a>
          </div>
          <div className="flex-shrink-0 aspect-w-4 aspect-h-3">
            <a
              type="button"
              href="https://github.com/Craigj915/glowing-octo-garbanzo"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full bg-cover"
            ><img src="./Assets/4.png"/></a>
          </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageThree;
