import { React, useState, useEffect} from "react";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaGoogle,
} from "react-icons/fa6";

const Logo = () => {

  const [screenSmall, setScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSmall(window.innerWidth < 640);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

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
            <ul className={screenSmall == true ? "hidden" : "flex flex-col textColor space-y-4 items-center"}>
            {/* flex flex-col textColor space-y-4 items-center */}
              <li>
                <a
                  type="button"
                  href="https://github.com/Craigj915"
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
