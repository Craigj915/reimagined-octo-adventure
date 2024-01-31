import React from 'react'

const PageOne = () => {
  return (
    <div>
        <section id="home" className="h-screen homeBg overflow-clip flex flex-col">
      <div className="m-auto">
        <div className="flex justify-center py-4">
          <div
            className="redHatDisp spaceED textBig drop-shadow-md text-xs sm:text-lg lg:text-xl xl:text-2xl"
          >
            CRAIG JOHNSON
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div
            className="redHatDisp textBig text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-md"
          >
            MAKING
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div
            className="redHatDisp font-bold text-blue-300 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-md"
          >
            AWESOME
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div
            className="redHatDisp textBig text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-md"
          >
            STUFF
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div
            className="redHatDisp textBig text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-md"
          >
            ALWAYS
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default PageOne