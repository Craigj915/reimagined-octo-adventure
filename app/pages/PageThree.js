import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const PageThree = () => {
  const [modal, setModal] = useState(null);
  const modals = [
    {
      id: 0,
      title: "Reimagined-Octo-Adventure",
      repo: "https://github.com/Craigj915/reimagined-octo-adventure",
      image: "work (0).png",
      desc: "The site that you are currently on and one of my favourite projects sofar, I hope you enjoy it too.",
      link: "",
    },
    {
      id: 1,
      title: "Fantastic-Octo-Sniffle",
      repo: "https://github.com/Craigj915/fantastic-octo-sniffle",
      image: "work (1).png",
      desc: "A small text based game made ussing basic html and javascript.",
      link: "https://craigj915.github.io/fantastic-octo-sniffle/",
    },
    {
      id: 2,
      title: "Glowing-Octo-Garbanzo",
      repo: "https://github.com/Craigj915/fantastic-octo-sniffle",
      image: "work (2).png",
      desc: "This is a simple weather application developed using React.js and the OpenWeatherAPI. The app allows users to search for weather forecasts in different cities. Users can input the city name, and the app retrieves and displays relevant weather data, including temperature, weather description, icons, wind speed, humidity, and more. The application is designed with a clean and user-friendly interface, providing a convenient way to check weather information for multiple days in the selected city.",
      link: "https://glowing-octo-garbanzo.vercel.app/",
    },
    {
      id: 3,
      title: "TDA-SAC",
      repo: "https://github.com/Craigj915/TDA-SAC",
      image: "work (3).png",
      desc: "The Developer Academy Tracker is a comprehensive application designed to streamline various administrative tasks. With a user-friendly interface, the app offers functionalities such as course management, tracking sick leave and holidays, and a seamless system for creating and managing user accounts with assigned teams and roles. One of its standout features is the notification system, specifically tailored for holiday requests, ensuring efficient communication and organization within The Developer Academy. This all-in-one tracker is built to enhance productivity and simplify administrative processes for a more streamlined experience. ",
      link: "https://tda-sac.vercel.app/",
    },
    {
      id: 4,
      title: "Stunning-Octo-Goggles",
      repo: "https://github.com/Craigj915/stunning-octo-goggles",
      image: "work (4).png",
      desc: "Movie / Series app using local storage",
      link: "https://stunning-octo-goggles.vercel.app/",
    },
    {
      id: 5,
      title: "Dreadful-Octo-Adventure",
      repo: "https://github.com/Craigj915/dreadful-octo-adventure",
      image: "work (7).png",
      desc: "A work inprogress 2D platformer game written in Java",
      link: "",
    },
    {
      id: 6,
      title: "Automatic-Octo-Funicular",
      repo: "https://github.com/Craigj915/automatic-octo-funicular",
      image: "work (5).png",
      desc: "An event creator app using express mongodb and react.",
      link: "",
    },
    {
      id: 7,
      title: "Expert-Octo-Journey",
      repo: "https://github.com/Craigj915/expert-octo-journey",
      image: "work (6.1).png",
      desc: "",
      link: "https://craigj915.github.io/expert-octo-journey/",
    },
    {
      id: 8,
      title: "Curly-Octo-Enigma",
      repo: "https://github.com/Craigj915/curly-octo-enigma",
      image: "work (8).png",
      desc: "First webpage made using tailwindCss. This site was suppose to be about my hobbies, but quickly turned into a playground for using tailwind",
      link: "https://craigj915.github.io/fantastic-octo-waffle/",
    },
    {
      id: 9,
      title: "Fantastic-Octo-Waffle",
      repo: "https://github.com/Craigj915/fantastic-octo-waffle",
      image: "work (9).png",
      desc: "",
      link: "https://curly-octo-enigma-three.vercel.app/",
    },
    {
      id: 10,
      title: "TDA-Social-Media-App",
      repo: "https://github.com/infinitemax/TDA-social-media-app",
      image: "work (10).png",
      desc: "A social media app created by Max, Melissa and myself.",
      link: "https://tda-social-media-app.vercel.app/",
    },
    {
      id: 11,
      title: "Fluffy-Octo-Engine",
      repo: "https://craigj915.github.io/fluffy-octo-engine/",
      image: "work (11).png",
      desc: "A ceasar cipher app",
      link: "https://github.com/Craigj915/fluffy-octo-engine",
    },
  ];

  const openModal = (modalId) => {
    const selectedModal = modals.find((modal) => modal.id === modalId);
    setModal(selectedModal);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div>
      <section id="work" className="py-24 overflow-clip flex flex-col">
        <div className="py-4 text-right sm:w-4/6 xl:w-1/2 sm:mx-auto">
          <div className="flex justify-end px-[4%] mb-3">
            <div className="redHatDisp spaceED textBig text-xs sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
              MY WORK
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-left">
            {modals.map((modal) => (
              <div
                key={modal.id}
                onClick={() => openModal(modal.id)}
                className="cursor-pointer hover:scale-105 drop-shadow-md"
              >
                <img src={modal.image} alt={modal.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="">
        {modal && (
          <div
            id={modal.id}
            className="w-full sm:w-3/4 p-2 rounded-md overflow-hidden z-50 bgGray2 fixed"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative">
              <div>
                <a
                  type="button"
                  href={modal.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-12 left-3 redHatDisp font-bold text-blue-300 text-lg sm:text-2xl drop-shadow-lg hover:scale-110 hover:text-red-500"
                >
                  &gt; {modal.title} &lt;
                </a>
                <IoClose
                  
                  className="absolute top-8 right-3 redHatDisp font-bold text-blue-300 text-xl drop-shadow-lg cursor-pointer hover:scale-110 hover:text-red-500 size-10"
                  onClick={closeModal}
                />
              </div>
              <a
                type="button"
                href={modal.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={modal.image}
                  className="w-full h-fit rounded-md"
                  alt={modal.title}
                />
              </a>
            </div>
            <div className="h-fit w-full  flex p-2 text-white">{modal.desc}</div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PageThree;
