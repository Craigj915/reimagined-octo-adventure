import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import modalsJson from '../Modals.json';

const PageThree = () => {
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState("ALL");

  const typesToDisplay = selected;

  const modals = JSON.parse(JSON.stringify(modalsJson));

  const openModal = (modalId) => {
    const selectedModal = modals.find((modal) => modal.id === modalId);
    setModal(selectedModal);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div>
      <section id="work" className="py-24 flex flex-col h-fit">
        <div className="py-4 text-right sm:w-4/6 xl:w-1/2 sm:mx-auto">
          <div className="flex justify-end px-[4%] mb-3">
            <div className="redHatDisp spaceED textBig text-xs sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md">
              MY WORK
            </div>
          </div>
          <div className="px-[4%] flex justify-start">
            <ul className="flex flex-wrap justify-center space-x-6 redHatDisp spaceED textBig text-xs sm:text-sm lg:text-md xl:text-lg drop-shadow-md">
              <li
                className={
                  selected === "ALL"
                    ? "scale-110 text-blue-300 drop-shadow-lg"
                    : "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300 drop-shadow-lg"
                }
                onClick={() => setSelected("ALL")}
              >
                ALL
              </li>
              <li
                className={
                  selected === "MERN"
                    ? "scale-110 text-blue-300 drop-shadow-lg"
                    : "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300 drop-shadow-lg"
                }
                onClick={() => setSelected("MERN")}
              >
                MERN
              </li>
              <li
                className={
                  selected === "NEXT"
                    ? "scale-110 text-blue-300 drop-shadow-lg"
                    : "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300 drop-shadow-lg"
                }
                onClick={() => setSelected("NEXT")}
              >
                NEXT
              </li>
              <li
                className={
                  selected === "JAVA"
                    ? "scale-110 text-blue-300 drop-shadow-lg"
                    : "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300 drop-shadow-lg"
                }
                onClick={() => setSelected("JAVA")}
              >
                JAVA
              </li>
              <li
                className={
                  selected === "OTHER"
                    ? "scale-110 text-blue-300 drop-shadow-lg"
                    : "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300 drop-shadow-lg"
                }
                onClick={() => setSelected("OTHER")}
              >
                OTHER
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-left">
            {modals.filter((modal) => modal.type.some((t) => typesToDisplay.includes(t))).map((modal) => (
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
              <div className="text-center">
                <a
                  type="button"
                  href={modal.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit redHatDisp font-bold text-blue-300 text-lg sm:text-2xl drop-shadow-lg hover:scale-110 hover:text-red-500 underline underline-offset-8"
                >
                  &gt; {modal.title} &lt;
                </a>
                <IoClose
                  className="absolute top-0 right-2 redHatDisp font-bold text-blue-300 text-xl drop-shadow-lg cursor-pointer hover:scale-110 hover:text-red-500 size-10"
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
            <div className="h-fit w-full flex p-2 text-white">{modal.desc}</div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PageThree;
