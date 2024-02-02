import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaGoogle,
} from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex-none justify-start bg flex flex-col">
      <div className="flex-none justify-start bg p-8 flex-grow">
        <div className="static">
          <a type="button" href="#home" className="z-50">
            <img
              id="logo"
              className="h-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              src="/OctoLogo.png"
            />
          </a>
        </div>
        <div
          id="socials"
          className="static h-full bg flex items-center justify-center"
        >
          <div className="fixed bottom-20">
            <ul className="flex flex-col textColor space-y-4 items-center invisible sm:visible">
              <li>
                <a
                  type="button"
                  href="https://github.com/Craigj915?tab=overview&from=2023-09-01&to=2023-09-28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-8 w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                </a>
              </li>
              <li>
                <a
                  type="button"
                  href="https://www.linkedin.com/in/craigj915/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-8 w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                </a>
              </li>
              <li>
                <a
                  type="button"
                  href="https://www.instagram.com/cra1g.exe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-8 w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                </a>
              </li>
              <li>
                <a
                  type="button"
                  href="https://wa.me/447549521803"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-8 w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                </a>
              </li>
              <li>
                <a
                  type="button"
                  href="mailto:craigj915@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle className="h-8 w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
