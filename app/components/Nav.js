import React from "react";

const Nav = () => {
  return (
    <div>
      <div id="navRight" className="flex-none justify-end pr-8 pt-8 bg ">
        <ul className="text-right inter textBig text-2xl">
          <li>
            <a
              type="button"
              href="#about"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              type="button"
              href="#work"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300"
            >
              WORK
            </a>
          </li>
          <li>
            <a
              type="button"
              href="#contact"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              type="button"
              href="https://drive.google.com/file/d/17FlsaNU30pBJK3ePNEYVXfrWfcRmiBCu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
